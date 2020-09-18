# Axes
`class BaseAxis extends BaseAttribute`

https://www.chartjs.org/docs/latest/axes/

BaseAxis inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})

Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X axis and 1 or more Y axis to map points onto the 2 dimensional canvas. These axes are know as 'cartesian axes'.

In a radial chart, such as a radar chart or a polar area chart, there is a single axis that maps points in the angular and radial directions. These are known as 'radial axes'.

Some characteristics of the axes in Chart.js 2 are:

- Multiple X & Y axes are supported.
- A built-in label auto-skip feature detects would-be overlapping ticks and labels and removes every nth label to keep things displaying normally.
- Scale titles are supported.
- New scale types can be extended without writing an entirely new chart type.

## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| display | boolean|string | `true` | Controls the axis global visibility (visible when true, hidden when false). When display: 'auto', the axis is visible only if at least one associated dataset is visible
| weight | number | 0 | The weight used to sort the axis. Higher weights are further away from the chart area.
| ticksCallback | function |  | Callback used for the ticks definition. Commonly used, for example, to change the tick marks in order to include information about the data type. Parameters: value, index, values. [more...](https://www.chartjs.org/docs/latest/axes/labelling.html#creating-custom-tick-formats)
| callbackBeforeupdate | function |  | Callback called before the update process starts. Parameters: axis
| callbackBeforesetdimensions | function |  | Callback that runs before dimensions are set. Parameters: axis
| callbackAfterSetDimensions | function |  | Callback that runs after dimensions are set. Parameters: axis
| callbackBeforedatalimits | function |  | Callback that runs before data limits are determined. Parameters: axis
| callbackAfterdatalimits | function |  | Callback that runs after data limits are determined. Parameters: axis
| callbackBeforebuildticks | function |  | Callback that runs before ticks are created. Parameters: axis
| callbackAfterbuildticks | function |  | Callback that runs after ticks are created. Useful for filtering ticks. Should return the filtered ticks. Parameters: axis, ticks
| callbackBeforeticktolabelconversion | function |  | Callback that runs before ticks are converted into strings. Parameters: axis
| callbackAfterticktolabelconversion | function |  | Callback that runs after ticks are converted into strings. Parameters: axis
| callbackBeforecalculatetickrotation | function |  | Callback that runs before tick rotation is determined. Parameters: axis
| callbackAftercalculatetickrotation | function |  | Callback that runs after tick rotation is determined. Parameters: axis
| callbackBeforefit | function |  | Callback that runs before the scale fits to the canvas. Parameters: axis
| callbackAfterfit | function |  | Callback that runs after the scale fits to the canvas. Parameters: axis
| callbackAfterupdate | function |  | Callback that runs at the end of the update process. Parameters: axis