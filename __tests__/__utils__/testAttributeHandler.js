import { createElement } from 'lwc';
import { OPTION_EVENT_NAME } from 'c/constants';
import BaseAttribute from 'c/baseAttribute';
import { randomBytes } from 'crypto';

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => randomBytes(arr.length)
  }
});

/**
 * @param {*} propertyName - The name of the LWC exposed attribute
 * @param {*} propertyValue - The value of the LWC exposed attribute
 * @param {*} expectedProperty - An object representing the property name and its value in a Chart's options
 * @example
 *  LWCC Attribute: <c-attribute propertyName="propertyValue">
 *  ChartJS configuration: Chart.options = { attribute: expectedProperty }
 */
global.ChartOptionMock = (propertyName, propertyValue, expectedProperty) => ({
  propertyName: propertyName,
  propertyValue: propertyValue,
  expectedProperty: expectedProperty
});

global.TestAttribute = class TestAttribute extends BaseAttribute {
  constructor() {
    super();
    this.option = 'TestAttribute';
  }
};

/**
 * Check that the DOM element can be created
 */
function testDOMElementInteraction(className) {
  test(`Create DOM Element for: ${className.prototype.constructor.name}`, () => {
    const element = createElement('x-test', { is: className });
    document.body.appendChild(element);

    expect(element).toBeDefined();

    document.body.removeChild(element);
  });
}

/**
 * Check that the exposed property of the attribute is matching correctly the ChartJs option (getter & setter)
 */
function testChartOptions(
  constructor,
  listChartOptionMock,
  eventName = OPTION_EVENT_NAME
) {
  describe.each(listChartOptionMock)(
    'Exposed property matches ChartJS option',
    (item) => {
      test(`${item.propertyName}`, async () => {
        const element = createElement('x-test', { is: constructor });
        document.body.appendChild(element);

        let detail;
        document.body.addEventListener(eventName, (evt) => {
          detail = evt.detail;
        });

        element[item.propertyName] = item.propertyValue;

        await expect(element[item.propertyName]).toBe(item.propertyValue);
        await expect(typeof detail).toBe('object');
        await expect(detail.payload).toMatchObject(item.expectedProperty);
      });
    }
  );
}

global.testAttribute = (constructor, listChartOptionMock, eventName) => {
  testDOMElementInteraction(constructor);
  testChartOptions(constructor, listChartOptionMock, eventName);
};

global.flushPromises = () => {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => setImmediate(resolve));
};
