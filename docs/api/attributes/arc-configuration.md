# Arc Configuration Attribute
`class ArcConfiguration extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/elements.html#arc-configuration

ArcConfiguration inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }}) and exposesArc configuration fields

## API

| Attribute name | Type | Default value
| --- | --- | ---
| angle | number | circumference / (arc count)
| backgroundcolor | color | 'rgba(0, 0, 0, 0.1)'
| borderalign | string | 'center'
| bordercolor | color | '#fff'
| borderwidth | number | 2

## Usage

```html
<c-chart>
  <c-arc-configuration
    borderwidth="10"
  >
  </c-arc-configuration>
</c-chart>
```
