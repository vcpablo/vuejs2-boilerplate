export default {
  addWorkflow: 'Add Workflow',
  order: 'Order',
  orderWorkflows: 'Order Workflows',
  archive: 'Archive',
  error: 'Unable to load schemas list.',
  errorWorkflows: 'Unable to load workflows list.',
  schemas: 'Schemas',
  schema: 'Schema',
  schemaSettings: 'Schema Settings',
  folder: 'Folder',
  subfolder: 'Subfolder',
  subschema: 'Subschema',
  metadataSchemas: 'Metadata Schemas',
  workflow: 'Workflow',
  draft: 'Draft?',
  locked: 'Locked?',
  editAndLock: 'Edit and Lock',
  unlock: 'Unlock',
  unlockConfirmation: 'Are you sure you want to unlock this workflow?',
  showAllVersions: 'Show All Versions',
  versionsHistory: 'Versions History',
  viewWorkflowExecutionInstances: 'View Execution Instances',
  createNewVersion: 'Create new version',
  createNewVersionConfirmation:
    'By creating a new version of this workflow, it will be cloned as a draft and its version will be incremented. Are you sure you want to proceed?',
  createNewVersionToastMessage:
    'New version of Workflow <b>{workflowDefinition}</b> created',
  duplicate: 'Duplicate',
  duplicateConfirmation:
    'By duplicating this workflow, the version 1 of a new unpublished workflow will be created with the same configurations. Are you sure you want to proceed?',
  duplicatedToastMessage: 'Workflow <b>{workflowDefinition}</b> duplicated',
  toggleIsActive: 'Turn Off | Turn On',
  toggleWorkflowStatus: 'Turn Off Workflow | Turn On Workflow',
  toggleIsActiveTitle: 'Turn Off: {name} | Turn On: {name}',
  toggleIsActiveDialog: {
    impactOnBusinessProcessesAdvice:
      'Items that were to be processed will no longer be, which could negatively impact business processes. | Items that trigger events that this workflow monitors will initiate this workflow for those items.',
    turningBackAdvice:
      'It may be turned back on at a later date. | It may be turned back off at a later date.',
    alert:
      'This will turn the workflow <b>off</b> in all Spaces linked to this Schema. | This will turn the workflow <b>on</b> for all Spaces linked to this Schema.'
  },
  toggleWorkflowSuccessMessage:
    'The workflow <b>{workflowDefinition}</b> was turned <b>off</b> | The workflow <b>{workflowDefinition}</b> was turned <b>on</b>',
  archiveModal: {
    title: 'Archive: {item} Items | Archive: {item}',
    alert:
      'This will archive and turn the workflow <b>off</b> in all Spaces linked to this Schema.',
    impactOnBusinessProcessesAdvice:
      'Items that would be processed will not which could impact business processes.',
    turningBackAdvice:
      ' They may be un-archived at a later date. | It may be un-archived at a later date.',
    confirmButton: 'Archive Workflows | Archive Workflow'
  },
  archivedToastMessage: '{selected} Workflow(s) archived at {time}.',
  goToArchive: 'Go to <a href="{link}">Archive</a>'
}
