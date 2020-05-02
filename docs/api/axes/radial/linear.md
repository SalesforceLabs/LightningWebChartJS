# Radial Linear Axis
`class RadialLinearAxis extends RadialAxis`

https://www.chartjs.org/docs/latest/axes/radial/linear.html


RadialLinearAxis inherits all the properties from [RadialAxis]({{ "/docs/api/axes/radial.html" | relative_url }})

The linear scale is used to chart numerical data. As the name suggests, linear interpolation is used to determine where a value lies in relation the center of the axis.


## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| anglelinesDisplay | boolean | TRUE | if true, angle lines are shown
| anglelinesColor | Color | `rgba(0, 0, 0, 0.1)` | Color of angled lines
| anglelinesLinewidth | number | 1 | Width of angled lines
| anglelinesBorderdash | number[] | [] | Length and spacing of dashes on angled lines. [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| anglelinesBorderdashoffset | number | 0 | Offset for line dashes. [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| gridDisplay | boolean | TRUE | If false, do not display grid lines for this axis
| gridCircular | boolean | FALSE | If true, gridlines are circular (on radar chart only)
| gridColor | Color / Color[] | `rgba(0, 0, 0, 0.1)` | The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line and so on
| gridBorderdash | number[] | [] | Length and spacing of dashes on grid lines. [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| gridBorderdashoffset | number | 0 | Offset for line dashes. [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| gridLinewidth | number / number[] | 1 | Stroke width of grid lines
| gridDrawborder | boolean | TRUE | If true, draw border at the edge between the axis and the chart area
| gridDrawonchartarea | boolean | TRUE | If true, draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn
| gridDrawticks | boolean | TRUE | If true, draw lines beside the ticks in the axis area beside the chart
| gridTickmarklength | number | 10 | Length in pixels that the grid lines will draw into the axis area
| gridZerolinewidth | number | 1 | Stroke width of the grid line for the first index (index 0)
| gridZerolinecolor | Color | `rgba(0, 0, 0, 0.25)` | Stroke color of the grid line for the first index (index 0)
| gridZerolineborderdash | number[] | [] | Length and spacing of dashes of the grid line for the first index (index 0). [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| gridZerolineborderdashoffset | number | 0 | Offset for line dashes of the grid line for the first index (index 0). [See MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
| gridOffsetGridLines | boolean | FALSE | If true, grid lines will be shifted to be between labels. This is set to true for a bar chart by default
| gridZ | number | 0 | z-index of gridline layer. Values <= 0 are drawn under datasets, > 0 on top
| pointlabelsDisplay | boolean | TRUE | if true, point labels are shown
| pointlabelsCallback | function |  | Callback function to transform data labels to point labels. The default implementation simply returns the current string
| pointlabelsFontcolor | Color / Color[] | `#666` | Font color for point labels
| pointlabelsFontfamily | string | "`Helvetica Neue`, `Helvetica`, `Arial`, sans-serif" | Font family to use when rendering labels
| pointlabelsFontsize | number | 10 | font size in pixels
| pointlabelsFontstyle | string | `normal` | Font style to use when rendering point labels
| pointlabelsLineheight | number / string | 1.2 | Height of an individual line of text ([See MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))
| ticksBackdropcolor | Color | `rgba(255, 255, 255, 0.75)` | Color of label backdrops
| ticksBackdroppaddingx | number | 2 | Horizontal padding of label backdrop
| ticksBackdroppaddingy | number | 2 | Vertical padding of label backdrop
| ticksBeginatzero | boolean | FALSE | if true, scale will include 0 if it is not already included
| ticksMin | number |  | User defined minimum number for the scale, overrides minimum value from data. [See more...](https://www.chartjs.org/docs/latest/axes/radial/linear.html#axis-range-settings)
| ticksMax | number |  | User defined maximum number for the scale, overrides maximum value from data. [See more...](https://www.chartjs.org/docs/latest/axes/radial/linear.html#axis-range-settings)
| ticksMaxtickslimit | number | 11 | Maximum number of ticks and gridlines to show
| ticksPrecision | number |  | if defined and stepSize is not specified, the step size will be rounded to this many decimal places
| ticksStepsize | number |  | User defined fixed step size for the scale. [See more...](https://www.chartjs.org/docs/latest/axes/radial/linear.html#step-size)
| ticksSuggestedmax | number |  | Adjustment used when calculating the maximum data value. [See more...](https://www.chartjs.org/docs/latest/axes/radial/linear.html#axis-range-settings)
| ticksSuggestedmin | number |  | Adjustment used when calculating the minimum data value. [See more...](https://www.chartjs.org/docs/latest/axes/radial/linear.html#axis-range-settings)
| ticksShowlabelbackdrop | boolean | TRUE | If true, draw a background behind the tick labels

## Usage

```html
<c-chart>
  <c-radial-linear-axis 
    anglelines-display="true"
    pointlabels-fontsize="12">
  </c-radial-linear-axis>
</c-chart>
```
