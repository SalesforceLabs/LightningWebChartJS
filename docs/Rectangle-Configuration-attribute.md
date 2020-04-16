# Rectangle Configuration Attribute

https://www.chartjs.org/docs/latest/configuration/elements.html#rectangle-configuration

Rectangle Configuration component is an Attribute component type.
RectangleConfiguration inherits BaseAttribute and exposes Rectangle configuration fields

## API

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  backgroundcolor | color | 'rgba(0, 0, 0, 0.1)'
  borderwidth | number | 0
  bordercolor | color | 'rgba(0, 0, 0, 0.1)'
  borderskipped | string | 'bottom'

## Usage Example

```
<c-bar-chart>
  <c-rectangle-configuration
    borderwidth="10"
  >
  </c-rectangle-configuration>
</c-bar-chart>
```
