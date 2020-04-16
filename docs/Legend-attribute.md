# Legend Attribute

https://www.chartjs.org/docs/latest/configuration/legend.html

Legend component is an Attribute component type.
Legend inherits BaseAttribute and exposes Legend configuration fields

## API

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  display | boolean | true
  position | string | 'top'
  align | string | 'center'
  fullwidth | boolean | true
  reverse | boolean | false
  rtl | boolean |
  textdirection | string | canvas' default
  labelBoxwidth | number | 40
  labelFontsize | number | 12
  labelFontstyle | string | 'normal'
  labelFontcolor | Color | '#666'
  labelFontfamily | string | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
  labelPadding | number | 10
  labelUsepointstyle | boolean | false
  callbackOnclick | function |
  callbackOnhover | function |
  callbackOnleave | function |
  callbackGeneratelabels | function |
  callbackFilter | function | 0

## Usage Example

```
<c-bar-chart>
  <c-legend
    align="start"
    rtl="true"
  >
  </c-legend>
</c-bar-chart>
```
