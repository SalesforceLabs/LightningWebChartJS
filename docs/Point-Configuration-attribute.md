# Point Configuration Attribute

https://www.chartjs.org/docs/latest/configuration/elements.html#point-configuration

Point Configuration component is an Attribute component type.
PointConfiguration inherits BaseAttribute and exposes Point configuration fields

## API

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  radius | number | 3
  pointstyle | string/image | 'circle'
  rotation | number | 0
  backgroundcolor | color | 'rgba(0, 0, 0, 0.1)'
  borderwidth | number | 1
  bordercolor | color | 'rgba(0, 0, 0, 0.1)'
  hitradius | number | 1
  hoverradius | number | 4
  hoverborderwidth | number | 1

## Usage Example

```
<c-bar-chart>
  <c-point-configuration
    borderwidth="10"
  >
  </c-point-configuration>
</c-bar-chart>
```
