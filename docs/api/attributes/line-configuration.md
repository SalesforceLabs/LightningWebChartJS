# Line Configuration Attribute
`class LineConfiguration extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/elements.html#line-configuration

LineConfiguration inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }}) and exposes Line Configuration configuration fields


## API

| Attribute name | Type | Default value
| --- | --- | ---
| tension | number | 0.4
| backgroundcolor | color | 'rgba(0, 0, 0, 0.1)'
| borderwidth | number | 3
| bordercolor | color | 'rgba(0, 0, 0, 0.1)'
| bordercapstyle | string | 'butt'
| borderdash | number[] | []
| borderdashoffset | number | 0.0
| borderjoinstyle | string | 'miter'
| capbezierpoints | boolean | true
| cubicinterpolationmode | string | 'default'
| fill | boolean/string | true
| stepped | boolean | false'
| spangaps | boolean |

## Usage

```html
<c-chart>
  <c-line-configuration
    borderwidth="10"
  >
  </c-line-configuration>
</c-chart>
```
