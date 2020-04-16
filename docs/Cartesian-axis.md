# Cartesian Axis

https://www.chartjs.org/docs/latest/axes/cartesian/

CartesianAxis component is an Attibute component type.
CartesianAxis inherits BaseAxis which inherits BaseAttribute.

## API

Extends attribute from BaseAxis and BaseAttribute

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  type | string |  
  position | string |  
  offset | boolean | false
  id | string |  
  gridlines | object |  
  scalelabel | object |  
  ticksMin | number |  
  ticksMax | number |  
  ticksSamplesize | number | ticks.length
  ticksAutoskip | boolean | true
  ticksAutoskippadding | number | 0
  ticksLabeloffset | number | 0 labels at the edges to be cropped by the edge of the canvas
  ticksMaxrotation | number | 50
  ticksMinrotation | number | 0
  ticksMirror | boolean | false
  ticksPadding | number | 0