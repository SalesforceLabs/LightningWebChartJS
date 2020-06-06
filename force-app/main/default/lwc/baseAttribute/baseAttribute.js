import { LightningElement } from 'lwc';
import { OPTION_EVENT_NAME, DISCONNECT_EVENT_NAME } from 'c/constants';
import ReactivityManager from 'c/reactivityManager';

export default class BaseAttribute extends LightningElement {
  constructor() {
    super();
    this._eventName = OPTION_EVENT_NAME; // option event
    this._reactivityManager = new ReactivityManager(); // store reactivity manager in case need to throttle manually
    this._reactivityManager.registerJob(() => this.dispatchOption()); // register dispatchOption
    this._payload = this._reactivityManager.getReactivityProxy(); // use reactivity manager proxy
  }

  // Attach parent to handle disconnectedCallback gracefully
  connectedCallback() {
    this._parent = this.template.host.parentNode;
  }

  // disconnectedCallback is called after having remove template
  // need to call the disconnect from on the parent
  disconnectedCallback() {
    this._parent.dispatchEvent(
      new CustomEvent(DISCONNECT_EVENT_NAME, {
        bubbles: true,
        detail: {
          option: this._option,
          payload: this._payload
        }
      })
    );
  }

  // dispatch the _eventName event to the parent
  // Component catching the event will aggregate the detail
  dispatchOption() {
    this.dispatchEvent(
      new CustomEvent(this._eventName, {
        bubbles: true,
        detail: {
          option: this._option,
          payload: this._payload
        }
      })
    );
  }
}
