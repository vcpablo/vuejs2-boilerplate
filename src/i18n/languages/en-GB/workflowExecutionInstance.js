export default {
  cancelWorkflow: 'Cancel Workflow',
  logId: 'Log ID',
  pageDescription: 'All errors and warnings for the chosen item and instance.',
  pageTitle:
    'Workflow Errors and Warnings: <i>{document}</i> on <i>{workflow}</i>',
  prevSevenDays: 'Prev. 7 days',
  prevTwentyEightDays: 'Prev. 8-28 days',
  viewErrorMessage: 'Unable to load workflow execution instance.',
  workflowInstances: 'Workflow Instances',
  cancelModal: {
    title: 'Cancel Workflow',
    warning: 'Cancelling a workflow cannot be undone.',
    consequence:
      'Canceling a workflow will mark this workflow instance as cancelled and it will not be processed by the workflow engine.',
    explanation: 'A workflow instance may be cancelled because:',
    byMistake: 'An item entered the wrong workflow by mistake.',
    blocked:
      'A workflow instance is blocked and cannot be unblocked without first publishing a new version of the workflow.'
  }
}
