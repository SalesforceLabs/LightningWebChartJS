import { createElement } from 'lwc';
import DataSet from 'c/dataset';
import Data from 'c/data';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('labels', 'foo', { labels: 'foo' })
];

describe('c-dataset attribut', () => {
  testAttribute(DataSet, TEST_DATA_PROPERTIES);
});

describe('c-dataset lifecycle hook', () => {
  let element;

  beforeEach(() => {
    element = createElement('x-dataset', {
      is: DataSet
    });
    document.body.appendChild(element);
  });

  test('disconnectedCallback', async () => {
    const element = createElement('x-dataset', {
      is: DataSet
    });
    document.body.appendChild(element);
    document.body.removeChild(element);
    await expect(element).not.toBe(null);
  });

  test('disconnectedCallback', async () => {
    const data = createElement('x-data', {
      is: Data
    });
    element.appendChild(data);
    element.removeChild(data);
    await expect(element).not.toBe(null);
  });
});
