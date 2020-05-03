# About the project

## Motivations

### Learning

### Contribute to the eco system

### Promoting awesome tech

## Challenges encountered

using namespace is not possible

### Migrate from local project to Salesforce project

How to structure the components ?

### Gather chart information

Lifecycle hook and connectedCallback chain using events to bubble information to the parent

### Reactivity Strategy and event throttling

#### Handle reactivity

Don't know in advance how much events to deal with
=> Need to throttle
=> Set element has dirty to render them
=> Use events to notify and rerender state

#### Throttle reactivity

Using micro task

#### Reactivity when disconnected

Use the parent to trigger a disconnection to it in order to track


### Error handling

Difference between error call error event and error catching inside the code
How to deal with this

### App Builder

Handle issue with the :recordId

### Testing

#### Testing internal events

#### Testing exposed event handler

#### Testing reactivity

#### Testing errors