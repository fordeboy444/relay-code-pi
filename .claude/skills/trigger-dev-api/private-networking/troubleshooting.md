# Troubleshooting private networking

> Source: https://trigger.dev/docs/private-networking/troubleshooting

This page collects common issues when adding a private connection. If your problem isn’t listed here, [get in touch](https://trigger.dev/docs/community)
.

[​](https://trigger.dev/docs/private-networking/troubleshooting#%E2%80%9Dprivate-link-not-found%E2%80%9D-in-the-setup-wizard)

”Private link not found” in the setup wizard
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If the setup wizard errors out with **Private link not found** when you submit the VPC Endpoint Service name, it almost always means your endpoint service has not been shared with Trigger.dev’s AWS account. Trigger.dev cannot provision a VPC Endpoint until your endpoint service explicitly authorizes our AWS account as a consumer. Until that happens, the service name is invisible to us — even though the name itself is correct.

### 

[​](https://trigger.dev/docs/private-networking/troubleshooting#how-to-fix-it)

How to fix it

1

[](https://trigger.dev/docs/private-networking/troubleshooting#)

Open your endpoint service in the AWS console

Go to **VPC → Endpoint services** in the AWS region where you created the service, and select your service.

2

[](https://trigger.dev/docs/private-networking/troubleshooting#)

Open the Allow principals tab

Click the **Allow principals** tab and check whether Trigger.dev’s AWS account is listed.

3

[](https://trigger.dev/docs/private-networking/troubleshooting#)

Add Trigger.dev's account if it's missing

Click **Allow principals** and add an entry in this format, replacing `<account-id>` with the Trigger.dev AWS account ID shown on the **Add connection** page in your dashboard:

    arn:aws:iam::<account-id>:root
    

Always copy the account ID from your Trigger.dev dashboard. The correct value differs between environments — don’t reuse an ID from another source.

4

[](https://trigger.dev/docs/private-networking/troubleshooting#)

Retry in the Trigger.dev dashboard

Once the principal is allow-listed, return to the **Add connection** page in Trigger.dev and submit the form again. The wizard should now find your endpoint service and start provisioning.

For full setup instructions including this step, see [Setting up PrivateLink in the AWS Console](https://trigger.dev/docs/private-networking/aws-console-setup)
.

[​](https://trigger.dev/docs/private-networking/troubleshooting#connection-is-active-but-the-assigned-ip-is-not-reachable-from-tasks)

Connection is Active but the assigned IP is not reachable from tasks
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If your private connection shows **Active** in the Trigger.dev dashboard and the NLB target group reports healthy targets, but tasks still cannot reach the assigned IP, the most common cause is that your Network Load Balancer is enforcing security group rules on PrivateLink traffic. When a security group is attached to an NLB, AWS exposes a separate setting called **Enforce inbound rules on PrivateLink traffic**. When this is **on**, the NLB applies its security group’s inbound rules to traffic arriving from VPC endpoints — and the source IP it evaluates is the **private IP of the consumer’s VPC endpoint network interface**, not an IP in your own VPC. Because that IP belongs to Trigger.dev’s VPC and isn’t known ahead of time, the SG rule almost never matches, and traffic is silently dropped at the NLB.

### 

[​](https://trigger.dev/docs/private-networking/troubleshooting#how-to-fix-it-2)

How to fix it

1

[](https://trigger.dev/docs/private-networking/troubleshooting#)

Open your Network Load Balancer in the AWS console

Go to **EC2 → Load balancers** in the region where your NLB lives and select the load balancer backing your endpoint service.

2

[](https://trigger.dev/docs/private-networking/troubleshooting#)

Edit the security group settings

On the **Security** tab, click **Edit**.

3

[](https://trigger.dev/docs/private-networking/troubleshooting#)

Turn off PrivateLink enforcement

Uncheck **Enforce inbound rules on PrivateLink traffic** and save.

This only changes how the NLB itself filters traffic. Authorization is still enforced by the endpoint service’s **Allow principals** list, so only AWS accounts you’ve explicitly allow-listed can connect.

4

[](https://trigger.dev/docs/private-networking/troubleshooting#)

Retry from your task

Re-run a task that dials the assigned private IP. The connection should now succeed.

If you need to keep the enforcement on for compliance reasons, the alternative is to widen your NLB’s security group inbound rule to `0.0.0.0/0` on the listener port. Allow-listing the consumer endpoint’s CIDR is not practical because it lives in Trigger.dev’s VPC and may change.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/private-networking/aws-console-setup)
[OverviewGet live run updates and stream data from background tasks to your frontend or backend. No polling.\
\
Next](https://trigger.dev/docs/realtime/overview)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
