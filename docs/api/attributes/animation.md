# Animation Attribute
`class Animation extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/animations.html

Animation inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }}) and exposes Animation configuration fields

## API

| Attribute name | Type | Default value
| --- | --- | ---
| duration | number | 1000
| easing | string | 'easeOutQuart'
| callbackOnprogress | function | null
| callbackOnComplete | function | null

## Usage

```html
<c-chart>
  <c-animation
    duration="2000"
    easing="easeInBounce"
  >
  </c-animation>
</c-chart>
```
