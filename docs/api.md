# API Documentation

There are 4 main types of components

- Chart
- Data
- Attributes
- Axes

Chart components define the element hosting the canvas, gathering the attributes and the data, and includes all the functionality of available to build a Chart using Chart.js. This component is responsible of dealing with the rendering lifecycle and also handles child events for the elements connected inside it.

Data components represent the source of data to put into the chart. 

Attribute components define the different options that can be included to customize the chart. From animations to tooltip configurations, the attributes expose different properties to be filled with objects or callback functions.

Axes components allow you to determine how the data is mapped and represented inside the chart and their different scales.

## Integration
The project has been built using [Lightning Web Components by Salesforce](https://lwc.dev/). Thanks to this, you can easily integrate the charts in your Salesforce projects using the App Builder, or directly from your Aura or LWC components.

The architecture of the LWCC allows you to create charts with different attributes, datasets and axes by [composition](https://lwc.dev/guide/composition). This not only handles parent-child logic, but also encapsulates and simplifies the code you will have to create, making it easy to understand it.

<div class="alert alert-primary" role="alert">
  The attributes listed in this API guide represents the Javascript properties of the components. They are represented in camel case format (e.g. labelFontsize) while HTML attribute names are in kebab case (e.g. label-fontsize). Keep in mind this while you are building your charts
</div>

## Component Reactivity
The LWCC library has been created with reactivity as a key point. All the attributes of the different components are reactive to changes, what means, that any change that you perform on real time (for example, the scale or the source data) will automatically fire an update event on the chart.

Thanks to this, you don't have to worry about handleling the rendering lifecycle of the chart so you can focus on the things that really matter to you!

## Accesibility
In terms of accesibility, LWCC extends the accesible tools already implemented in both: the Salesforce LWC framework and the Chart.js library. Because charts, should be made for everyone.