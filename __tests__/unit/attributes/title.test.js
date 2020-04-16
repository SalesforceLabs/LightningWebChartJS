import Title from 'c/title';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('text', 'foo', { display: true, text: 'foo' })
];

describe('c-title', () => {
  testAttribute(Title, TEST_DATA_PROPERTIES);
});
