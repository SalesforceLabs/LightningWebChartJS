# Title Attribute
`class Title extends BaseAttribute`

Title inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }}) and exposes Title configuration fields
https://www.chartjs.org/docs/latest/configuration/title.html


## API

| Attribute name | Type | Default value
| --- | --- | ---
| display | boolean | false
| position | string | 'top'
| fontsize | number | 12
| fontfamily | string | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
| fontcolor | string | '#666'
| fontstyle | string | 'bold'
| padding | number | 10
| lineheight | number/string | 1.2
| text | string/string[] | ''

## Usage

```html
<c-chart>
  <c-title
    text="Evolution of charts"
    position="bottom"
  >
  </c-title>
</c-chart>
```
