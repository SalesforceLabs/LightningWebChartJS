# Title Attribute
`class Title extends BaseAttribute`

https://www.chartjs.org/docs/2.7.3/configuration/title.html

Title inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})

The chart title defines text to draw at the top of the chart

## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| display | boolean | false | Is the title shown?
| position | string | `top` | Position of title. more... (https://www.chartjs.org/docs/2.7.3/configuration/title.html#position)
| fontsize | number | 12 | Font size
| fontfamily | string | `"'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'“` | Font family for the title text
| fontcolor | string | `#666` | Font color
| fontstyle | string | `bold` | Font style
| padding | number | 10 | Number of pixels to add above and below the title text
| lineheight | number/string | 1.2 | Height of an individual line of text. See MDN (https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
| text | string/string[] | `''` | Title text to display. If specified as an array, text is rendered on multiple lines

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
