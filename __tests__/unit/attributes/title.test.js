import Title from 'c/title';
import {
  AttributePropertyTest,
  testAttributeProperties
} from '../../__utils__/testAttributeUtils.js';

const TEST_DATA_PROPERTIES = [
  new AttributePropertyTest('text', 'foo', { display: true, text: 'foo' })
];

describe('c-title', () => {
  testAttributeProperties(Title, TEST_DATA_PROPERTIES);
});
