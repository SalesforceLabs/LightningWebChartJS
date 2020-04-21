# Base Attribute

https://www.chartjs.org/docs/latest/general/

BaseAttribute expose all the reactivity logic and the options spreding required for concrete attribute.
BaseAttribute override renderedCallback to get a reference of its parentNode
BaseAttribute override disconnectedCallback to dispatch a disconnect custom event to the parent with the current option and payload
