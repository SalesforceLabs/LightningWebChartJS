import Title from 'c/title';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('display', true, { display: true }),
  ChartOptionMock('position', 'foo', { position: 'foo' }),
  ChartOptionMock('fontsize', 'foo', { fontSize: 'foo' }),
  ChartOptionMock('fontfamily', 'foo', { fontFamily: 'foo' }),
  ChartOptionMock('fontcolor', 'foo', { fontColor: 'foo' }),
  ChartOptionMock('fontstyle', 'foo', { fontStyle: 'foo' }),
  ChartOptionMock('padding', 'foo', { padding: 'foo' }),
  ChartOptionMock('lineheight', 'foo', { lineHeight: 'foo' }),
  ChartOptionMock('text', 'foo', { text: 'foo' })
];

describe('c-title', () => {
  testAttribute(Title, TEST_DATA_PROPERTIES);
});
