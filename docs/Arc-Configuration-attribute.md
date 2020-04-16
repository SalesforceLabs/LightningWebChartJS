# Arc Configuration Attribute

https://www.chartjs.org/docs/latest/configuration/elements.html#arc-configuration

Arc Configuration component is an Attribute component type.
ArcConfiguration inherits BaseAttribute and exposes Arc configuration fields

## API

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  angle | number | circumference / (arc count)
  backgroundcolor | color | 'rgba(0, 0, 0, 0.1)'
  borderalign | string | 'center'
  bordercolor | color | '#fff'
  borderwidth | number | 2

## Usage Example

```
<c-bar-chart>
  <c-arc-configuration
    borderwidth="10"
  >
  </c-arc-configuration>
</c-bar-chart>
```
