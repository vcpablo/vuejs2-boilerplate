export default {
  unnamedWorkflow: 'unnamed workflow',
  unnamed: 'unnamed',
  newWorkflow: 'New Workflow:',
  editWorkflow: 'Edit Workflow:',
  editWorkflowNoColon: 'Edit Workflow',
  addWorkflow: 'Add Workflow:',
  addWorkflowNoColon: 'Add Workflow',
  viewWorkflow: 'View Workflow:',
  viewWorkflowNoColon: 'View Workflow',
  exportDiagram: 'Export Workflow',
  importXML: 'Import Workflow',
  save: 'Save',
  saveAndUnlock: 'Save and Unlock',
  publish: 'Publish',
  published: 'Published',
  lastSaved: 'Last Saved',
  lastPublished: 'Last Published',
  lastModifiedAt: 'Last Modified at',
  version: 'Version:',
  draft: 'Draft',
  superseded: 'Superseded',
  archive: 'Archive',
  cancelConfirmation:
    'All your unsaved data will be lost. Are you sure you want to cancel?',
  savedToastMessage: 'Workflow <b>saved</b> at {date}',
  savedWithErrorsToastMessage:
    '<p><b>Workflow saved with errors at {date}</b></p>Please, fix all errors before publishing.',
  publishedToastMessage: 'Workflow <b>published</b> at {date}',
  unlockedToastMessage: 'Workflow <b>unlocked</b> at {date}',
  lockedTo: 'Locked to:',
  order: 'Order:',
  orderMessage:
    'Order the workflows to indicate the sequence of execution. (Important if more than one workflow is updating the same object at the same time)',
  orderedToastMessage: 'Workflow <b>ordered</b>',
  newVersionCreatedToastMessage:
    'New workflow version ({version}) <b>created</b>',
  workflow: 'Workflow',
  refreshWorkflowExecutionOnChanges: 'This Workflow Instance has changed.',
  clickToReload: 'Click to reload.',
  viewWorkflowExecution:
    'View workflow: <i>"{artifactName}" on "{workflowExecutionId}"</i>',
  viewWorkflowAudit: 'View Workflow Audit',
  workflowAuditHint: 'The audit for the chosen item in the selected workflow.',
  viewWorkflowAuditTitle:
    'View workflow Audit: <i>"{artifactName}" on "{workflowExecutionId}"</i>',
  workflowBlockedByErrors:
    'This workflow is blocked by errors. Click here to view',
  publishDialogMessage:
    'Publishing this workflow will make the changes available immediately.',
  publishDialogDescription1:
    'Documents already under this workflow will remain with the previous version.',
  publishDialogDescription2:
    'Documents that newly trigger this workflow will use the latest version.',
  publishDialogFields: {
    commentDescription: 'Notes on the changes in this version of the workflow.'
  },
  routeLeaveConfirmation: {
    title: 'Unsaved Changes',
    warning: 'This Workflow has unsaved changes.',
    lastSaved: 'This Workflow was last saved saved at {modifiedAt}.',
    unsavedChanges: 'Any unsaved changes will be lost.',
    exit: 'Exit - Losing Unsaved Changes'
  }
}
