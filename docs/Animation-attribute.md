# Animation Attribute

https://www.chartjs.org/docs/latest/configuration/animations.html

Animation component is an Attribute component type.
Animation inherits BaseAttribute and expose Animation configuration fields

## API

- api attribute list
  Attribute name | Type | Default value
  --- | --- | ---
  duration | number | 1000
  easing | string | 'easeOutQuart'
  callbackOnprogress | function | null
  callbackOnComplete | function | null

## Usage Example

```
<c-bar-chart>
  <c-animation
    duration="2000"
    easing="easeInBounce"
  >
  </c-animation>
</c-bar-chart>
```
