# Setting up PrivateLink in the AWS Console

> Source: https://trigger.dev/docs/private-networking/aws-console-setup

This guide walks through setting up the AWS side of a private connection: a Network Load Balancer (NLB), a target group pointing at the resource you want to expose, and a VPC Endpoint Service that authorizes Trigger.dev to consume it.

Prefer Terraform? Open the “Add connection” page in the Trigger.dev dashboard and use the Terraform wizard to generate a ready-to-apply script. The wizard creates everything described below and pre-fills our AWS account ID for you.

[​](https://trigger.dev/docs/private-networking/aws-console-setup#prerequisites)

Prerequisites
-------------------------------------------------------------------------------------------------

Before you start you’ll need:

*   An **AWS account** with permission to create VPC, EC2, and ELB resources
*   A **resource** in a VPC subnet that you want to expose (RDS instance, ElastiCache cluster, internal API, etc.)
*   The **Trigger.dev AWS account ID** — find this on the “Add connection” page in your Trigger.dev dashboard, in the “I have my details” or “Step-by-step guide” cards
*   A **VPC** that contains the resource, with at least one private subnet per Availability Zone you want to serve from

PrivateLink connections are zonal. If your resource lives in a single AZ, your connection will only be available from that AZ. For higher availability, ensure target groups can route to multiple AZs.

[​](https://trigger.dev/docs/private-networking/aws-console-setup#step-1-create-a-target-group-pointing-at-your-resource)

Step 1: Create a target group pointing at your resource
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The target group is how the NLB will know where to forward traffic. AWS requires a target group when creating a load balancer, so we’ll set this up first.

1

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Open the target groups page

Go to **EC2 → Target Groups → Create target group**.

2

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Choose a target type

*   **IP addresses** for RDS, ElastiCache, or any resource you can reach by IP
*   **Instances** for EC2 instances you own
*   **Application Load Balancer** if your resource sits behind an ALB

For most database use cases, **IP addresses** is correct. NLBs don’t support Lambda targets directly — if you need to expose a Lambda, put it behind an ALB and use the ALB target type.

3

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Configure the target group (first step of the AWS form)

On the **Specify group details** page (the first of two steps in AWS’s target-group form), set:

*   **Name**: e.g. `trigger-postgres-tg`
*   **Protocol**: TCP
*   **Port**: the port your resource listens on (5432 for Postgres, 6379 for Redis, 3306 for MySQL, etc.)
*   **VPC**: the VPC where your resource lives (this must match the VPC you’ll use for the NLB)
*   **Health check protocol**: TCP

Click **Next** to move to the second step (registering targets).![Target group first step — basic configuration](https://mintcdn.com/trigger/z5G1rPi6LadJHHGA/images/priv-connections-target-group-first-step.png?w=2500&fit=max&auto=format&n=z5G1rPi6LadJHHGA&q=85&s=3f49cb2204e99ad5fcdf113db6f404d8)

4

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Register your targets (second step of the AWS form)

On the **Register targets** page — the second step of the IP target-group flow — paste the private IPs of your resource and set the port to the same value you picked above. Click **Include as pending below**, then **Create target group**.![Register targets in the target group](https://mintcdn.com/trigger/z5G1rPi6LadJHHGA/images/priv-connections-target-group-register-listeners.png?w=2500&fit=max&auto=format&n=z5G1rPi6LadJHHGA&q=85&s=bb2b5bfa3de770eac334b5f628f8cd8d)

Show How to find the IP for an ElastiCache or RDS instance (no bastion needed)

Both ElastiCache and RDS expose a DNS endpoint, not an IP, on their console pages. Find the private IP behind the endpoint via the EC2 console:

1.  Open **EC2 → Network & Security → Network Interfaces**.
2.  In the search bar, filter by **Description** with `ElastiCache` (or `RDSNetworkInterface` for RDS). Optionally narrow further by **VPC ID** if you have several clusters.
3.  Read the **Primary private IPv4 address** column — that’s the IP to register here. For multi-node clusters or read replicas, each node has its own ENI and IP.

You can also reach the same list from **VPC → Subnets → <your-subnet> → Network Interfaces tab**, which scopes the list to a single subnet.

RDS and ElastiCache endpoints’ IP addresses can change after failover or maintenance. For long-lived connections, consider running a small Lambda or sidecar that periodically resolves the DNS name and updates the target group, or use a [DNS-resolved](https://aws.amazon.com/blogs/networking-and-content-delivery/hostname-as-target-for-network-load-balancers/)
 target if your setup supports it.

[​](https://trigger.dev/docs/private-networking/aws-console-setup#step-2-create-an-internal-network-load-balancer)

Step 2: Create an internal Network Load Balancer
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

The NLB is what PrivateLink exposes to Trigger.dev. It must be **internal** (not internet-facing).

1

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Open the EC2 console

Go to **EC2 → Load Balancers → Create load balancer** and choose **Network Load Balancer**.

2

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Configure the basics

*   **Name**: something descriptive, e.g. `trigger-postgres-nlb`
*   **Scheme**: **Internal**
*   **IP address type**: IPv4 ![Network Load Balancer basic configuration](https://mintcdn.com/trigger/qsvm1yIKmUswG1Mo/images/priv-connections-network-load-balancer-basic.png?w=2500&fit=max&auto=format&n=qsvm1yIKmUswG1Mo&q=85&s=6fbab97b1a4d389b449a745feaa21e09)

3

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Choose VPC and subnets

Pick the same VPC as your target group. Select one private subnet per AZ that should serve traffic. Each subnet you select adds an availability zone to the endpoint.![Network Load Balancer VPC and Availability Zones](https://mintcdn.com/trigger/qsvm1yIKmUswG1Mo/images/priv-connections-network-load-balancer-vpc-az.png?w=2500&fit=max&auto=format&n=qsvm1yIKmUswG1Mo&q=85&s=6a9eea1589863a56c8a01fa322f2e0f5)

4

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Add a TCP listener forwarding to your target group

Under **Listeners and routing**, configure:

*   **Protocol**: TCP
*   **Port**: same as your target group port (5432 for Postgres, 6379 for Redis, etc.)
*   **Default action**: forward to the target group you created in Step 1 ![Add the target group to the NLB listener](https://mintcdn.com/trigger/qsvm1yIKmUswG1Mo/images/priv-connections-network-load-balancer-add-target-group.png?w=2500&fit=max&auto=format&n=qsvm1yIKmUswG1Mo&q=85&s=788fce84530ce416923f2d3afa9195b1)

5

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Create the load balancer and wait until it's Active

Click **Create load balancer**. Provisioning takes 1–2 minutes — wait until the NLB’s **State** column shows **Active** before moving on. The endpoint service in the next step won’t list the NLB until it’s fully active.

6

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Disable PrivateLink inbound rules enforcement on the NLB

Once the NLB is **Active**, open it and go to its **Security** tab, then click **Edit**. If a security group is attached, AWS enables **Enforce inbound rules on PrivateLink traffic** by default — leaving it on can cause traffic from the Trigger.dev VPC Endpoint to be silently dropped before reaching your listener. Uncheck **Enforce inbound rules on PrivateLink traffic** and save.![Uncheck Enforce inbound rules on PrivateLink traffic on the NLB](https://mintcdn.com/trigger/z5G1rPi6LadJHHGA/images/priv-connections-nlb-disable-inbound-rules-options.png?w=2500&fit=max&auto=format&n=z5G1rPi6LadJHHGA&q=85&s=036fc4bad89d31e6b7e55834c152ad16)

Test connectivity from a bastion host or another instance in the same VPC before continuing — e.g. `psql -h <nlb-dns-name> -p 5432 -U user -d db`. If the NLB can’t reach your resource, the PrivateLink connection won’t either.

[​](https://trigger.dev/docs/private-networking/aws-console-setup#step-3-create-a-vpc-endpoint-service)

Step 3: Create a VPC Endpoint Service
------------------------------------------------------------------------------------------------------------------------------------------------

This is the resource that PrivateLink consumers connect to.

Confirm the NLB from Step 2 is in the **Active** state before starting this step. It won’t appear in the **Available load balancers** dropdown until it has finished provisioning.

1

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Open the VPC console

Go to **VPC → Endpoint services → Create endpoint service**.

2

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Configure the endpoint service

*   **Name**: optional, but useful for identification, e.g. `trigger-postgres-endpoint`
*   **Load balancer type**: Network
*   **Available load balancers**: select the NLB you created
*   **Require acceptance for endpoint**: **No** (recommended) ![Create VPC Endpoint Service form](https://mintcdn.com/trigger/qsvm1yIKmUswG1Mo/images/priv-connections-create-endpoint-service.png?w=2500&fit=max&auto=format&n=qsvm1yIKmUswG1Mo&q=85&s=7adce3ba397b9a4708ab11e1d189a65a)

If you set “Require acceptance” to **Yes**, every connection request from Trigger.dev will sit in a pending state until you manually approve it. Setting it to **No** lets connections come up automatically once the principal is allow-listed.

3

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Skip private DNS

Leave the “Private DNS name” option disabled. Trigger.dev tasks dial the endpoint by its private IP, so private DNS isn’t needed.

4

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Configure cross-region access (optional)

If your Trigger.dev tasks run in a **different AWS region** from your endpoint service, expand the **Supported Regions** section and add the region(s) where Trigger.dev should be allowed to create the VPC Endpoint from (for example, add `eu-central-1` if your service is in `us-east-1` but tasks run in `eu-central-1`).If your tasks and resource are in the same region, you can skip this — same-region access is enabled by default.

Cross-region PrivateLink adds AWS data-transfer cost and ~10–30ms of latency depending on the region pair. Prefer same-region when possible.

5

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Create the endpoint service

Click **Create**. The service is created immediately — you’ll come back to copy its **Service name** once you’ve authorized Trigger.dev in the next step.

[​](https://trigger.dev/docs/private-networking/aws-console-setup#step-4-authorize-the-trigger-dev-aws-account)

Step 4: Authorize the Trigger.dev AWS account
----------------------------------------------------------------------------------------------------------------------------------------------------------------

By default, no one can connect to your endpoint service. You need to explicitly allow Trigger.dev’s AWS account.

1

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Open your endpoint service

Go to **VPC → Endpoint services**, select the service you just created.

2

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Open the Allow principals tab

Click the **Allow principals** tab, then **Allow principals**.

3

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Add Trigger.dev's account

Paste the principal ARN in this format, replacing `<account-id>` with the Trigger.dev AWS account ID shown in your dashboard:

    arn:aws:iam::<account-id>:root
    

![Allow principal dialog](https://mintcdn.com/trigger/qsvm1yIKmUswG1Mo/images/priv-connections-allow-principal.png?w=2500&fit=max&auto=format&n=qsvm1yIKmUswG1Mo&q=85&s=7ea2b551dc2d30e950c8141b0ae07c68)

You will find the correct AWS account ID in the **Add connection** page of the Trigger.dev dashboard. Do not assume an account ID — it differs between Trigger.dev environments.

4

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Click Allow principals

The principal is now authorized to create a VPC Endpoint targeting your service.

5

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Copy the endpoint service name

On the endpoint service detail page, copy the **Service name** value — it looks like `com.amazonaws.vpce.us-east-1.vpce-svc-0123abcd...`. You’ll paste this into the Trigger.dev dashboard in the next step.![Copy the endpoint service name](https://mintcdn.com/trigger/qsvm1yIKmUswG1Mo/images/priv-connections-copy-endpoint-name.png?w=2500&fit=max&auto=format&n=qsvm1yIKmUswG1Mo&q=85&s=2276bc5e13da432812e5bbd88da19735)

[​](https://trigger.dev/docs/private-networking/aws-console-setup#step-5-add-the-connection-in-trigger-dev)

Step 5: Add the connection in Trigger.dev
--------------------------------------------------------------------------------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Open the dashboard

In Trigger.dev, go to **Organization Settings → Private Connections** and click **Add connection**.

2

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Pick the I have my details card

Then fill in:

*   **Friendly name**: a short, human-readable label for this connection.
*   **VPC Endpoint Service name**: paste the `com.amazonaws.vpce.<region>.vpce-svc-...` value from Step 4.
*   **Target region**: the AWS region your endpoint service lives in.

3

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Submit

Submit the form. The connection’s status moves through **Pending → Provisioning → Active**. Provisioning typically takes 30–90 seconds.

4

[](https://trigger.dev/docs/private-networking/aws-console-setup#)

Verify

Once **Active**, the dashboard shows the assigned private IP. Plug it into the connection-string environment variable your task already uses (for example, `DATABASE_URL` set on the **Environment Variables** page) and your tasks will reach the resource over PrivateLink.

[​](https://trigger.dev/docs/private-networking/aws-console-setup#troubleshooting)

Troubleshooting
-----------------------------------------------------------------------------------------------------

See the dedicated [Troubleshooting](https://trigger.dev/docs/private-networking/troubleshooting)
 page for common problems such as the “Private link not found” wizard error. A few quick checks specific to this setup flow:

Show Status stays at Pending or Provisioning for several minutes

*   Confirm Trigger.dev’s AWS account ID is in your endpoint service’s **Allow principals** list.
*   Confirm the endpoint service is **Available** in the AWS console.
*   Confirm “Require acceptance” is set to **No** on the endpoint service. If it’s set to **Yes**, the request is sitting in your pending queue and you must approve it manually.

Show Status is Active but my task can't connect

*   Confirm the NLB has a target registered and the target’s health check is passing.
*   Confirm the listener port matches the port your task code is dialing.
*   Confirm the security group on your resource allows inbound traffic from the NLB or the VPC’s private IP range.
*   If the NLB itself has a security group attached, turn off **Enforce inbound rules on PrivateLink traffic** on the load balancer. See [the troubleshooting page](https://trigger.dev/docs/private-networking/troubleshooting#connection-is-active-but-the-assigned-ip-is-not-reachable-from-tasks)
     for details.
*   Try connecting from inside the VPC first (e.g., a bastion host) to rule out resource-side issues.

Show Connection works but is slow

*   Cross-region connections add ~10–30ms RTT depending on the regions involved. If your tasks run in a different region than your resource, expect higher latency.
*   The NLB and target group’s health checks influence connection setup time. Tighter health check intervals reduce failover time after a backend goes unhealthy.

Show I want to remove a connection

Delete the connection from **Organization Settings → Private Connections** in the Trigger.dev dashboard. We’ll tear down our VPC Endpoint and remove the network policy automatically. You can then delete your VPC Endpoint Service, NLB, and target group on the AWS side.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/private-networking/overview)
[TroubleshootingCommon problems when setting up an AWS PrivateLink connection to Trigger.dev, and how to resolve them.\
\
Next](https://trigger.dev/docs/private-networking/troubleshooting)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
