# Data
`class Data extends BaseAttribute`

https://www.chartjs.org/docs/latest/general/

Data inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})

## API

| Attribute name | Type | Default value
| --- | --- | ---
| label | string |
| yaxisid | string |
| xaxisid | string |
| detail | array |
| backgroundcolor | array/string |
| bordercolor | array/string |
| borderwidth | |
| fill | boolean |
| order | number |
| type | |
| pointhoverbackgroundcolor | string |
| pointhoverbordercolor | string |
| pointhoverborderwidth | string |
| pointhoverradius | number |

## Usage

```html
<c-chart>
  <c-datset>
    <c-data
      label="data"
      detail="[28, 48, 40, 19, 96, 27, 100]"
      backgroundcolor="rgba(255,99,132,0.2)"
      bordercolor="rgba(255,99,132,1)"
    >
    </c-data>
  </c-dataset>
</c-chart>
```
