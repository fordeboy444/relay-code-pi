# Pipelines

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/opportunities/pipelines
- **Summary:** Pipelines

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/pipelines#__docusaurus_skipToContent_fallback)

Version: v3

Documentation for Opportunities API

[📄️Get Pipelines\
----------------\
\
Get Pipelines](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipelines)

[📄️Create Pipeline\
------------------\
\
Creates a new pipeline with at least one stage for a given location. Pipeline names must be unique per location (case-insensitive), and stage names must be unique within the pipeline. To enable manual win probability, set \`useOpportunityProbability\` to \`true\` and provide a \`stageWinProbability\` (0–100) on every stage — if any stage is missing a value, the system falls back to auto-computed probabilities based on stage position.](https://marketplace.gohighlevel.com/docs/ghl/opportunities/create-pipeline)

[📄️Get Pipeline\
---------------\
\
Retrieves a single pipeline by its ID, including all its stages and configuration.](https://marketplace.gohighlevel.com/docs/ghl/opportunities/get-pipeline)

[📄️Update Pipeline\
------------------\
\
Updates an existing pipeline. The \`stages\` array is a full replacement — include the \`id\` field on existing stages to retain them, or omit it to create a new stage. You cannot remove all stages at once. Any opportunities in removed stages are automatically migrated to the lowest-position remaining stage. Pipeline and stage names must remain unique (case-insensitive) within the location. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-709536/75a21483123abd7](https://marketplace.gohighlevel.com/docs/ghl/opportunities/update-pipeline)

[📄️Delete Pipeline\
------------------\
\
Permanently deletes a pipeline and all opportunities within it. This action is irreversible — all opportunities across every stage of this pipeline will be removed. Ensure you have migrated or exported any opportunities before calling this endpoint.](https://marketplace.gohighlevel.com/docs/ghl/opportunities/delete-pipeline)
