# Radial Linear Axis

https://www.chartjs.org/docs/latest/axes/radial/linear.html

RadialLinearAxis component is an Attibute component type.
RadialLinearAxis inherits RadialAxis which inherits BaseAxis which inherits BaseAttribute.

## API

Extends attribute from RadialAxis and BaseAxis and BaseAttribute

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  anglelinesDisplay | boolean | true
  anglelinesColor | Color | 'rgba(0, 0, 0, 0.1)'
  anglelinesLinewidth | number | 1
  anglelinesBorderdash | number[] | []
  anglelinesBorderdashoffset | number | 0.0
  gridDisplay | boolean |
  gridCircular | boolean | false
  gridColor | Color|Color[] | 'rgba(0, 0, 0, 0.1)'
  gridBorderdash | number[] | []
  gridBorderdashoffset | number | 0.0
  gridLinewidth | number/number[] | 1
  gridDrawborder | boolean | true
  gridDrawonchartarea | boolean | true
  gridDrawticks | boolean | true
  gridTickmarklength | number | 10
  gridZerolinewidth | number | 1
  gridZerolinecolor | Color | 'rgba(0, 0, 0, 0.25)'
  gridZerolineborderdash | number[] | []
  gridZerolineborderdashoffset | number[] | 0.0
  gridOffsetGridLines | boolean | false
  gridZ | number | 0
  pointlabelsDisplay | boolean | true
  pointlabelsCallback | function |
  pointlabelsFontcolor | Color/Color[]| '#666'
  pointlabelsFontfamily | string | "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
  pointlabelsFontsize | number | 10
  pointlabelsFontstyle | string | 'norlmal'
  pointlabelsLineheight | number/string | 1.2
  ticksBackdropcolor | Color | 'rgba(255, 255, 255, 0.75)'
  ticksBackdroppaddingx | number | 2
  ticksBackdroppaddingy | number | 2
  ticksBeginatzero | boolean | false
  ticksMin | number |
  ticksMax | number |
  ticksMaxtickslimit | number | 11
  ticksPrecision | number |
  ticksStepsize | number |
  ticksSuggestedmax | number |
  ticksSuggestedmin | number |
  ticksShowlabelbackdrop | boolean | true

## Usage Example

```
<c-bar-chart>
  <c-radial-linear-axis>
  </c-radial-linear-axis>
</c-bar-chart>
```
