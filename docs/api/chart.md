# Chart
`class BaseChart`

https://www.chartjs.org/docs/latest/general/



Chart is the chart component.
Chart host the rendering logic, the reactivity logic, the options gathering and the data gathering.
The type of the chart is dynamic and need to be set in the component Attribute (easier declaratively or programmatically)

## API

| Attribute name | Type | Default value
| --- | --- | ---
| responsive | boolean | true
| responsiveanimationduration | numbef | 0
| maintainaspectratio boolean | true
| aspectratio | number | 2
| callbackResize | function |
| devicepixelratio | number |
| events | string[] |
| callbackClick | function |
| callbackHover | function |

## Usage

```html
<c-chart type="bar">
</c-chart>
```