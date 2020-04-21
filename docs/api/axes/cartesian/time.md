# Cartesian Time Axis
`class CartesianTimeAxis extends CartesianAxis`

https://www.chartjs.org/docs/latest/axes/cartesian/time.html

CartesianTimeAxis inherits all the properties from [CartesianAxis]({{ "/docs/api/axes/cartesian.html" | relative_url }}) and exposes Cartesian time axis configuration fields

## API

Extends attribute from CartesianAxis and BaseAxis and BaseAttribute

| Attribute name | Type | Default value
| --- | --- | ---
| adapterDate | object | {}
| distribution | string | 'linear'
| bounds | string | 'data'
| tickSource | string | 'auto'
| timeDisplayformats | object |
| timeIsoweekday | boolean | false
| timeParser | string|function |
| timeRound | string | false
| timeTooltipformat | string |
| timeUnit | string | false
| timeStepsize | number | 1
| timeMinunit | string | 'millisecond'

## Usage

```html
<c-chart>
  <c-cartesian-time-axis axis="y"></c-cartesian-time-axis>
</c-chart>
```
