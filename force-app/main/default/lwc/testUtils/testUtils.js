import { createElement } from 'lwc';
import { OPTION_EVENT_NAME, DISCONNECT_EVENT_NAME } from 'c/constants';

export function checkInsertElement(constructor) {
  test('Inserts correctly an element', () => {
    // Create element
    const element = createElement('x-test', {
      is: constructor
    });
    document.body.appendChild(element);

    // Verify displayed greeting
    const queriedElement = element.shadowRoot.querySelector('x-test');
    expect(queriedElement).toBeDefined();
  });
}

export function checkSingleReactivity(
  constructor,
  baseAttributeName,
  property,
  value,
  expected
) {
  test(`Assert reactivity for ${property}`, () => {
    const element = createElement('x-test', { is: constructor });
    document.body.appendChild(element);

    let detail;
    document.body.addEventListener(OPTION_EVENT_NAME, evt => {
      detail = evt.detail;
    });

    element[property] = value;

    return Promise.resolve().then(() => {
      // Test public property (getter) - https://github.com/trailheadapps/lwc-recipes/blob/master/force-app/main/default/lwc/compositionWithAppBuilder/__tests__/compositionWithAppBuilder.test.js#L17
      expect(element[property]).toBe(value);

      // Test reactivity
      expect(typeof detail).toBe('object');
      expect(detail.option).toEqual(baseAttributeName);
      expect(detail.payload).toEqual(expected);
    });
  });
}

export function checkReactivity(constructor, testData) {
  testData.forEach(item => {
    checkSingleReactivity(
      constructor,
      item.baseAttributeName,
      item.property,
      item.value,
      item.expected
    );
  });
}

export function checkDisconnectAttribute(constructor, baseAttributeName) {
  test(`Disconnect ${constructor}`, () => {
    const element = createElement('x-test', { is: constructor });
    document.body.appendChild(element);

    let detail;
    document.body.addEventListener(DISCONNECT_EVENT_NAME, evt => {
      detail = evt.detail;
    });

    document.body.removeChild(element);

    return Promise.resolve().then(() => {
      expect(typeof detail).toBe('object');
      expect(detail.option).toBe(baseAttributeName);
      expect(typeof detail.payload).toBe('object');

      // TODO: To test that payload is filled with attributes?
    });
  });
}
