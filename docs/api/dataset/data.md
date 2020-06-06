# Data
`class Data extends BaseAttribute`

https://www.chartjs.org/docs/latest/general/

Data inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})

The data property of a dataset for a bar chart is specified as an array of numbers. Each point in the data array corresponds to the label at the same index on the x axis.
Data components are included inside Datasets. They represent different sets of data that will be displayed in the chart

## API

| Attribute name | Type | Default | Description | Chart
| --- | --- | --- | --- | ---
| backgroundColor | Color | 'rgba(0, 0, 0, 0.1)' | The bar background color. | Line, Bar, Radar, Doughnut, Pie, Polar area, Bubble
| borderAlign | string | 'center' | The border alignment ('center' or 'inner') | Doughnut, Pie, Polar area
| borderCapStyle | string | 'butt' | Cap style of the line | Line, Radar
| borderColor | Color | 'rgba(0, 0, 0, 0.1)' | The bar border color. | Line, Bar, Radar, Doughnut, Pie, Polar area, Bubble
| borderDash | number[] | [] | Length and spacing of dashes. | Line, Radar
| borderDashOffset | number | 0 | Offset for line dashes. | Line, Radar
| borderJoinStyle | string | 'miter' | Line joint style. | Line, Radar
| borderSkipped | string | 'bottom' | This setting is used to avoid drawing the bar stroke at the base of the fill ('bottom', 'left', 'top', 'right', false) | Bar
| borderWidth | number | 3 | The bar border width (in pixels). | Line, Bar, Radar, Doughnut, Pie, Polar area, Bubble
| clip | number/object | borderWidth / 2 | How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. 0 = clip at chartArea. Clipping can also be configured per side: clip: {left: 5, top: false, right: -2, bottom: 0} | Line
| cubicInterpolationMode | string | 'default' | The following interpolation modes are supported: ('default, 'monotone') | Line
| detail (required) | object[] |  | An array containing the data to be displayed in the chart | All
| fill | boolean/string | true | Whether to fill the area under the line | Line, Radar
| hitRadius | number | 1 | Bubble additional radius for hit detection (in pixels). | Bubble
| hoverBackgroundColor | Color | undefined | Background color when hovered. | Line, Bar, Radar, Doughnut, Pie, Polar area, Bubble
| hoverBorderCapStyle | string | undefined | Cap style of the line when hovered | Line, Radar
| hoverBorderColor | Color | undefined | Border color when hovered. | Line, Bar, Radar, Doughnut, Pie, Polar area, Bubble
| hoverBorderDash | number[] | undefined | Length and spacing of dashes when hovered. | Line, Radar
| hoverBorderDashOffset | number | undefined | Offset for line dashes when hovered. | Line, Radar
| hoverBorderJoinStyle | string | undefined | Line joint style when hovered. | Line, Radar
| hoverBorderWidth | number | undefined | The bar border width (in pixels) when hovered. | Line, Bar, Radar, Doughnut, Pie, Polar area, Bubble
| hoverRadius | number | 4 | Bubble additional radius when hovered (in pixels). | Bubble
| label | string | '' | The label for the dataset which appears in the legend and tooltips. | Line, Bar, Radar, Bubble
| lineTension | number | 0.4 | Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used. | Line, Radar
| order | number | 0 | The drawing order of dataset. Also affects order for stacking, tooltip, and legend. | Line, Bar, Radar, Bubble
| pointBackgroundColor | Color | 'rgba(0, 0, 0, 0.1)' | The fill color for points. | Line, Radar
| pointBorderColor | Color | 'rgba(0, 0, 0, 0.1)' | The border color for points. | Line, Radar
| pointBorderWidth | number | 1 | The width of the point border in pixels. | Line, Radar
| pointHitRadius | number | 1 | The pixel size of the non-displayed point that reacts to mouse events. | Line, Radar
| pointHoverBackgroundColor | Color | undefined | The bar background color when hovered. | Line, Radar
| pointHoverBorderColor | Color | undefined | The bar border color when hovered. | Line, Radar
| pointHoverBorderWidth | number | 1 | The bar border width when hovered (in pixels). | Line, Radar
| pointHoverRadius | number | 4 | The radius of the point when hovered. | Line, Radar
| pointRadius | number | 3 | The radius of the point shape. If set to 0, the point is not rendered. | Line, Radar
| pointRotation | number | 0 | The rotation of the point in degrees. | Line, Radar
| pointStyle | string/Image | 'circle' | Style of the point. | Line, Radar, Bubble
| radius | number | 3 | Bubble radius (in pixels). | Bubble
| rotation | number | 0 | Bubble rotation (in degrees). | Bubble
| showLine | boolean | undefined | If false, the line is not drawn for this dataset. | Line
| spanGaps | boolean | undefined | If true, lines will be drawn between points with no or null data. If false, points with NaN data will create a break in the line. | Line, Radar
| stack | string | undefined | The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack). | Bar
| steppedLine | boolean/string | false | The following values are supported for steppedLine: (false, true, 'before', 'after', 'middle') | Line
| weight | number | 1 | The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values. | Doughnut, Pie
| xAxisID | string | first x axis | The ID of the x axis to plot this dataset on. | Line, Bar
| yAxisID | string | first y axis | The ID of the y axis to plot this dataset on. | Line, Bar


### borderSkipped
This setting is used to avoid drawing the bar stroke at the base of the fill. In general, this does not need to be changed except when creating chart types that derive from a bar chart.

Note: for negative bars in vertical chart, top and bottom are flipped. Same goes for left and right in horizontal chart.

Options are:

- `bottom`
- `left`
- `top`
- `right`

### borderWidth
If this value is a number, it is applied to all sides of the rectangle (left, top, right, bottom), except borderSkipped. If this value is an object, the left property defines the left border width. Similarly the right, top and bottom properties can also be specified. Omitted borders and borderSkipped are skipped.


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
