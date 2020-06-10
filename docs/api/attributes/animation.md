# Animation Attribute
`class Animation extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/animations.html

Animation inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})

Chart.js animates charts out of the box. A number of options are provided to configure how the animation looks and how long it takes.

## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| duration | number | 1000 | The number of milliseconds an animation takes
| easing | string | `easeOutQuart` | Easing function to use. [more...](https://www.chartjs.org/docs/latest/configuration/animations.html#easing)
| callbackOnprogress | function | `null` | Callback called on each step of an animation. [more...](https://www.chartjs.org/docs/latest/configuration/animations.html#animation-callbacks)
| callbackOncomplete | function | `null` | Callback called at the end of an animation. [more...](https://www.chartjs.org/docs/latest/configuration/animations.html#animation-callbacks)

### Easing
Available options are: `linear`, `easeInQuad`, `easeOutQuad`, `easeInOutQuad`, `easeInCubic`, `easeOutCubic`, `easeInOutCubic`, `easeInQuart`, `easeOutQuart`, `easeInOutQuart`, `easeInQuint`, `easeOutQuint`, `easeInOutQuint`, `easeInSine`, `easeOutSine`, `easeInOutSine`, `easeInExpo`, `easeOutExpo`, `easeInOutExpo`, `easeInCirc`, `easeOutCirc`, `easeInOutCirc`, `easeInElastic`, `easeOutElastic`, `easeInOutElastic`, `easeInBack`, `easeOutBack`, `easeInOutBack`, `easeInBounce`, `easeOutBounce` and `easeInOutBounce`

### Callbacks
The `onprogress` and `oncomplete` callbacks are useful for synchronizing an external draw to the chart animation. The callback is passed a Chart.Animation instance:
```
{
    // Chart object
    chart: Chart,

    // Current Animation frame number
    currentStep: number,

    // Number of animation frames
    numSteps: number,

    // Animation easing to use
    easing: string,

    // Function that renders the chart
    render: function,

    // User callback
    onAnimationProgress: function,

    // User callback
    onAnimationComplete: function
}
```


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
