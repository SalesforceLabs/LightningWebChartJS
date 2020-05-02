# Cartesian Linear Axis
`class CartesianLinearAxis extends CartesianAxis`

https://www.chartjs.org/docs/latest/axes/cartesian/linear.html

CartesianLinearAxis inherits all the properties from [CartesianAxis]({{ "/docs/api/axes/cartesian.html" | relative_url }})

The linear scale is use to chart numerical data. It can be placed on either the x or y axis. The scatter chart type automatically configures a line chart to use one of these scales for the x axis. As the name suggests, linear interpolation is used to determine where a value lies on the axis.


## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| ticksBeginatzero | boolean |  | if true, scale will include 0 if it is not already included
| ticksMaxtickslimit | number | 11 | Maximum number of ticks and gridlines to show
| ticksPrecision | number |  | if defined and stepSize is not specified, the step size will be rounded to this many decimal places
| ticksStepsize | number |  | User defined fixed step size for the scale. [more...](https://www.chartjs.org/docs/latest/axes/cartesian/linear.html#step-size)
| ticksSuggestedmax | number |  | Adjustment used when calculating the maximum data value. [more...](https://www.chartjs.org/docs/latest/axes/cartesian/linear.html#axis-range-settings)
| ticksSuggestedmin | number |  | Adjustment used when calculating the minimum data value. [more...](https://www.chartjs.org/docs/latest/axes/cartesian/linear.html#axis-range-settings)

## Usage

```html
<c-chart>
  <c-cartesian-linear-axis
    axis="y"
    position="right"
    ticks-min="-10"
    title-display="true"
    title-labelstring="yAxis items"
    grid-zerolinecolor="#FFA500"
    grid-zerolinewidth="4"
  >
  </c-cartesian-linear-axis>
</c-chart>
```
