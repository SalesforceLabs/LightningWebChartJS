import Legend from 'c/legend';
import {
  AttributePropertyTest,
  testAttributeProperties
} from '../../__utils__/testAttributeUtils.js';

const TEST_DATA_PROPERTIES = [
  new AttributePropertyTest('display', true, { display: true }),
  new AttributePropertyTest('position', 'top', { position: 'top' }),
  new AttributePropertyTest('labelBoxwidth', '35px', {
    labels: { boxWidth: '35px' }
  })
];

describe('c-legend', () => {
  testAttributeProperties(Legend, TEST_DATA_PROPERTIES);
});
