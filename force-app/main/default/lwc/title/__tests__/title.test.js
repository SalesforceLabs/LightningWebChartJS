// hello.test.js
import { createElement } from 'lwc';
import Title from 'c/title';
import { OPTION_EVENT_NAME, ATTRIBUTE_TITLE } from 'c/constants';

function checkReactivity(Ctor, property, value, expected) {
  test(`Assert reactivity for ${property}`, () => {
    const element = createElement('x-test', { is: Ctor });
    document.body.appendChild(element);

    let detail;
    element.addEventListener(OPTION_EVENT_NAME, evt => {
      detail = evt.detail;
    });

    element[property] = value;

    return Promise.resolve().then(() => {
      expect(typeof detail).toBe('object');
      expect(detail.option).toEqual(ATTRIBUTE_TITLE);
      expect(detail.payload).toEqual(expected);
    });
  });
}

describe('c-title', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  test('Inserts correctly an element', () => {
    // Create element
    const element = createElement('c-title', {
      is: Title
    });
    document.body.appendChild(element);

    // Verify displayed greeting
    const titleElement = element.shadowRoot.querySelector('c-title');
    expect(titleElement).toBeDefined();
  });

  checkReactivity(Title, 'text', 'foo', {
    display: true,
    text: 'foo'
  });
});
