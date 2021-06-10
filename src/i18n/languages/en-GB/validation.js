export default {
  artifactNames:
    'The Item name must be unique across all Items names in this workflow',
  startEvent: {
    eventType: 'You must specify an event type',
    artifactType: 'You must specify an item',
    eventNames:
      'The Event Name must be unique across all events in this workflow',
    documentTypes: 'You must specify at least one type',
    missingDocumentTypes: 'One or more Types have been deleted from the schema',
    criteria: 'One or more criteria reference removed elements'
  },
  endEvent: {
    eventName: 'You must specify an event type'
  },
  intermediateEvent: {
    intermediateEventType: 'You must specify an event type',
    eventType: 'You must select one event',
    artifactType: 'You must specify an item',
    issueType: 'You must specify an item',
    documentTypes: 'You must specify at least one type',
    timerValue: 'You must specify a value greater than 0',
    timerValueDays: 'You must specify a value between 0 and 365',
    timerUnit: 'You must specify a unit',
    criteria: 'One or more criteria reference removed elements'
  },
  task: {
    taskType: 'You must specify the type of Task',
    action: 'You must specify an action',
    item: 'You must specify an item',
    itemType: 'You must specify at least one type for this item',
    body: 'You must specify a body',
    subject: 'You must specify a subject',
    recipients: 'You must specify at least one recipient',
    distribution: 'You must specify at least one recipient',
    type: 'You must specify a type',
    artifactType: 'You must specify an item to edit metadata for',
    documentType: 'You must specify an item to edit type for',
    metadata: 'You must specify at least one metadata field to set a value for',
    invalidMetadata:
      'This field is restricted from use by the Types specified for this element Item',
    role: 'You must specify a user role',
    event: 'You must select an event'
  },
  gateway: {
    defaultConnector: 'You must specify a default connector',
    outgoingConnectors: 'No outgoing connectors',
    criteria: 'Criteria missing or invalid for one or more connectors'
  },
  sequenceFlow: {
    criteria: 'You must specify a criteria for this connector'
  },
  workflowDefinition: {
    name: 'You must specify a name',
    shortName: 'You must specify a short name'
  },
  workflowEvent: {
    name: 'You must specify a name',
    unique: 'Name must be unique'
  },
  dataTree: {
    eventType:
      'You must specify an Event Type for the Start Event and all of the Conditional Intermediate Events',
    artifactType:
      'You must specify an Artifact Type for the Start Event and all of the Conditional Intermediate Events',
    documentTypes:
      'You must select Document Types for all of the Start and Intermediate Events triggered by a Document',
    issueType:
      'You must select an Issue Types for all of the Start and Intermediate Events triggered by an Issue'
  },
  criteriaBuilderAssertion: {
    field: 'Please, inform a value'
  },
  distributionMatrix: {
    duplicatedMetadata:
      'All rows must have a unique metadata values combination',
    fieldGroups: {
      emptyMetadata: 'All filters must have a value',
      distribution:
        'Please, fill in reason, roles and due dates correctly for all rows'
    }
  }
}
