# Rectangle Configuration Attribute
`class RectangleConfiguration extends BaseAttribute`

https://www.chartjs.org/docs/2.7.3/configuration/elements.html#rectangle-configuration


RectangleConfiguration inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})
Rectangle elements are used to represent the bars in a bar chart.

## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| backgroundcolor | Color | `rgba(0, 0, 0, 0.1)` | Bar fill color
| borderwidth | number | 0 | Bar stroke width
| bordercolor | Color | `rgba(0, 0, 0, 0.1)` | Bar stroke color
| borderskipped | string | `bottom` | Skipped (excluded) border: `bottom`, `left`, `top` or `right`

## Usage

```html
<c-chart>
  <c-rectangle-configuration
    borderwidth="10"
  >
  </c-rectangle-configuration>
</c-chart>
```
