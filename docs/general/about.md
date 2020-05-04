# About the project

## The team

### [Vic](https://github.com/victorgz)
Spanish IT Engineer & Business  
Salesforce Technical Consultant  
Innovation and technology enthusiast  

### [Seb](https://github.com/scolladon)
French IT Engineer  
Full Stack Salesforce Architect (CTA)  
Technology passionated  

### [PM](https://github.com/pmdartus)

## Motivations

### Learning LWC tech stack

One goal of the adventure was to grow technical skills on the new Lightning Web Component technology.
We have different kind of backgrounds with web technology.
Some of us are better in back and keen on those new web technology.

It was the opportunity to share and build deep knowledge with skills acquired by resolving challenging situations.
We wanted the quality to be the best possible with the few time we can spend on it because of our daily jobs

### Why chart.js

When we started the project to bring charts in LWC we needed to choose a path to reach the goal.

Starting from scratch would have been very challenging, as we don't have any knowledge in that field and as it is a huge task we don't really considered this. It was tacitly acknowledged we would not go this road :D

Then we needed to identify which kind of library we could use, knowing we cannot use a library manipulating another namespace than HTML (Lightning Web Component constraints).

After having reviewed js charting libraries our choice has converge on Chart.js because of the ecosystem and other existing porting we [trust](https://github.com/chartjs/awesome#javascript).
We were able to create a concluding POC in 7 minutes using Chart.js and LWC !

### Contribute to the eco system

We are all Salesforce employees and we want to improve our ecosystem as much as possible.
We are all fervant believers of the LWC technology and we wanted to demonstrate how powerful and convenient it is to use it.
We believe bringing awesome tools and libraries will encourage awesome people to create awesome values to their customers using it.

## Challenges encountered

### Coding convention

As in every project, we knew we would face this challenge at some point.
In order to anticipate this we have setup very early a workshop to define the coding convention.

It ended up with prettier and linter with the right plugins (apex and lwc) and a naming convention for the property our components will expose.
We use husky to ensure the quality level of the code is pretty much the same everytime.
We also have implemented CI to further industrialize those detection.
We put in place Github Pull Request template to allow answering the right question when creating PR.

### Migrate from local project to Salesforce project

We started to build the project using LWC open source in local.
It was very convenient because we had automatic reload and easy debugging. We won lot of time.
When the project has been mature enough and we had solved most of our big problems we decided to move to LWC Salesforce.

First problem we encountered was the necessity to structure all the component in the same sub directory.
It is not possible to have a logical structure to group all your component logically as you would do in any project.
In Salesforce every component folder are stored in the lwc sub folder of the sources.

While migrating in LWC Salesforce we discovered template requires to have an explicit slot to be able to have children component communicating with each other (Locker Service) while composing them, which is not the case in LWC OS. We added slot on every component.

Another challenge we had to face was the inclusion of the dependencies. We have Chart.js and nanoid as dependency.
We decided to import Chart.js using static resources because we wanted the library to be lightweight, fast to load (async static resource loading) and upgradable. By using static resources we can have multiple versions of the Chart.js at the same time.
We decided to import nanoid into a Lightning Web Component because this library is very tiny and it was easier for us to include it as a regular module.

### Reactivity and component communication

#### Component lifecycle communication

Lightning Web Component Lifecycle hooks flow down from parent to children via `connectedCallback`. Then it flows up using the `renderedCallback`. The `renderedCallback` is used to perform logic after a component has finished the rendering phase so we could not use it to send data from children. Plus it would not have solve the reactivity situation when a component is updated or disconnected.

We use the connected callback in order to attach listeners to the parent element allowing children to "bubble" up information they gather via property using dispatchEvent. When a component property is updated it just dispatches the change and the parent catches it. When a component disconnects (`disconnectedCallback`) it fetches its parent's reference stored at the `connectedCallback` and dispatches an event to the parent so it can spread the deletion and update the chart.

#### Property reactivity

In order to detect property changes and to dispatch an event to the parent we used getter and setter properties. In the setter of the property we dispatch an event to the parent to let it know a property has been updated and decide what to do.
To simplify the work and avoid to duplicate the code we created a reactivity manager component which serves a Proxy object catching the setter to call a callback method in this case. The Proxy object was used in each property to store value exposed via getter setter. This way we had one javascript object in our component to handle the reactivity and expose/store properties.

#### Reactiviy throttling

We use micro task in order to throttle every dispatch options. We store every components information in one object so at the end of the cycle we just have to send the storing object no matter the number of property that has been changed in it. This way we avoid calling the callback on the reactivity manager each time a property change.


### Error handling

Lightning Web Component exposes a specific `errorCallback` unique to it. We use it to captures errors that occur during the descendant's lifecycle hooks. We have implemented it into our chart component in order to dispatch an event for parent components.

Error in micro task throw javascript error and are not intercepted by the lifecycle mechanism. As we are using micro task our code need to be resilient to this kind of situation also. We decided to treat error correctly in the `errorCallback` and then every error catched call the `errorCallback` to centralize the way the handle error.

### App Builder, SOQL and recordId

We decided to expose the possibility to use the recordId specified in the record page in the SOQL capability of the 'LWCC App Builder' component. The issue we faced was recordId is not defined when the component is not on a record page (in the App Builder per exemple).

We tried different ways to detect when the component is in the App builder but we have not find a robust way to do it (parse url or classes is not upgrade safe as it is subject to change without notice in the Salesforce Platform)

So, when recordId is used in the SOQL query and is undefined, we decided to not set data instead of displaying an error.

### Javascript Events

A silly mistake we made was to use instance methods to handle listener events. 
Those methods are shared with every instance of the object via the prototype.
It created an issue where only one instance of the template was used by all our component and all the charts where rendered in the same canvas.
We ended up by storing the handlers in an instance event handler objects.
This allows the component to have its own instance handler and store a reference to it to remove the event listener when the component disconnect (and avoid leak).

### Testing

Testing was a huge part of the project. We decided early in the project to build tests in order to help us keep our pace and detecting the earliest possible the impact new developments had on the base we had.

#### Testing events, reactivity, apex wire, errors

We massively used the [lwc-recipes](https://github.com/trailheadapps/lwc-recipes) github repository. Every use case possible is exposed in this project and the tests have really helped us to quickly defined patterns and use them at the right time.

### Deploying sample app with lwc in gh-pages

Documentation is exposed using gh-pages.
We decided to include a sample of the library in the documentation using the actual library. To do so we've built a LWC OS version of the lib and bundled it with LWC using rollup to integrate it into the documentation.
The samples you see are using the latest version of the library running on LWC OS.