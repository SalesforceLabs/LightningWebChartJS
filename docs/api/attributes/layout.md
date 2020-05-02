# Layout Attribute
`class Layout extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/layout.html

Layout inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})
This components allows you to configure the layout of the chart


## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| paddingBottom | number | 0 | The padding in pixels to add on the top of the chart
| paddingLeft | number | 0 | The padding in pixels to add on the top of the chart
| paddingRight | number | 0 | The padding in pixels to add on the top of the chart
| paddingTop | number | 0 | The padding in pixels to add on the top of the chart

## Usage

```html
<c-chart>
  <c-layout
    padding-bottom="50"
    padding-top="30"
  >
  </c-layout>
</c-chart>
```
