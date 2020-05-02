# Cartesian Time Axis
`class CartesianTimeAxis extends CartesianAxis`

https://www.chartjs.org/docs/latest/axes/cartesian/time.html

CartesianTimeAxis inherits all the properties from [CartesianAxis]({{ "/docs/api/axes/cartesian.html" | relative_url }})

The time scale is used to display times and dates. When building its ticks, it will automatically calculate the most comfortable unit base on the size of the scale.


## API

| Attribute name | Type | Default value
| --- | --- | ---
| adapterDate | object | {}
| distribution | string | `linear`
| bounds | string | `data`
| tickSource | string | `auto`
| timeDisplayformats | object |
| timeIsoweekday | boolean | false
| timeParser | string|function |
| timeRound | string | false
| timeTooltipformat | string |
| timeUnit | string | false
| timeStepsize | number | 1
| timeMinunit | string | `millisecond`

### Date Adapters
The time scale requires both a date library and corresponding adapter to be present. By default, Chart.js includes an adapter for Moment.js. You may wish to exclude moment and choose from other available adapters instead.

### Date Formats
When providing data for the time scale, Chart.js supports all of the formats that Moment.js accepts. See Moment.js docs for details.

### Time Units
The following time measurements are supported. The names can be passed as strings to the `timeUnit` config option to force a certain unit.

- `millisecond`
- `second`
- `minute`
- `hour`
- `day`
- `week`
- `month`
- `quarter`

### Display Formats
The following display formats are used to configure how different time units are formed into strings for the axis tick marks. See Moment.js for the allowable format strings.

| Name | Default | Example
| --- | --- | ---
| millisecond | `h:mm:ss.SSS a` | `11:20:01.123 AM`
| second | `h:mm:ss a` | `11:20:01 AM`
| minute | `h:mm a` | `11:20 AM`
| hour | `hA` | `11AM`
| day | `MMM D` | `Sep 4`
| week | `ll` | `Sep 4 2015`
| month | `MMM YYYY` | `Sep 2015`
| quarter | `[Q]Q - YYYY` | `Q3 - 2015`
| year | `YYYY` | `2015`

## Scale Distribution
The distribution property controls the data distribution along the scale:

- `linear`: data are spread according to their time (distances can vary)
- `series`: data are spread at the same distance from each other

### Scale Bounds
The bounds property controls the scale boundary strategy (bypassed by min/max time options).

- `data`: makes sure data are fully visible, labels outside are removed
- `ticks`: makes sure ticks are fully visible, data outside are truncated

### Ticks Source
The ticks.source property controls the ticks generation.

- `auto`: generates "optimal" ticks based on scale size and time options
- `data`: generates ticks from data (including labels from data {t|x|y} objects)
- `labels`: generates ticks from user given labels ONLY

### Parser
If this property is defined as a string, it is interpreted as a custom format to be used by Moment.js to parse the date.

If this is a function, it must return a Moment.js object given the appropriate data value.

## Usage

```html
<c-chart>
  <c-cartesian-time-axis axis="y"></c-cartesian-time-axis>
</c-chart>
```
