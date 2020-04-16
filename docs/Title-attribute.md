# Title Attribute

https://www.chartjs.org/docs/latest/configuration/title.html

Title component is an Attribute component type.
Title inherits BaseAttribute and exposes Title configuration fields

## API

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  display | boolean | false
  position | string | 'top'
  fontsize | number | 12
  fontfamily | string | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
  fontcolor | string | '#666'
  fontstyle | string | 'bold'
  padding | number | 10
  lineheight | number/string | 1.2
  text | string/string[] | ''

## Usage Example

```
<c-bar-chart>
  <c-title
    text="Evolution of charts"
    position="bottom"
  >
  </c-title>
</c-bar-chart>
```
