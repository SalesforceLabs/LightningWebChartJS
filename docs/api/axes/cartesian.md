# Cartesian Axis
`class CartesianAxis extends BaseAxis`

https://www.chartjs.org/docs/latest/axes/cartesian/

CartesianAxis inherits all the properties from [BaseAxis]({{ "/docs/api/axes.html" | relative_url }}) and exposes Cartesian axis configuration fields


## API

Extends attribute from BaseAxis and BaseAttribute

| Attribute name | Type | Default value
| --- | --- | ---
| type | string |  
| position | string |  
| offset | boolean | false
| id | string |  
| gridlines | object |  
| scalelabel | object |  
| ticksMin | number |  
| ticksMax | number |  
| ticksSamplesize | number | ticks.length
| ticksAutoskip | boolean | true
| ticksAutoskippadding | number | 0
| ticksLabeloffset | number | 0 labels at the edges to be cropped by the edge of the canvas
| ticksMaxrotation | number | 50
| ticksMinrotation | number | 0
| ticksMirror | boolean | false
| ticksPadding | number | 0