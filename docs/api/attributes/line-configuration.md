# Line Configuration Attribute
`class LineConfiguration extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/elements.html#line-configuration

LineConfiguration inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})

Line elements are used to represent the line in a line chart.


## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| tension | number | 0.4 | Bézier curve tension (0 for no Bézier curves)
| backgroundcolor | Color | `'rgba(0, 0, 0, 0.1)'` | Line fill color
| borderwidth | number | 3 | Line stroke width
| bordercolor | Color | `'rgba(0, 0, 0, 0.1)'` | Line stroke color
| bordercapstyle | string | 'butt' | Line cap style. [See MDN](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap)
| borderdash | number[] | [] | Line dash. [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| borderdashoffset | number | 0 | Line dash offset. [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| borderjoinstyle | string | `'miter'` | Line join style. [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)
| capbezierpoints | boolean | true | true to keep Bézier control inside the chart, false for no restriction
| cubicinterpolationmode | string | `'default'` | Interpolation mode to apply. [See more...](https://www.chartjs.org/docs/latest/charts/line.html#cubicinterpolationmode)
| fill | boolean|string | true | How to fill the area under the line. See [area charts](https://www.chartjs.org/docs/latest/charts/area.html#filling-modes)
| stepped | boolean | false | true to show the line as a stepped line (tension will be ignored)
| spangaps | boolean | undefined | Only for radar charts. If true, lines will be drawn between points with no or null data. If false, points with NaN data will create a break in the line.

## Usage

```html
<c-chart>
  <c-line-configuration
    borderwidth="10"
    bordercolor="rgba(0, 0, 0.2)"
  >
  </c-line-configuration>
</c-chart>
```
