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
- Custom Event to propagate information
- Reactivity
- Performance

## Chart.js Lightning Web Components list

This Lightning Web Component expose Chart.js attributes.
Chart composition is done using them to configure the Chart.

### Chart.js Chart component

Every chart extends BaseChart:

- [Base chart](https://scolladon.github.io/lwcc/Base-chart.md)

- [Line chart](https://scolladon.github.io/lwcc/Line-chart.md)
- [Bar chart](https://scolladon.github.io/lwcc/Bar-chart.md)
- [Radar chart](https://scolladon.github.io/lwcc/Radar-chart.md)
- [Doughnut chart](https://scolladon.github.io/lwcc/Doughnut-chart.md)
- [Pie chart](https://scolladon.github.io/lwcc/Pie-chart.md)
- [Polar Area chart](https://scolladon.github.io/lwcc/Polar-Area-chart.md)
- [Bubble chart](https://scolladon.github.io/lwcc/Bubble-chart.md)
- [Scatter chart](https://scolladon.github.io/lwcc/Scatter-chart.md)
- [Area chart](https://scolladon.github.io/lwcc/Area-chart.md)

### Chart.js Attributes components

Every Attributes extends BaseAttribute:

- [Base attribute](https://scolladon.github.io/lwcc/Base-attribute.md)

- [Animation attribute](https://scolladon.github.io/lwcc/Animation-attribute.md)
- [Layout attribute](https://scolladon.github.io/lwcc/Layout-attribute.md)
- [Legend attribute](https://scolladon.github.io/lwcc/Legend-attribute.md)
- [Title attribute](https://scolladon.github.io/lwcc/Title-attribute.md)
- [Tooltip attribute](https://scolladon.github.io/lwcc/Tooltip-attribute.md)
- [Arc Configuration attribute](https://scolladon.github.io/lwcc/Arc-Configuration-attribute.md)
- [Line Configuration attribute](https://scolladon.github.io/lwcc/Line-Configuration-attribute.md)
- [Point Configuration attribute](https://scolladon.github.io/lwcc/Point-Configuration-attribute.md)
- [Rectangle Configuration attribute](https://scolladon.github.io/lwcc/Rectangle-Configuration-attribute.md)

### Chart.js data components

- [Dataset](https://scolladon.github.io/lwcc/dataset.md)
- [Data](https://scolladon.github.io/lwcc/data.md)

### Chart.js Axes component

Every Axes extends BaseAxis:

- [Base axis](https://scolladon.github.io/lwcc/Base-axis.md)

Every Cartesian Axes extends CartesianAxis:

- [Cartesian axis](https://scolladon.github.io/lwcc/Cartesian-Category-axis.md)

- [Cartesian Category axis](https://scolladon.github.io/lwcc/Cartesian-Category-axis.md)
- [Cartesian Linear axis](https://scolladon.github.io/lwcc/Cartesian-Linear-axis.md)
- [Cartesian Logarithmic axis](https://scolladon.github.io/lwcc/Cartesian-Logarithmic-axis.md)
- [Cartesian Time axis](https://scolladon.github.io/lwcc/Cartesian-Time-axis.md)

Every Radial Axes extends RadialAxis:

- [Radial axis](https://scolladon.github.io/lwcc/Radial-axis.md)

- [Radial Linear axis](https://scolladon.github.io/lwcc/Radial-Linear-axis.md)

## App builder Components TODO

### Description TODO

### Compose pages using chart component
