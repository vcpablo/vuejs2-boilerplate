export default {
  actions: 'Action | Action | Actions',
  addGroup: 'Add Group',
  addIf: 'Add IF',
  and: 'AND',
  error: 'Error',
  clear: 'Clear',
  criteria: 'Criteria',
  description: 'Description',
  edit: 'Edit',
  elseNo: 'ELSE "NO"',
  event: 'Event',
  ifYes: 'IF "Yes"',
  item: 'Item',
  timer: 'Timer',
  types: 'Types',
  minutes: 'Minutes',
  hours: 'Hours',
  days: 'Days',
  weekdays: 'Week Days (Mon-Fri)',
  label: 'Label',
  required: 'Required',
  stopWorkflowOnError: 'stop workflow on error',
  optional: 'Optional',
  no: 'No',
  or: 'OR',
  passStartEventOnwards: 'Pass Start Event Onwards',
  selected: 'Selected',
  status: 'Status',
  throwEvent: 'Throw Event?',
  throwNamedEvent: 'Throw named event',
  yes: 'Yes',
  duplicate: 'Duplicate',
  delete: 'Delete',
  name: 'Name',
  shortName: 'Short Name',
  maximumLength: 'Length <= {maxlength} characters',
  type: 'Type',
  accessRights: 'Access Rights',
  owners: 'Owners',
  documentTypesHint: 'Event is only valid for these types.',
  artifactName: {
    label: 'Item Name'
  },
  tasks: {
    taskType: 'Task Type',
    artifactName: {
      hint:
        'Used to identify the Item created by this Task in Gateways and Smart Variables'
    },
    actor: {
      role: 'Role',
      who: 'Who',
      event: 'Event',
      performActionAsLabel: 'Perform the action as:',
      performActionAs: {
        event: 'Event (who initiated)',
        role: 'Role (single user only)'
      }
    },
    serviceTask: {
      selectStartEventType: 'You must specify a Type for the Start Event item',
      selectType: 'You must select at least one Type for the referenced Item',
      selectItem: 'You must specify an Item',
      selectIssueType: 'You must specify an Issue Type to proceed.',
      chooseFormType: 'Choose the type of the form.',
      chooseIssueType: 'Choose the type of issue',
      chooseMetadataItem: 'Which item to edit metadata for?',
      forApproval: 'For Approval',
      forComment: 'For Comment',
      forInformation: 'For Information',
      filter: 'Filter',
      sort: 'Sort',
      actions: 'Actions',
      distribution: 'Distribution',
      matrix: 'Matrix',
      distributionMatrix: 'Distribution Matrix',
      configureComplexDistribution:
        'Configure complex distributions based upon metadata criteria.',
      manageDistributionMatrix:
        'View Distribution Matrix | Edit Distribution Matrix',
      totalRows: '{total} rows',
      documentMetadata: 'Document: {metadataName}',
      sortAscendingMetadata: 'Sort by "Document: {metadataName}", Ascending',
      sortDescendingMetadata: 'Sort by "Document: {metadataName}", Descending',
      filterByMetadata: 'Filter by "Document: {metadataName}"',
      removeMetadata: 'Remove Column "Document: {metadataName}"',
      removeMetadataConfirmation:
        'All your metadata configuration will be lost. Are you sure you want to remove this column?',
      who: 'Who',
      role: 'Role',
      dueDate: 'Due Date',
      addRows: 'Add Rows',
      addFilterColumns: 'Add Filter Columns',
      importFromCSV: 'Import from CSV',
      exportToCSV: 'Export to CSV',
      filterColumns: 'Filter Columns',
      addOneOrMoreFilterColumns:
        'Add one or more filter columns to the distribution matrix to get started.',
      emptyDistributionMatrix: 'Distribution Matrix is empty',
      performActionAs: 'Perform the action as:',
      workflowServiceUser: 'Workflow Service User',
      eventWhoInitiated: 'Event (who initiated)',
      roleSingleUserOnly: 'Role (single user only)',
      issued: 'Issued',
      documents: 'Documents',
      noDocuments: 'No Documents',
      includeAllDocuments: 'Include All Documents',
      includeSubsetOfDocuments: 'Include Subset of Documents',
      included: 'Included',
      includePreviousVersion: 'Include Previous Version',
      criteria: 'Criteria',
      defineCriteria: 'Define the criteria for the subset:',
      addField: 'Add Field: {label}',
      addProperty: 'Add Property: {label}',
      fieldSettings: 'Field Settings: {label}',
      metadataField: 'Metadata Field',
      selectMetadataField: 'Select the metadata field you want to add.',
      allFieldsSelected: 'All fields have already been selected.',
      addMetadataField: 'Add Metadata Field',
      noMetadataFieldsSet: 'No metadata field values set.',
      noTaxonomySelected: 'No taxonomy selected.',
      nodeAlreadySet: 'Node already set',
      addTheFieldsYouWant: 'Add the fields you want to set values for below.',
      action: 'Action',
      appendTextField: 'When setting a value should it:',
      appendRadioText: 'Append to existing value',
      replaceRadioText: 'Replace existing value',
      reasonForIssue: 'Reason for Issue',
      forwardIssueType: 'Choose the type of issue to forward.',
      approvalSkipDescription:
        "If it isn't possible to delegate for this reason to this user/group, this step shall be skipped.",
      whichItem: 'Which item to edit access rights for?',
      get: 'Get',
      getExt: 'Get ext',
      change: 'Change',
      changeExt: 'Change ext',
      share: 'Share',
      addItemOwner: 'Which item to add owners to?',
      addOwners: 'Add Owners',
      addOwnersDescription: 'Add one or many owners to the item.',
      replaceOwners: 'Replace Owners',
      replaceOwnersDescription:
        'Remove all existing owners and replace them with the above set of users.',
      whichItemPrivacy: 'Which item to edit privacy for?',
      ownersAndIssued: 'Owners and Issued',
      ownersCompanyAndIssued: 'Owners plus their Company and Issued',
      everyone: 'Everyone',
      value1: 'Value 1',
      value2: 'Value 2',
      value3: 'Value 3',
      valueA: 'Value A',
      valueB: 'Value B',
      valueC: 'Value C',
      issueType: 'Issue Type',
      distributionMatrixSaveError:
        'Fill in all required field or/and remove duplicate rows',
      noMetadataFieldsConfigured:
        'No metadata fields configured for "{issueTypeName}".',
      property: 'Property',
      chooseProperties: 'Choose the Properties you want to add:',
      smartVariableMode: 'Smart Variable Mode',
      staticVariableMode: 'Static Variable Mode',
      append: {
        title: 'Append Text',
        label: 'Append text to the field.'
      },
      edit: {
        title: 'Edit Text: "{value}"',
        label: 'Edit the text component in the field.'
      },
      text: 'Text'
    },
    sendTask: {
      distribution: 'Distribution',
      to: 'To',
      cc: 'CC',
      bcc: 'BCC',
      subject: 'Subject',
      body: 'Body',
      sendEmail: 'Send Email',
      sendIssueReminder: 'Send Issue Reminder',
      errorRoles: 'Unable to load roles.'
    }
  },
  events: {
    workflowEvent: 'Workflow Events',
    connectEvent: 'Connect Events',
    publishedFrom: 'Published From',
    publishedTo: 'Published To',
    globalEvent: 'Global Events',
    create: 'Create',
    revise: 'Revise',
    fulfill: 'Fulfill',
    paste: 'Paste',
    issuesEvent: 'Issues Events',
    addToIssue: 'Add To Issue',
    addVolunteeredResponse: 'Add Volunteered Response',
    cancelIssue: 'Cancel Issue',
    completeResponse: 'Complete Task',
    completeTask: 'Complete Task',
    delegateTask: 'Delegate Task',
    discussIssue: 'Discuss Issue',
    forwardIssue: 'Forward Issue',
    completeIssue: 'Complete Issue',
    reissue: 'Reissue',
    reviseResponse: 'Revise Response',
    reviseVolunteeredResponse: 'Revise Volunteered Response',
    sendIssue: 'Send Issue',
    metadataEvent: 'Metadata Events',
    correctMetadata: 'Correct Metadata',
    correctType: 'Correct Type',
    editMetadata: 'Edit Metadata',
    editType: 'Edit Type'
  },
  eventName: {
    label: 'Event Name',
    hint: 'Used to identify the Event in Gateways and Smart Variables'
  },
  manualTask: 'Manual Task',
  sendTask: 'Send Task',
  serviceTask: 'Service Task',
  userTask: 'User Task',
  addForm: 'Add Form',
  completeIssue: 'Complete Issue',
  delegateTask: 'Delegate Task',
  editAccessRights: 'Edit Access Rights',
  editMetadata: 'Edit Metadata',
  editType: 'Edit Type',
  forwardIssue: 'Forward Issue',
  ownerAdd: 'Owner - Add',
  ownerReplace: 'Owner - Replace',
  privacy: 'Privacy',
  sendIssue: 'Send Issue',
  action: 'Action',
  rfi: 'RFI',
  document: 'Document',
  issue: 'Issue',
  space: 'Space',
  s4: 'S4',
  technicalReview: 'Technical Review',
  settings: 'Settings',
  continue: 'Continue',
  details: 'Details',
  architect: 'Architect',
  engineer: 'Engineer',
  criteriaDescription: 'These criteria must be met for the workflow to start.',
  workflowCriteria: 'Workflow Criteria',
  workflowOptions: {
    notThisDefinition: 'Item <b>is not currently</b> on <b>this</b> workflow',
    notAnyDefinition: 'Item <b>is not currently</b> on <b>any</b> workflow',
    neverAnyDefinition: 'Item has <b>never been</b> on <b>any</b> workflow'
  },
  eventCriteria: 'Event Criteria',
  eventOptions: {
    any: 'Event is <b>any</b> occurrence',
    first: 'Event is <b>first</b> occurrence'
  },
  itemCriteria: 'Item Criteria',
  editCriteria: 'Edit Criteria',
  addCriteria: 'Add criteria to this event.',
  eventType: 'Event Type',
  startEvent: {
    stop: 'Stop',
    continue: 'Continue',
    artifactName: {
      hint:
        'Used to identify the Item created by this Task in Gateways and Smart Variables'
    },
    continueDescription:
      'If these criteria are met, should this Workflow continue?',
    continueForCurrentWorkflow: 'If Item is on this Workflow?',
    continueForAnotherWorkflow: 'If Item is on another Workflow?',
    continueIfNotFirstOccurrence: 'If event is not the first occurrence?',
    selectedDocumentTypesRemoved:
      'One or more Types have been deleted from the schema.',
    selectArtifactType:
      'You must select an Item and at least one Type in the Settings tab to enable criteria'
  },
  endEvent: {
    throwEvent: 'Throw Event',
    throwNamedEvent: 'throw named event',
    canBeCaught: 'Can be caught by another workflow.',
    selectOrCreateEvent: 'Select existing event or create a new one',
    addWorkflowEvent: 'Add Workflow Event',
    eventName: 'Event Name',
    giveEventUniqueName: 'Give the event a unique name.',
    completionStatus: {
      label: 'Completion Status',
      hint: 'Instance is completed when:',
      all: {
        label: '<b>All</b> active paths have ended',
        hint: 'Wait for other paths to end'
      },
      this: {
        label: '<b>This</b> active path has ended',
        hint: 'End instance now'
      }
    }
  },
  intermediateEvent: {
    conditionalEvent: 'Conditional Intermediate Catch Event',
    timerEvent: 'Timer Intermediate Catch Event',
    eventLabel: 'When Event Is',
    item: 'Item',
    itemHint: 'Event is only valid for this item.',
    workflowCriteriaDescription: 'N/A to intermediate events',
    selectArtifactType:
      'You must select an Item and a Type in the Settings tab to enable criteria'
  },
  workflowDetails: {
    showAction: 'Show Action',
    inWorkflowMenu: 'in Workflow Menu',
    hide: 'Hide',
    status: 'Status',
    on: 'On',
    off: 'Off',
    ignoreWorkflow: 'ignore workflow'
  },
  workflow: 'Workflow',
  gateways: {
    diverging: 'Diverging',
    type: 'Gateway Type',
    exclusive: 'Exclusive',
    inclusive: 'Inclusive',
    parallel: 'Parallel',
    connector: 'Connector',
    criteria: 'Criteria',
    noConnectors: 'There are no connectors set in this gateway',
    connectorParallel: 'Connectors (Parallel)',
    connectorExclusive: 'Connectors (Exclusive)',
    connectorInclusive: 'Connectors (Inclusive)',
    exclusiveNote: 'Only the first matching connector will be followed.',
    inclusiveNote: 'None, one or all connectors may be followed.',
    parallelNote: 'All connectors will be followed.',
    incomingConnectors: 'Incoming Connectors',
    mergePaths: 'Merge Paths',
    whenMergingMultiplePaths: 'When merging multiple paths:',
    synchronise: 'Synchronise - wait for all incoming connectors',
    doNotSynchronise: 'Do not synchronise - immediately continue the flow'
  },
  sequenceFlow: {
    connectors: 'Connectors',
    from: 'From',
    to: 'To',

    sequenceFlowCriteriaBuilder: {
      default: 'Default',
      defaultConnector: 'Default Connector',
      markAsDefault:
        'Mark this as a default connector that should be followed if all others do not apply.',
      defaultSequenceFlowWarning:
        '<p>Another connector: <b>{sequenceFlow}</b> is already marked as the Default Connector for the gateway <b>{gateway}</b>.</p><p>Only one connector may be the Default Connector.</p> <p>Setting this Connector as the Default Connector will clear its criteria and will require that you set the previous one criteria.</p>',
      addCriteria: 'Add Criteria',
      addCriteriaToConnector: 'Add criteria to this connector.',
      addCriteriaTo: 'Add Criteria: {sequenceFlow}',
      editConnector: 'Edit Connector: {sequenceFlow}',
      noCriteria: 'No criteria specified',
      hint:
        'Leave blank for a connector that should be followed if all others do not apply.',
      addField: 'Add Field',
      addGroup: 'Add Group',
      logicOperators: {
        not: 'NOT',
        and: 'AND',
        or: 'OR'
      },
      fieldSettings: 'Field Settings: {field}',
      groupSettings: 'Group Settings',
      logic: 'Logic',
      group: 'Group',
      notHint: 'If checked, equality will be negated {example}:',
      notHintFieldExample: '(e.g. field != value)',
      notHintGroupExample: '(e.g. NOT(group))'
    }
  },
  missingRequiredFields: 'Missing required fields',
  artifactTypeHint: 'Event is valid only for this item.'
}