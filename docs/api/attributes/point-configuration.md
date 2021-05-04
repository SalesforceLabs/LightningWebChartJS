# Point Configuration Attribute
`class PointConfiguration extends BaseAttribute`

https://www.chartjs.org/docs/2.7.3/configuration/elements.html#point-configuration

PointConfiguration inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})

Point elements are used to represent the points in a line, radar or bubble chart.

## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| radius | number | 3 | Point radius
| pointstyle | string / Image | `'circle'` | Point style. Options are: `circle`, `cross`, `crossRot`, `dash`, `line`, `rect`, `rectRounded`, `rectRot`, `star`, `triangle`
| rotation | number | 0 | Point rotation (in degrees)
| backgroundcolor | Color | `rgba(0, 0, 0, 0.1)` | Point fill color
| borderwidth | number | 1 | Point stroke width
| bordercolor | Color | `rgba(0, 0, 0, 0.1)` | Point stroke color
| hitradius | number | 1 | Extra radius added to point radius for hit detection
| hoverradius | number | 4 | Point radius when hovered
| hoverborderwidth | number | 1 | Stroke width when hovered

## Usage

```html
<c-chart>
  <c-point-configuration
    borderwidth="10"
    hoverradius="8"
  >
  </c-point-configuration>
</c-chart>
```
