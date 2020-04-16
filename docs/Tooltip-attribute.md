# Tooltip Attribute

https://www.chartjs.org/docs/latest/configuration/tooltip.html

Tooltip component is an Attribute component type.
Tooltip inherits BaseAttribute and exposes Tooltip configuration fields

## API

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  enabled | boolean | false
  custom | function | null
  mode | string | 'nearest'
  intersect | boolean | true
  position | string | 'average'
  callbackBeforetitle | function |
  callbackTitle | function |
  callbackAftertitle | function |
  callbackBeforebody | function |
  callbackBeforelabel | function |
  callbackLabel | function |
  callbackLabelcolor | function |
  callbackLabeltextcolor | function |
  callbackAfterlabel | function |
  callbackAfterbody | function |
  callbackBeforefooter | function |
  callbackFooter | function |
  callbackAfterfooter | function |
  itemsort | function |
  filter | function |
  backgroundcolor | color | 'rgba(0, 0, 0, 0.8)'
  titlefontfamily | string | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
  titlefontsize | number | 12
  titlefontstyle | string | 'bold'
  titlefontcolor | color | '#fff'
  titlealign | string | 'left'
  titlespacing | number | 2
  titlemarginbottom | number | 6
  bodyfontfamily | string | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
  bodyfontsize | number | 12
  bodyfontstyle | string | 'normal'
  bodyfontcolor | color | '#fff'
  bodyalign | string | 'left'
  bodyspacing | number | 2
  footerfontfamily | string | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
  footerfontsize | number | 12
  footerfontstyle | string | 'bold'
  footerfontcolor | color | '#fff'
  footeralign | string | 'left'
  footerspacing | number | 2
  footermargintop | number | 6
  xpadding | number | 6
  ypadding | number | 6
  caretpadding | number | 2
  caretsize | number | 5
  cornerradius | number | 6
  multikeybackground | color | '#fff'
  displaycolors | boolean | true
  bordercolor | color | 'rgba(0, 0, 0, 0)'
  borderwidth | number | 0
  rtl | boolean |
  textdirection | string | canvas' default

## Usage Example

```
<c-bar-chart>
  <c-tooltip
    titlealign="left"
    footerfontcolor="#CC4"
  >
  </c-tooltip>
</c-bar-chart>
```
