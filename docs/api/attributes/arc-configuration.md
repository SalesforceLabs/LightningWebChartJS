# Arc Configuration Attribute
`class ArcConfiguration extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/elements.html#arc-configuration

ArcConfiguration inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})
Arcs are used in the polar area, doughnut and pie charts. This components allows you to define the options of the arcs that will be shared by all the datasets.


## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| angle - for polar only | number | circumference / (arc count) | Arc angle to cover
| backgroundcolor | Color | `rgba(0, 0, 0, 0.1)` | Arc fill color
| borderalign | string | `center` | Arc stroke alignment
| bordercolor | Color | `#fff` | Arc stroke color
| borderwidth | number | 2 | Arc stroke width

## Usage

```html
<c-chart>
  <c-arc-configuration
    borderwidth="10"
    backgroundcolor="rgba(0, 0, 0, 0.1)"
  >
  </c-arc-configuration>
</c-chart>
```
