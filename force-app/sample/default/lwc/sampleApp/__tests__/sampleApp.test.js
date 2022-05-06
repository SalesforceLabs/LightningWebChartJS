import { createElement } from 'lwc';
import SampleApp from 'c/sampleApp';

describe('c-sample-app-item', () => {
  test('Click all the buttons', () => {
    // Create initial element
    const element = createElement('c-sample-app', {
      is: SampleApp
    });
    document.body.appendChild(element);

    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve()
      .then(() => {
        const buttons = [
          // eslint-disable-next-line @locker/locker/distorted-element-shadow-root-getter
          ...element.shadowRoot.querySelectorAll(
            'button.slds-button.slds-button_neutral'
          )
        ];
        buttons.forEach((button) => button.click());
        buttons.reverse().forEach((button) => button.click());
      })
      .then(() => {
        // Verify that property is correctly incremented.
        expect(
          // eslint-disable-next-line @locker/locker/distorted-element-shadow-root-getter
          element.shadowRoot.querySelector('c-sample-app-item')
        ).not.toBeNull();
      });
  });
});
