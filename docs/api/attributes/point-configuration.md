# Point Configuration Attribute
`class PointConfiguration extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/elements.html#point-configuration

PointConfiguration inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }}) and exposes Point Configuration configuration fields


## API

| Attribute name | Type | Default value
| --- | --- | ---
| radius | number | 3
| pointstyle | string/image | 'circle'
| rotation | number | 0
| backgroundcolor | color | 'rgba(0, 0, 0, 0.1)'
| borderwidth | number | 1
| bordercolor | color | 'rgba(0, 0, 0, 0.1)'
| hitradius | number | 1
| hoverradius | number | 4
| hoverborderwidth | number | 1

## Usage

```html
<c-chart>
  <c-point-configuration
    borderwidth="10"
  >
  </c-point-configuration>
</c-chart>
```
