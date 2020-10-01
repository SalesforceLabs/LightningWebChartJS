# Legend Attribute
`class Legend extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/legend.html


Legend inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})
The chart legend displays data about the datasets that are appearing on the chart


## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| display | boolean | true | Is the legend shown?
| position | string | 'top' | Position of the legend. Options are: `'top'`, `'left'`, `'bottom'`, `'right'`
| align | string | 'center' | Alignment of the legend. Options are: `'start'`, `'center'`, `'end'`
| fullwidth | boolean | true | Marks that this box should take the full width of the canvas (pushing down other boxes). This is unlikely to need to be changed in day-to-day use
| callbackOnclick | function |  | A callback that is called when a click event is registered on a label item
| callbackOnhover | function |  | A callback that is called when a 'mousemove' event is registered on top of a label item
| callbackOnleave | function |  | A callback that is called when a 'mousemove' event is registered outside of a previously hovered label item
| reverse | boolean | false | Legend will show datasets in reverse order
| rtl | boolean |  | true for rendering the legends from right to left
| textDirection | string | canvas' default | Determines the direction of the text. Default value is 'ltr` on the canvas for rendering the legend, regardless of the css specified on the canvas
| labelBoxwidth | number | 40 | Width of coloured box
| labelFontsize | number | 12 | Font size of text
| labelFontstyle | string | 'normal' | Font style of text
| labelFontcolor | Color | '#666' | Color of text
| labelFontfamily | string | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif" | Font family of legend text
| labelPadding | number | 10 | Padding between rows of colored boxes
| callbackGeneratelabels | function |  | Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box. See [Legend Item](https://www.chartjs.org/docs/latest/configuration/legend.html#legend-item-interface) for details
| callbackFilter | function | null | Filters legend items out of the legend. Receives 2 parameters, a [Legend Item](https://www.chartjs.org/docs/latest/configuration/legend.html#legend-item-interface) and the chart data
| labelUsepointstyle | boolean | false | Label style will match corresponding point style (size is based on the mimimum value between boxWidth and fontSize)

### Legend Item Interface
Items passed to the legend callbackOnclick function must implement the following interface:
````
{
    // Label that will be displayed
    text: string,

    // Fill style of the legend box
    fillStyle: Color,

    // If true, this item represents a hidden dataset. Label will be rendered with a strike-through effect
    hidden: boolean,

    // For box border. See https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap
    lineCap: string,

    // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
    lineDash: number[],

    // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
    lineDashOffset: number,

    // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
    lineJoin: string,

    // Width of box border
    lineWidth: number,

    // Stroke style of the legend box
    strokeStyle: Color,

    // Point style of the legend box (only used if usePointStyle is true)
    pointStyle: string | Image,

    // Rotation of the point in degrees (only used if usePointStyle is true)
    rotation: number
}
````

## Usage

```html
<c-chart>
  <c-legend
    align="start"
    rtl="true"
    labelFontsize="16"
  >
  </c-legend>
</c-chart>
```
