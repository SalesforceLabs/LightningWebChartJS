# Cartesian Linear Axis

https://www.chartjs.org/docs/latest/axes/cartesian/linear.html

CartesianLinearAxis component is an Attibute component type.
CartesianLinearAxis inherits CartesianAxis which inherits BaseAxis which inherits BaseAttribute.

## API

Extends attribute from CartesianAxis and BaseAxis and BaseAttribute

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  ticksBeginatzero | boolean |  
  ticksMaxtickslimit | number | 11
  ticksPrecision | number |  
  ticksStepsize | number |  
  ticksSuggestedmax | number |  
  ticksSuggestedmin | number |

## Usage Example

```
<c-bar-chart>
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
</c-bar-chart>
```
