# Cartesian Category Axis

https://www.chartjs.org/docs/latest/axes/cartesian/category.html

CartesianCategoryAxis component is an Attibute component type.
CartesianCategoryAxis inherits CartesianAxis which inherits BaseAxis which inherits BaseAttribute.

## API

Extends attribute from CartesianAxis and BaseAxis and BaseAttribute

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  ticksLabels | string[] |

## Usage Example

```
<c-bar-chart>
  <c-cartesian-category-axis
    axis="x"
    position="top"
    ticks-min="Yellow"
  ></c-cartesian-category-axis>
</c-bar-chart>
```
