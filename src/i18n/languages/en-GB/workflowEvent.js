export default {
  workflowEvents: 'Workflow Events',
  noWorkflowEvents:
    'There are no workflow events at present. Add a workflow event to get started.',
  aboutWorkflowEvents:
    'A workflow event may be thrown by an end event in one workflow and caught by a start event in another workflow. This allows one workflow to trigger another',
  viewWorkflowEvent: 'Workflow Event: {name}',
  thrownByWorkflow: 'Thrown by workflow',
  caughtByWorkflow: 'Caught by workflow',
  hasNoWorkflow: 'Has no workflow related to this event.',
  addWorkflowEvent: 'Add Workflow Event',
  editWorkflowEvent: 'Edit Workflow Event',
  fetchError: 'Error loading workflow events',
  workflowEventForm: {
    save: 'Save',
    saveError: 'There was an error saving workflow event.',
    saveSuccess: 'Workflow event was successfully saved',
    success: 'Success',
    error: 'Error',
    cancel: 'Cancel',
    description:
      'A workflow event may be thrown by an end event in one workflow and caught by a start event in another workflow. This allows one workflow to trigger another.',
    fields: {
      name: {
        label: 'Name',
        description: 'This workflow event name MUST be unique.'
      }
    }
  },
  deletedToastMessage: 'Workflow Event <b>deleted</b>',
  deleteConfirmation: 'Are you sure you want to delete this workflow event?'
}
