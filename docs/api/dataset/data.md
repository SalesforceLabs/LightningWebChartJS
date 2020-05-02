# Data
`class Data extends BaseAttribute`

https://www.chartjs.org/docs/latest/general/

Data inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})

The data property of a dataset for a bar chart is specified as an array of numbers. Each point in the data array corresponds to the label at the same index on the x axis.
Data components are included inside Datasets. They represent different sets of data that will be displayed in the chart

## API

| Attribute name | Type | Default | Description | Chart
| --- | --- | --- | --- | ---
| detail (required) | object[] |  | An array containing the data to be displayed in the chart | All
| label | string |  | The label for the dataset which appears in the legend and tooltips. | Bar, Line
| order | number |  | The drawing order of dataset. Also affects order for stacking, tooltip, and legend. | Bar, Line
| yaxisid | string |  | The ID of the x axis to plot this dataset on. | Bar, Line
| xaxisid | string |  | The ID of the y axis to plot this dataset on. | Bar, Line
| backgroundcolor | [Color](https://www.chartjs.org/docs/latest/general/colors.html) | 'rgba(0, 0, 0, 0.1)' | The bar background color. | Bar, Line
| bordercolor | [Color](https://www.chartjs.org/docs/latest/general/colors.html) | 'rgba(0, 0, 0, 0.1)' | The bar border color. | Bar, Line
| fill | boolean |  | Whether to fill the area under the line | Line
| borderwidth | number / object | 0 | The bar border width (in pixels). | Bar, Line
| pointhoverbackgroundcolor | [Color](https://www.chartjs.org/docs/latest/general/colors.html) | undefined | The bar background color when hovered. | Bar, Line
| pointhoverbordercolor | [Color](https://www.chartjs.org/docs/latest/general/colors.html) | undefined | The bar border color when hovered. | Bar, Line
| pointhoverborderwidth | number |  | The bar border width when hovered (in pixels). | Bar, Line
| pointhoverradius | number |  | The radius of the point when hovered. | Line


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
