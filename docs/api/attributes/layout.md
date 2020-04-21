# Layout Attribute
`class Layout extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/layout.html

Layout inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }}) and exposes Layout configuration fields


## API

| Attribute name | Type | Default value
| --- | --- | ---
| paddingBottom | number | 0
| paddingLeft | number | 0
| paddingRight | number | 0
| paddingTop | number | 0

## Usage

```html
<c-chart>
  <c-layout
    padding-bottom="50"
    padding-top="50"
  >
  </c-layout>
</c-chart>
```
