import { createElement } from 'lwc';
import Title from 'c/title';

describe('c-base-attribute', () => {
  const element = createElement('x-chart', {
    is: Title
  });
  document.body.appendChild(element);

  test('disconnectedCallback', async () => {
    document.body.removeChild(element);
    await expect(element).not.toBe(null);
  });
});
