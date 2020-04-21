# Legend Attribute
`class Legend extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/legend.html


Legend inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }}) and exposes Legend configuration fields


## API

| Attribute name | Type | Default value
| --- | --- | ---
| display | boolean | true
| position | string | 'top'
| align | string | 'center'
| fullwidth | boolean | true
| reverse | boolean | false
| rtl | boolean |
| textdirection | string | canvas' default
| labelBoxwidth | number | 40
| labelFontsize | number | 12
| labelFontstyle | string | 'normal'
| labelFontcolor | Color | '#666'
| labelFontfamily | string | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
| labelPadding | number | 10
| labelUsepointstyle | boolean | false
| callbackOnclick | function |
| callbackOnhover | function |
| callbackOnleave | function |
| callbackGeneratelabels | function |
| callbackFilter | function | 0

## Usage

```html
<c-chart>
  <c-legend
    align="start"
    rtl="true"
  >
  </c-legend>
</c-chart>
```
