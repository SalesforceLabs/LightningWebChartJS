// hello.test.js
import Title from 'c/title';
import { ATTRIBUTE_TITLE } from 'c/constants';
import {
  checkInsertElement,
  checkReactivity,
  checkDisconnectAttribute
} from 'c/testUtils';

const TEST_DATA_REACTIVITY = [
  {
    baseAttributeName: ATTRIBUTE_TITLE,
    property: 'text',
    value: 'foo',
    expected: { display: true, text: 'foo' }
  }
];

describe('c-title', () => {
  /*
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
          document.body.removeChild(document.body.firstChild);
        }
      });
      */

  checkInsertElement(Title);
  checkReactivity(Title, TEST_DATA_REACTIVITY);
  checkDisconnectAttribute(Title, ATTRIBUTE_TITLE);
});
