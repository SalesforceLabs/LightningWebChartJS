# Line Configuration Attribute

https://www.chartjs.org/docs/latest/configuration/elements.html#line-configuration

Line Configuration component is an Attribute component type.
LineConfiguration inherits BaseAttribute and exposes Line configuration fields

## API

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  tension | number | 0.4
  backgroundcolor | color | 'rgba(0, 0, 0, 0.1)'
  borderwidth | number | 3
  bordercolor | color | 'rgba(0, 0, 0, 0.1)'
  bordercapstyle | string | 'butt'
  borderdash | number[] | []
  borderdashoffset | number | 0.0
  borderjoinstyle | string | 'miter'
  capbezierpoints | boolean | true
  cubicinterpolationmode | string | 'default'
  fill | boolean/string | true
  stepped | boolean | false'
  spangaps | boolean |

## Usage Example

```
<c-bar-chart>
  <c-line-configuration
    borderwidth="10"
  >
  </c-line-configuration>
</c-bar-chart>
```
