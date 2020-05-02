# Chart
`class BaseChart`

https://www.chartjs.org/docs/latest/charts/

The Charts are the main containers of your component. They have different attributes and can include different child components, so you can customize the way you display your data.


## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
|type | string | `bar` | The type of chart. The options are: `line`, `bar`, `radar`, `doughnut`, `pie`, `polarArea`, `bubble` and `scatter`
| uuid | string | A random uuid | UUID used to identify uniquely the chart
| canvasOnchange | function |  | Allows to define a callback for an event (parameter) of type `change` binded to the canvas.
| canvasOnclick | function |  | Allows to define a callback for an event (parameter) of type `click` binded to the canvas.
| canvasOnmouseover | function |  | Allows to define a callback for an event (parameter) of type `mouseover` binded to the canvas.
| canvasOnmouseout | function |  | Allows to define a callback for an event (parameter) of type `mouseout` binded to the canvas.
| responsive | boolean | `true` | Resizes the chart canvas when its container does ([important note...](https://www.chartjs.org/docs/latest/general/responsive.html#important-note)).
| responsiveanimationduration | number | 0 | Duration in milliseconds it takes to animate to new size after a resize event.
| maintainaspectratio | boolean | `true` | Maintain the original canvas aspect ratio (width / height) when resizing.
| aspectratio | number | 2 | Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas). Note that this option is ignored if the height is explicitly defined either as attribute or via the style.
| callbackResize | function |  | Called when a resize occurs. Gets passed two arguments: the chart instance and the new size.
| devicepixelratio | number | window.devicePixelRatio | Override the window`s default devicePixelRatio.
| events | string[] | [`'mousemove'`, `'mouseout'`, `'click'`, `'touchstart'`, `'touchmove'`] | The events option defines the browser events that the chart should listen to for tooltips and hovering. [more...](https://www.chartjs.org/docs/latest/general/interactions/events.html#event-option)
| callbackClick | function | null | Called when any of the events fire. Called in the context of the chart and passed the event and an array of active elements (bars, points, etc).
| callbackHover | function | null | Called if the event is of type `mouseup` or `click`. Called in the context of the chart and passed the event and an array of active elements.

## Usage

```html
<c-chart type="bar" responsive="true">

</c-chart>
```