# LWCC Documentation

There are 3 main types of components

- Chart
- Attribute
- Data

Chart component define the html hosting the canvas, gather the attributes, gather the data and build the Chart using Chart.js. It is this component which deal with the rendering lifecycle and handles child events (connectedCallback, disconnectedCallback, change)

Attribute component define the options to include in the Chart.js

Data component define the data to put in the chart. Data component

## Component Communication

TODO explanation

- namespace svg not editable
- Custom Event to propagate information from children to parent when the api attributs are changed
- Reactivity
- Performance

## Chart.js Lightning Web Components list

This Lightning Web Component expose Chart.js attributes.
Chart composition is done using them to configure the Chart.

### Chart.js Chart component

Every chart extends BaseChart:

- [Base chart](https://scolladon.github.io/lwcc/docs/Base-chart.html)

- [Line chart](https://scolladon.github.io/lwcc/docs/Line-chart.html)
- [Bar chart](https://scolladon.github.io/lwcc/docs/Bar-chart.html)
- [Radar chart](https://scolladon.github.io/lwcc/docs/Radar-chart.html)
- [Doughnut chart](https://scolladon.github.io/lwcc/docs/Doughnut-chart.html)
- [Pie chart](https://scolladon.github.io/lwcc/docs/Pie-chart.html)
- [Polar Area chart](https://scolladon.github.io/lwcc/docs/Polar-Area-chart.html)
- [Bubble chart](https://scolladon.github.io/lwcc/docs/Bubble-chart.html)
- [Scatter chart](https://scolladon.github.io/lwcc/docs/Scatter-chart.html)
- [Area chart](https://scolladon.github.io/lwcc/docs/Area-chart.html)

### Chart.js Attributes components

Every Attributes extends BaseAttribute:

- [Base attribute](https://scolladon.github.io/lwcc/docs/Base-attribute.html)

- [Animation attribute](https://scolladon.github.io/lwcc/docs/Animation-attribute.html)
- [Layout attribute](https://scolladon.github.io/lwcc/docs/Layout-attribute.html)
- [Legend attribute](https://scolladon.github.io/lwcc/docs/Legend-attribute.html)
- [Title attribute](https://scolladon.github.io/lwcc/docs/Title-attribute.html)
- [Tooltip attribute](https://scolladon.github.io/lwcc/docs/Tooltip-attribute.html)
- [Arc Configuration attribute](https://scolladon.github.io/lwcc/docs/Arc-Configuration-attribute.html)
- [Line Configuration attribute](https://scolladon.github.io/lwcc/docs/Line-Configuration-attribute.html)
- [Point Configuration attribute](https://scolladon.github.io/lwcc/docs/Point-Configuration-attribute.html)
- [Rectangle Configuration attribute](https://scolladon.github.io/lwcc/docs/Rectangle-Configuration-attribute.html)

### Chart.js data components

- [Dataset](https://scolladon.github.io/lwcc/docs/dataset.html)
- [Data](https://scolladon.github.io/lwcc/docs/data.html)

### Chart.js Axes component

Every Axes extends BaseAxis:

- [Base axis](https://scolladon.github.io/lwcc/docs/Base-axis.html)

Every Cartesian Axes extends CartesianAxis:

- [Cartesian axis](https://scolladon.github.io/lwcc/docs/Cartesian-Category-axis.html)

- [Cartesian Category axis](https://scolladon.github.io/lwcc/docs/Cartesian-Category-axis.html)
- [Cartesian Linear axis](https://scolladon.github.io/lwcc/docs/Cartesian-Linear-axis.html)
- [Cartesian Logarithmic axis](https://scolladon.github.io/lwcc/docs/Cartesian-Logarithmic-axis.html)
- [Cartesian Time axis](https://scolladon.github.io/lwcc/docs/Cartesian-Time-axis.html)

Every Radial Axes extends RadialAxis:

- [Radial axis](https://scolladon.github.io/lwcc/docs/Radial-axis.html)

- [Radial Linear axis](https://scolladon.github.io/lwcc/docs/Radial-Linear-axis.html)

## App builder Components TODO

### Description TODO

### Compose pages using chart component
