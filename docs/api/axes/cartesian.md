# Cartesian Axis
`class CartesianAxis extends BaseAxis`

https://www.chartjs.org/docs/latest/axes/cartesian/

CartesianAxis inherits all the properties from [BaseAxis]({{ "/docs/api/axes.html" | relative_url }})

Axes that follow a cartesian grid are known as 'Cartesian Axes'. Cartesian axes are used for line, bar, and bubble charts.


## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| axis | string | x | Options are: `x` or `y`
| type | string |  | Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart
| position | string |  | Position of the axis in the chart. Possible values are: `top`, `left`, `bottom`, `right`
| offset | boolean | false | If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to true for a bar chart by default
| id | string |  | (Deprecated) The property has been replaced by `axisid`
| axisid | string |  | The Id used to link datasets and scale axes together. The value should match the `xAxisID` or `yAxisID` property of a Data component
| stacked | boolean |  | User defined if the bar chart is stacked. 
| ticksMin | number |  | User defined minimum value for the scale, overrides minimum value from data
| ticksMax | number |  | User defined maximum value for the scale, overrides maximum value from data
| ticksSamplesize | number | tick.length | The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length
| ticksAutoskip | boolean | true | If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to maxRotation before skipping any. Turn autoSkip off to show all labels no matter what
| ticksAutoskippadding | number | 0 | Padding between the ticks on the horizontal axis when autoSkip is enabled
| ticksLabeloffset | number | 0 | Distance in pixels to offset the label from the centre point of the tick (in the x direction for the x axis, and the y direction for the y axis). Note: this can cause labels at the edges to be cropped by the edge of the canvas
| ticksMaxrotation | number | 50 | Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn`t occur until necessary. Note: Only applicable to horizontal scales
| ticksMinrotation | number | 0 | Minimum rotation for tick labels. Note: Only applicable to horizontal scales
| ticksMirror | boolean | false | Flips tick labels around axis, displaying the labels inside the chart instead of outside. Note: Only applicable to vertical scales
| ticksPadding | number | 0 | Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction
| gridDisplay | boolean | true | If false, do not display grid lines for this axis
| gridCircular | boolean | false | If true, gridlines are circular (on radar chart only)
| gridColor | Color|Color[] | `rgba(0, 0, 0, 0.1)` | The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line and so on
| gridBorderdash | number[] | [] | Length and spacing of dashes on grid lines. [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| gridBorderdashoffset | number | 0 | Offset for line dashes. [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| gridLinewidth | number|number[] | 1 | Stroke width of grid lines
| gridDrawborder | boolean | true | If true, draw border at the edge between the axis and the chart area
| gridDrawonchartarea | boolean | true | If true, draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn
| gridDrawticks | boolean | true | If true, draw lines beside the ticks in the axis area beside the chart
| gridTickmarklength | number | 10 | Length in pixels that the grid lines will draw into the axis area
| gridZerolinewidth | number | 1 | Stroke width of the grid line for the first index (index 0)
| gridZerolinecolor | Color | `rgba(0, 0, 0, 0.25)` | Stroke color of the grid line for the first index (index 0)
| gridZerolineborderdash | number[] | [] | Length and spacing of dashes of the grid line for the first index (index 0). [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| gridZerolineborderdashoffset | number | 0 | Offset for line dashes of the grid line for the first index (index 0). [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| gridOffsetgridlines | boolean | false | If true, grid lines will be shifted to be between labels. This is set to true for a bar chart by default
| gridZ | number | 0 | z-index of gridline layer. Values <= 0 are drawn under datasets, > 0 on top
| titleDisplay | boolean | false | If true, display the axis title
| titleLabelstring | string | `` | The text for the title. (i.e. "# of People" or "Response Choices")
| titleLineheight | number / string | 1.2 | Height of an individual line of text. [See MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
| titleFontcolor | Color | `#666` | Font color for scale title
| titleFontfamily | string | "`Helvetica Neue`, `Helvetica`, `Arial`, sans-serif" | Font family for the scale title, follows CSS font-family options
| titleFontsize | number | 12 | Font size for scale title
| titleFontstyle | string | `normal` | Font style for the scale title, follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit)
| titlePadding | number / object | 4 | Padding to apply around scale labels. Only top and bottom are implemented

### Axis ID
The properties `xaxisid` and `yaxisid` from the Data component have to match the scale propertie `id` of the specific `axis` type. This is especially needed if multi-axes charts are used.

### Creating Multiple Axes
With cartesian axes, it is possible to create multiple X and Y axes. To do so, you can add multiple axes components inside your chart component.


````html
<c-chart>
    <c-cartesian-axis axis="x" type="linear" ></c-cartesian-axis>
</c-chart>
````
