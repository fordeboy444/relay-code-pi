# agents

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/agent-studio/agents
- **Summary:** Agents

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/agents#__docusaurus_skipToContent_fallback)

Version: v3

Documentation for Agent Studio APIs

[📄️Create Agent\
---------------\
\
Creates a new agent with staging version. The agent will be created with an initial staging version that can later be promoted to production.](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/create-agent)

[📄️List Agents\
--------------\
\
Lists all active agents for the specified location. locationId is required parameter to ensure optimal performance. Supports pagination using limit and offset. Optionally filter by isPublished=true to return only agents with a published production version.](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-agents)

[📄️Update Agent\
---------------\
\
Updates a specific agent version by versionId. Supports updating nodes, edges, variables, and configuration.](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/update-agent-version)

[📄️Update Agent Metadata\
------------------------\
\
Updates agent metadata such as name, description, and status.](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/update-agent-metadata)

[📄️Delete Agent\
---------------\
\
Deletes an agent and all its versions.](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/delete-agent)

[📄️Get Agent\
------------\
\
Gets a specific agent by its ID for the specified location with all its versions. Returns complete agent metadata and all non-deleted versions (draft, staging, production). locationId is required parameter. The agent must have active status.](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-agent-by-id)

[📄️Promote to Production\
------------------------\
\
Promotes a draft version to production.](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/promote-and-publish)

[📄️Execute Agent\
----------------\
\
Executes the specified agent and returns a non-streaming JSON response with the complete agent output. The agent must be in active status and belong to the specified location. locationId is required in the request body.](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/execute-agent)

[📄️List Agents (Deprecated)\
---------------------------\
\
\*\*Deprecated endpoint - use GET /agent instead.\*\*](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-agents-deprecated)

[📄️Get Agent (Deprecated)\
-------------------------\
\
\*\*Deprecated endpoint - use GET /agent/:agentId instead.\*\*](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/get-agent-by-id-deprecated)

[📄️Execute Agent (Deprecated)\
-----------------------------\
\
\*\*Deprecated endpoint - use POST /agent/:agentId/execute instead.\*\*](https://marketplace.gohighlevel.com/docs/ghl/agent-studio/execute-agent-deprecated)
