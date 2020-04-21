# Cartesian Category Axis
`class CartesianCategoryAxis extends CartesianAxis`

https://www.chartjs.org/docs/latest/axes/cartesian/category.html

CartesianCategoryAxis inherits all the properties from [CartesianAxis]({{ "/docs/api/axes/cartesian.html" | relative_url }}) and exposes Cartesian category axis configuration fields


## API

Extends attribute from CartesianAxis and BaseAxis and BaseAttribute

| Attribute name | Type | Default value
| --- | --- | ---
| ticksLabels | string[] |

## Usage

```html
<c-chart>
  <c-cartesian-category-axis
    axis="x"
    position="top"
    ticks-min="Yellow"
  ></c-cartesian-category-axis>
</c-chart>
```
