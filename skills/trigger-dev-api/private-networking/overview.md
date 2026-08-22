# Private networking

> Source: https://trigger.dev/docs/private-networking/overview

Private networking lets your Trigger.dev tasks reach databases, caches, and internal APIs that live inside your own AWS VPC, without exposing them to the public internet. Connectivity is established over [AWS PrivateLink](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html)
, so traffic stays on the AWS backbone.

Private networking is a Pro and Enterprise feature. If you’d like access, [get in touch](https://trigger.dev/docs/community)
.

[​](https://trigger.dev/docs/private-networking/overview#what-is-aws-privatelink)

What is AWS PrivateLink
------------------------------------------------------------------------------------------------------------

AWS PrivateLink is a managed service that creates a private, one-way connection between two AWS accounts without using the public internet, NAT gateways, internet gateways, or VPN tunnels. It works by pairing two resources:

*   A **VPC Endpoint Service** in the account that owns the resource (yours). This is fronted by a Network Load Balancer (NLB) and exposes whatever ports you choose.
*   A **VPC Endpoint** in the account that wants to consume the resource (Trigger.dev’s). The endpoint is an Elastic Network Interface (ENI) inside our VPC with a private IP that your task pods can dial directly.

The connection is unidirectional: only the endpoint side can initiate connections. Your VPC cannot reach into ours.

[​](https://trigger.dev/docs/private-networking/overview#what-you-can-use-it-for)

What you can use it for
------------------------------------------------------------------------------------------------------------

Any TCP service running inside your VPC. Common use cases include:

*   **Databases**: PostgreSQL (RDS, Aurora), MySQL, MongoDB, ClickHouse, Redshift
*   **Caches**: ElastiCache Redis, Memcached
*   **Internal APIs**: services on EKS, ECS, EC2, or Lambda exposed through an internal NLB
*   **Message brokers**: self-hosted Kafka, RabbitMQ, NATS
*   **Vector databases and ML services** running in private subnets

If your resource is reachable from a Network Load Balancer in the same VPC, it can be exposed to Trigger.dev via PrivateLink.

[​](https://trigger.dev/docs/private-networking/overview#how-it-works-with-trigger-dev)

How it works with Trigger.dev
------------------------------------------------------------------------------------------------------------------------

When you add a private connection in the dashboard, the following happens:

1

[](https://trigger.dev/docs/private-networking/overview#)

You expose your resource

You create an internal NLB in front of your resource and a VPC Endpoint Service that points to it. You add Trigger.dev’s AWS account as an allowed principal so we’re permitted to connect.

2

[](https://trigger.dev/docs/private-networking/overview#)

We provision a VPC Endpoint

Once you submit the endpoint service name in the Trigger.dev dashboard, we provision a VPC Endpoint in our AWS account in the region you chose. The endpoint creates an ENI with a private IP that we wire up to reach your service.

3

[](https://trigger.dev/docs/private-networking/overview#)

Your tasks can reach the endpoint

Once the connection is **Active**, the dashboard shows the assigned IP. Pods running your tasks are network-authorized to connect to it.

### 

[​](https://trigger.dev/docs/private-networking/overview#connecting-from-your-task-code)

Connecting from your task code

When the connection becomes **Active**, the dashboard shows the assigned endpoint IP. Plug it into the connection-string environment variable your task already reads (for example, `DATABASE_URL` set on the **Environment Variables** page):

A private connection is scoped to your **organization**, not to a single environment. The same assigned IP works from any deployed environment your tasks run in — Preview branches, Staging, and Production — so you can set the connection-string env var per environment and point them all at the same private resource. (Local **Development** runs on your own machine, so it can’t reach the endpoint IP — use a regular public connection there.)

    import { task } from "@trigger.dev/sdk";
    import { Client } from "pg";
    
    export const queryDatabase = task({
      id: "query-database",
      run: async () => {
        // DATABASE_URL is set in the Trigger.dev dashboard to the connection's
        // assigned IP shown in Private Connections.
        const client = new Client({
          connectionString: process.env.DATABASE_URL,
        });
    
        await client.connect();
        const result = await client.query("SELECT NOW()");
        await client.end();
    
        return result.rows;
      },
    });
    

[​](https://trigger.dev/docs/private-networking/overview#isolation-between-organizations)

Isolation between organizations
----------------------------------------------------------------------------------------------------------------------------

Private networking is set up so that each organization’s connections are completely isolated from every other organization. Three layers enforce that:

### 

[​](https://trigger.dev/docs/private-networking/overview#1-dedicated-aws-account)

1\. Dedicated AWS account

Customer VPC Endpoints are provisioned in a **dedicated AWS account** that is separate from the account that runs Trigger.dev’s task workers. The dedicated account does nothing else — it only hosts customer endpoints. This limits the blast radius of any misconfiguration: even a misbehaving endpoint cannot reach worker infrastructure beyond the routes we explicitly define.

### 

[​](https://trigger.dev/docs/private-networking/overview#2-per-organization-network-policy)

2\. Per-organization network policy

Inside the Kubernetes cluster that runs your tasks, the default network policy denies all traffic to private IP ranges. When your organization creates a connection, we generate a [CiliumNetworkPolicy](https://docs.cilium.io/en/stable/network/kubernetes/policy/)
 that:

*   Targets **only pods labeled with your organization’s ID**
*   Allows egress **only to the specific endpoint IPs we provisioned for you**

A pod from another organization has neither the matching label nor a matching policy — its connection attempts to your endpoint IPs are dropped at the network layer before they ever reach an ENI.

### 

[​](https://trigger.dev/docs/private-networking/overview#3-aws-level-authorization)

3\. AWS-level authorization

PrivateLink itself enforces a second layer of authorization. Your VPC Endpoint Service has an explicit list of `allowed_principals` — only AWS accounts you list can even establish a connection. Trigger.dev provides each org with the same Trigger.dev AWS account ID, but the AWS account ID alone is useless without the matching CiliumNetworkPolicy on our side. To reach your endpoint, traffic must:

1.  Originate from a pod labeled with your org ID (enforced by us)
2.  Match an egress rule with your endpoint’s IPs (enforced by us)
3.  Hit a VPC Endpoint Service that has authorized our account (enforced by you)

All three conditions must be true. No organization can route traffic to another organization’s resources.

AWS account IDs are not secrets, but the VPC Endpoint Service name is also not enough on its own — you must explicitly add Trigger.dev’s account to your endpoint service’s allowed principals before any connection works. We’ll never see your service unless you authorize us.

[​](https://trigger.dev/docs/private-networking/overview#limits)

Limits
--------------------------------------------------------------------------

*   **Two connections per organization.** This is a soft limit — get in touch if you need more.
*   **All ports accepted.** Our security group allows all TCP ports from peered CIDRs. You control which ports are reachable through your NLB and target groups.
*   **Same-region or cross-region.** Connections work within the same region as your tasks or across regions (cross-region adds AWS-level cost and ~10-30ms latency).

[​](https://trigger.dev/docs/private-networking/overview#next-steps)

Next steps
----------------------------------------------------------------------------------

[Create a Private Link in the AWS Console\
----------------------------------------\
\
Step-by-step instructions for creating the NLB, target group, and VPC Endpoint Service in your AWS account.](https://trigger.dev/docs/private-networking/aws-console-setup)

[Troubleshooting\
---------------\
\
Common problems when setting up a private connection and how to resolve them.](https://trigger.dev/docs/private-networking/troubleshooting)

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/vercel-integration)
[AWS Console setupStep-by-step guide for exposing a resource from your AWS account to Trigger.dev via PrivateLink.\
\
Next](https://trigger.dev/docs/private-networking/aws-console-setup)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
