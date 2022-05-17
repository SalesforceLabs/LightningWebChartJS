import { createElement } from 'lwc';
import SampleAppItem from 'c/sampleAppItem';

describe('c-sample-app-item', () => {
  test('open modal and close modal on button click', () => {
    // Create initial element
    const element = createElement('c-sample-app-item', {
      is: SampleAppItem
    });
    document.body.appendChild(element);

    // eslint-disable-next-line @locker/locker/distorted-element-shadow-root-getter
    const openModal = element.shadowRoot.querySelector(
      'p.slds-card__footer-action.slds-text-link'
    );
    openModal.click();
    // Return a promise to wait for any asynchronous DOM updates. Jest
    // will automatically wait for the Promise chain to complete before
    // ending the test and fail the test if the promise rejects.
    return Promise.resolve()
      .then(() => {
        // Verify that property is correctly incremented.
        // eslint-disable-next-line @locker/locker/distorted-element-shadow-root-getter
        expect(element.shadowRoot.querySelector('section')).not.toBeNull();

        // eslint-disable-next-line @locker/locker/distorted-element-shadow-root-getter
        const closeModal = element.shadowRoot.querySelector(
          'button.slds-button.slds-button_neutral'
        );
        closeModal.click();
      })
      .then(() => {
        // Verify that property is correctly incremented.
        // eslint-disable-next-line @locker/locker/distorted-element-shadow-root-getter
        expect(element.shadowRoot.querySelector('section')).toBeNull();
      });
  });
});
