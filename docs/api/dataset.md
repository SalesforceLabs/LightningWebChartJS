# Dataset
`class Dataset extends BaseAttribute`

Dataset inherits all the properties from [BaseAttribute]({{ "/docs/api/attributes.html" | relative_url }})

Datasets can contain one or more Data components inside.

## API

| Attribute name | Type | Default | Description
| --- | --- | --- | ---
| labels | string[] | Contains the list of labels that will be represented by the data, this means, the main grops

## Usage

```html
<c-chart>
  <c-dataset labels='["Blue", "Orange", "Yellow", "Green", "Light Blue", "Purple"]'>
  </c-dataset>
</c-chart>
```
