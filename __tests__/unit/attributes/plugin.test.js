import Plugin from 'c/Plugin';
import { OPTION_EVENT_NAME } from 'c/constants';
import { createElement } from 'lwc';

const content = { value: 'test' };
const TEST_DATA_PROPERTIES = [
  ChartOptionMock('name', 'test', { test: {} }),
  ChartOptionMock('content', {}, { test: {} })
];

describe('c-plugin', () => {
  test(`content set and name property no set`, () => {
    const element = createElement('x-test', { is: Plugin });
    document.body.appendChild(element);
    element.content;

    expect(element.content).toEqual(element.content);
  });

  test(`name set`, async () => {
    const element = createElement('x-test', { is: Plugin });
    document.body.appendChild(element);
    let detail;
    document.body.addEventListener(OPTION_EVENT_NAME, evt => {
      detail = evt.detail;
      expect(detail.payload).toEqual({ test: {} });
    });
    element.name = 'test';
  });

  test(`content set and name property set`, async () => {
    const element = createElement('x-test', { is: Plugin });
    document.body.appendChild(element);
    let detail;
    document.body.addEventListener(OPTION_EVENT_NAME, evt => {
      detail = evt.detail;
      expect(detail.payload).toEqual({ test: content });
    });
    element.content = content;
  });
});
