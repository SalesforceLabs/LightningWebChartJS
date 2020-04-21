# Cartesian Linear Axis
`class CartesianLinearAxis extends CartesianAxis`

https://www.chartjs.org/docs/latest/axes/cartesian/linear.html

CartesianLinearAxis inherits all the properties from [CartesianAxis]({{ "/docs/api/axes/cartesian.html" | relative_url }}) and exposes Cartesian linear axis configuration fields


## API

Extends attribute from CartesianAxis and BaseAxis and BaseAttribute


| Attribute name | Type | Default value
| --- | --- | ---
| ticksBeginatzero | boolean |  
| ticksMaxtickslimit | number | 11
| ticksPrecision | number |  
| ticksStepsize | number |  
| ticksSuggestedmax | number |  
| ticksSuggestedmin | number |

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
