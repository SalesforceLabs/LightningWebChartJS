# Rectangle Configuration Attribute
`class RectangleConfiguration extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/elements.html#rectangle-configuration


RectangleConfiguration inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }}) and exposes Rectangle Configuration configuration fields

## API

| Attribute name | Type | Default value
| --- | --- | ---
| backgroundcolor | color | 'rgba(0, 0, 0, 0.1)'
| borderwidth | number | 0
| bordercolor | color | 'rgba(0, 0, 0, 0.1)'
| borderskipped | string | 'bottom'

## Usage

```html
<c-chart>
  <c-rectangle-configuration
    borderwidth="10"
  >
  </c-rectangle-configuration>
</c-chart>
```
