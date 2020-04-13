import Title from 'c/title';
import * as Handler   from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('text', 'foo', { display: true, text: 'foo' })
];

describe('c-title', () => {
  Handler.testAttribute(Title, TEST_DATA_PROPERTIES);
});
