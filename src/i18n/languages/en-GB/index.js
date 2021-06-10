export default {
  common: require('./common').default,
  bpmn: require('./bpmn').default,
  bpmnModeler: require('./bpmnModeler').default,
  bpmnSidePanel: require('./bpmnSidePanel').default,
  dataTree: require('./dataTree').default,
  errors: require('./errors').default,
  workflow: require('./workflow').default,
  workflowEvent: require('./workflowEvent').default,
  workflowExecutionInstance: require('./workflowExecutionInstance').default,
  schemasList: require('./schemasList').default,
  executionReport: require('./executionReport').default,
  treeSelect: require('./treeSelect').default,
  userRolesPicker: require('./userRolesPicker').default,
  validation: require('./validation').default,
  workflowDefinitionVersionsHistory: require('./workflowDefinitionVersionsHistory')
    .default,
  workflowDefinitionArchived: require('./workflowDefinitionArchived').default
}
