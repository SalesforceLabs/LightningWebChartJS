# Chart
`class BaseChart`

https://www.chartjs.org/docs/2.7.3/charts/

The Charts are the main containers of your component. They have different attributes and can include different child components, so you can customize the way you display your data.


## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
|type | string | `bar` | The type of chart. The options are: `line`, `bar`, `horizontalBar`, `radar`, `doughnut`, `pie`, `polarArea`, `bubble` and `scatter`
| uuid | string | A random uuid | UUID used to identify uniquely the chart
| chartjsloadedCallback | function |  | Called when Chartjs is loaded.
| canvasOnchange | function |  | Allows to define a callback for an event (parameter) of type `change` binded to the canvas.
| canvasOnclick | function |  | Allows to define a callback for an event (parameter) of type `click` binded to the canvas.
| canvasOnmouseover | function |  | Allows to define a callback for an event (parameter) of type `mouseover` binded to the canvas.
| canvasOnmouseout | function |  | Allows to define a callback for an event (parameter) of type `mouseout` binded to the canvas.
| responsive | boolean | `true` | Resizes the chart canvas when its container does ([important note...](https://www.chartjs.org/docs/2.7.3/general/responsive.html#important-note)).
| responsiveanimationduration | number | 0 | Duration in milliseconds it takes to animate to new size after a resize event.
| maintainaspectratio | boolean | `true` | Maintain the original canvas aspect ratio (width / height) when resizing.
| aspectratio | number | 2 | Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas). Note that this option is ignored if the height is explicitly defined either as attribute or via the style.
| callbackResize | function |  | Called when a resize occurs. Gets passed two arguments: the chart instance and the new size.
| devicepixelratio | number | window.devicePixelRatio | Override the window`s default devicePixelRatio.
| events | string[] | [`'mousemove'`, `'mouseout'`, `'click'`, `'touchstart'`, `'touchmove'`] | The events option defines the browser events that the chart should listen to for tooltips and hovering. [more...](https://www.chartjs.org/docs/2.7.3/general/interactions/events.html#event-option)
| callbackClick | function | null | Called when any of the events fire. Called in the context of the chart and passed the event and an array of active elements (bars, points, etc).
| callbackHover | function | null | Called if the event is of type `mouseup` or `click`. Called in the context of the chart and passed the event and an array of active elements.
| destroyChart | function | | Use this to destroy any chart instances that are created. This will clean up any references stored to the chart object within Chart.js, along with any associated event listeners attached by Chart.js. This must be called before the canvas is reused for a new chart.
| updateChart(duration, lazy) | function | | Triggers an update of the chart. This can be safely called after updating the data object. This will update all scales, legends, and then re-render the chart. A config object can be provided with additional configuration for the update process. This is useful when update is manually called inside an event handler and some different animation is desired. See [Updating Charts](https://www.chartjs.org/docs/2.7.3/developers/updates.html) for more details.
| resetChart | function | | Reset the chart to it's state before the initial animation. A new animation can then be triggered using `update`.
| renderChart(config) | function | | Triggers a redraw of all chart elements. Note, this does not update elements for new data. Use `.update()` in that case. See `.update(config)` for more details on the config object.
| stopChart | function | | Use this to stop any current animation loop. This will pause the chart during any current animation frame. Call `.render()` to re-animate.
| resizeChart | function | | Use this to manually resize the canvas element. This is run each time the canvas container is resized, but you can call this method manually if you change the size of the canvas nodes container element.
| clearChart | function | | Will clear the chart canvas. Used extensively internally between animation frames, but you might find it useful.
| toBase64ImageChart | function | | This returns a base 64 encoded string of the chart in it's current state.
| generateLegendChart | function | | Returns an HTML string of a legend for that chart. The legend is generated from the legendCallback in the options.
| getElementAtEventChart(event) | function | | Calling `getElementAtEvent(event)` on your Chart instance passing an argument of an event, or jQuery event, will return the single element at the event position. If there are multiple items within range, only the first is returned. The value returned from this method is an array with a single parameter. An array is used to keep a consistent API between the `get*AtEvent` methods.
| getElementsAtEventChart(event) | function | | Looks for the element under the event point, then returns all elements at the same data index. This is used internally for 'label' mode highlighting Calling `getElementsAtEvent(event)` on your Chart instance passing an argument of an event, or jQuery event, will return the point elements that are at that the same position of that event.
| getDatasetAtEventChart(event) | function | | Looks for the element under the event point, then returns all elements from that dataset. This is used internally for 'dataset' mode highlighting
| getDatasetMetaChart(index) | function | | Looks for the dataset that matches the current index and returns that metadata. This returned data has all of the metadata that is used to construct the chart. The `data` property of the metadata will contain information about each point, rectangle, etc. depending on the chart type. Extensive examples of usage are available in the [Chart.js tests](https://github.com/chartjs/Chart.js/tree/master/test).

## Usage

```html
<c-chart type="bar" responsive="true">

</c-chart>
```