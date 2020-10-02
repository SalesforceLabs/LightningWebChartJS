# Tooltip Attribute
`class Tooltip extends BaseAttribute`

https://www.chartjs.org/docs/latest/configuration/tooltip.html

Tooltip inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})


## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| enabled | boolean | true | Are on-canvas tooltips enabled?
| custom | function | null | See custom [tooltip](https://www.chartjs.org/docs/latest/configuration/tooltip.html#external-custom-tooltips) section
| mode | string | `nearest` | Sets which elements appear in the tooltip. [more...](https://www.chartjs.org/docs/latest/general/interactions/modes.html#interaction-modes)
| intersect | boolean | true | If true, the tooltip mode applies only when the mouse position intersects with an element. If false, the mode will be applied at all times
| position | string | `average` | The mode for positioning the tooltip. Options are: `average`, `nearest`.
| itemSort | function |  | Sort tooltip items. [more...](https://www.chartjs.org/docs/latest/configuration/tooltip.html#sort-callback)
| filter | function |  | Filter tooltip items. [more...](https://www.chartjs.org/docs/latest/configuration/tooltip.html#filter-callback)
| backgroundcolor | Color | `rgba(0, 0, 0, 0.8)` | Background color of the tooltip
| titlefontfamily | string | "`Helvetica Neue`, `Helvetica`, `Arial`, sans-serif" | Title font
| titlefontsize | number | 12 | Title font size
| titlefontstyle | string | `bold` | Title font style
| titlefontcolor | Color | `#fff` | Title font color
| titlealign | string | `left` | Horizontal alignment of the title text lines. [more...](https://www.chartjs.org/docs/latest/configuration/tooltip.html#alignment)
| titlespacing | number | 2 | Spacing to add to top and bottom of each title line
| titlemarginbottom | number | 6 | Margin to add on bottom of title section
| bodyfontfamily | string | "`Helvetica Neue`, `Helvetica`, `Arial`, sans-serif" | Body line font
| bodyfontsize | number | 12 | Body font size
| bodyfontstyle | string | `normal` | Body font style
| bodyfontcolor | Color | `#fff` | Body font color
| bodyalign | string | `left` | Horizontal alignment of the body text lines. [more...](https://www.chartjs.org/docs/latest/configuration/tooltip.html#alignment)
| bodyspacing | number | 2 | Spacing to add to top and bottom of each tooltip item
| footerfontfamily | string | "`Helvetica Neue`, `Helvetica`, `Arial`, sans-serif" | Footer font
| footerfontsize | number | 12 | Footer font size
| footerfontstyle | string | `bold` | Footer font style
| footerfontcolor | Color | `#fff` | Footer font color
| footeralign | string | `left` | Horizontal alignment of the footer text lines. [more...](https://www.chartjs.org/docs/latest/configuration/tooltip.html#alignment)
| footerspacing | number | 2 | Spacing to add to top and bottom of each footer line
| footermargintop | number | 6 | Margin to add before drawing the footer
| xpadding | number | 6 | Padding to add on left and right of tooltip
| ypadding | number | 6 | Padding to add on top and bottom of tooltip
| caretpadding | number | 2 | Extra distance to move the end of the tooltip arrow away from the tooltip point
| caretsize | number | 5 | Size, in px, of the tooltip arrow
| cornerradius | number | 6 | Radius of tooltip corner curves
| multikeybackground | Color | `#fff` | Color to draw behind the colored boxes when multiple items are in the tooltip
| displaycolors | boolean | true | If true, color boxes are shown in the tooltip
| bordercolor | Color | `rgba(0, 0, 0, 0)` | Color of the border
| borderwidth | number | 0 | Size of the border
| rtl | boolean |  | true for rendering the legends from right to left
| textdirection | string | canvas` default | Determines the direction of the text. Default value is `ltr` on the canvas for rendering the legend, regardless of the css specified on the canvas
| callbackBeforetitle |  |  | Returns the text to render before the title
| callbackTitle |  |  | Returns text to render as the title of the tooltip
| callbackAftertitle |  |  | Returns text to render after the title
| callbackBeforebody |  |  | Returns text to render before the body section
| callbackBeforelabel |  |  | Returns text to render before an individual label. This will be called for each item in the tooltip
| callbackLabel |  |  | Returns text to render for an individual item in the tooltip. [more...](https://www.chartjs.org/docs/latest/configuration/tooltip.html#label-callback)
| callbackLabelcolor |  |  | Returns the colors to render for the tooltip item. [more...](https://www.chartjs.org/docs/latest/configuration/tooltip.html#label-color-callback)
| callbackLabeltextcolor |  |  | Returns the colors for the text of the label for the tooltip item
| callbackAfterlabel |  |  | Returns text to render after an individual label
| callbackAfterbody |  |  | Returns text to render after the body section
| callbackBeforefooter |  |  | Returns text to render before the footer section
| callbackFooter |  |  | Returns text to render as the footer of the tooltip
| callbackAfterfooter |  |  | Text to render after the footer section

### Position Modes
Possible modes are:
- `average` mode will place the tooltip at the average position of the items displayed in the tooltip. 
- `nearest` will place the tooltip at the position of the element closest to the event position.

### Alignment
The titleAlign, bodyAlign and footerAlign options define the horizontal position of the text lines with respect to the tooltip box. The following values are supported.

- `left` (default)
- `right`
- `center`

These options are only applied to text lines. Color boxes are always aligned to the left edge.

### Tooltip Item Interface
The tooltip items passed to the tooltip callbacks implement the following interface.

````
{
    // Label for the tooltip
    label: string,

    // Value for the tooltip
    value: string,

    // X Value of the tooltip
    // (deprecated) use `value` or `label` instead
    xLabel: number | string,

    // Y value of the tooltip
    // (deprecated) use `value` or `label` instead
    yLabel: number | string,

    // Index of the dataset the item comes from
    datasetIndex: number,

    // Index of this data item in the dataset
    index: number,

    // X position of matching point
    x: number,

    // Y position of matching point
    y: number
}
````

### Tooltip Model
The tooltip model contains parameters that can be used to render the tooltip.

````
{
  // The items that we are rendering in the tooltip. See Tooltip Item Interface section
  dataPoints: TooltipItem[],

  // Positioning
  xPadding: number,
  yPadding: number,
  xAlign: string,
  yAlign: string,

  // X and Y properties are the top left of the tooltip
  x: number,
  y: number,
  width: number,
  height: number,
  // Where the tooltip points to
  caretX: number,
  caretY: number,

  // Body
  // The body lines that need to be rendered
  // Each object contains 3 parameters
  // before: string[] // lines of text before the line with the color square
  // lines: string[], // lines of text to render as the main item with color square
  // after: string[], // lines of text to render after the main lines
  body: object[],
  // lines of text that appear after the title but before the body
  beforeBody: string[],
  // line of text that appear after the body and before the footer
  afterBody: string[],
  bodyFontColor: Color,
  _bodyFontFamily: string,
  _bodyFontStyle: string,
  _bodyAlign: string,
  bodyFontSize: number,
  bodySpacing: number,

  // Title
  // lines of text that form the title
  title: string[],
  titleFontColor: Color,
  _titleFontFamily: string,
  _titleFontStyle: string,
  titleFontSize: number,
  _titleAlign: string,
  titleSpacing: number,
  titleMarginBottom: number,

  // Footer
  // lines of text that form the footer
  footer: string[],
  footerFontColor: Color,
  _footerFontFamily: string,
  _footerFontStyle: string,
  footerFontSize: number,
  _footerAlign: string,
  footerSpacing: number,
  footerMarginTop: number,

  // Appearance
  caretSize: number,
  caretPadding: number,
  cornerRadius: number,
  backgroundColor: Color,

  // colors to render for each item in body[]. This is the color of the squares in the tooltip
  labelColors: Color[],
  labelTextColors: Color[],

  // 0 opacity is a hidden tooltip
  opacity: number,
  legendColorBackground: Color,
  displayColors: boolean,
  borderColor: Color,
  borderWidth: number
}
````

## Usage

```html
<c-chart>
  <c-tooltip
    titlealign="left"
    footerfontcolor="#CC4"
  >
  </c-tooltip>
</c-chart>
```
