import { createElement } from 'lwc';
import { OPTION_EVENT_NAME } from 'c/constants';
import BaseAttribute from 'c/baseAttribute';
import * as crypto from 'crypto';

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
});

export class ChartOptionMock {
  /**
   * @param {*} propertyName - The name of the LWC exposed attribute
   * @param {*} propertyValue - The value of the LWC exposed attribute
   * @param {*} expectedProperty - An object representing the property name and its value in a Chart's options
   * @example
   *  LWCC Attribute: <c-attribute propertyName="propertyValue">
   *  ChartJS configuration: Chart.options = { attribute: expectedProperty }
   */
  constructor(propertyName, propertyValue, expectedProperty) {
    this.propertyName = propertyName;
    this.propertyValue = propertyValue;
    this.expectedProperty = expectedProperty;
  }
}

export class TestAttribute extends BaseAttribute {
  constructor() {
    super();
    this.option = 'TestAttribute';
  }
}

/**
 * Check that the DOM element can be created
 */
function testDOMElementCreation(className) {
  test(`Create DOM Element for: ${className.prototype.constructor.name}`, () => {
    const element = createElement('x-test', { is: className });
    document.body.appendChild(element);

    expect(element).toBeDefined();
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
    item => {
      test(`${item.propertyName}`, async () => {
        const element = createElement('x-test', { is: constructor });
        document.body.appendChild(element);

        let detail;
        document.body.addEventListener(eventName, evt => {
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

export function testAttribute(constructor, listChartOptionMock, eventName) {
  testDOMElementCreation(constructor);
  testChartOptions(constructor, listChartOptionMock, eventName);
}
