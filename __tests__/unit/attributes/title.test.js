import Title from 'c/title';
import {
  ChartOptionMock,
  testAttributeProperties
} from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new ChartOptionMock('text', 'foo', { display: true, text: 'foo' })
];

describe('c-title', () => {
  testAttributeProperties(Title, TEST_DATA_PROPERTIES);
});
