# Cartesian Time Axis

https://www.chartjs.org/docs/latest/axes/cartesian/time.html

CartesianTimeAxis component is an Attibute component type.
CartesianTimeAxis inherits CartesianAxis which inherits BaseAxis which inherits BaseAttribute.

## API

Extends attribute from CartesianAxis and BaseAxis and BaseAttribute

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  adapterDate | object | {}
  distribution | string | 'linear'
  bounds | string | 'data'
  tickSource | string | 'auto'
  timeDisplayformats | object |
  timeIsoweekday | boolean | false
  timeParser | string|function |
  timeRound | string | false
  timeTooltipformat | string |
  timeUnit | string | false
  timeStepsize | number | 1
  timeMinunit | string | 'millisecond'

## Usage Example

```
<c-bar-chart>
  <c-cartesian-time-axis axis="y"></c-cartesian-time-axis>
</c-bar-chart>
```
