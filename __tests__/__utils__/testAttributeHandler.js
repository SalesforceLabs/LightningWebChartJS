import { createElement } from 'lwc';
import { OPTION_EVENT_NAME } from 'c/constants';

export class ChartOptionMock {
  constructor(propertyName, propertyValue, expectedProperty) {
    this.propertyName = propertyName;
    this.propertyValue = propertyValue;
    this.expectedProperty = expectedProperty;
  }
}

export function testAttributeProperties(constructor, listAttributeProperties) {
  listAttributeProperties.forEach(item => {
    test(`Exposed property matches ChartJS expected attribute for: ${item.propertyName}`, () => {
      const element = createElement('x-test', { is: constructor });
      document.body.appendChild(element);

      let detail;
      document.body.addEventListener(OPTION_EVENT_NAME, evt => {
        detail = evt.detail;
      });

      element[item.propertyName] = item.propertyValue;

      return Promise.resolve().then(() => {
        expect(element[item.propertyName]).toBe(item.propertyValue);
        expect(typeof detail).toBe('object');
        expect(detail.payload).toMatchObject(item.expectedProperty);
      });
    });
  });
}
