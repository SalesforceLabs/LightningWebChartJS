import { LightningElement } from 'lwc';
import { OPTION_EVENT_NAME, DISCONNECT_EVENT_NAME } from 'c/constants';
import MicroTaskHandler from 'c/microTaskHandler';
// eslint-disable-next-line no-unused-vars
import { v4 } from 'c/uuid';

export default class BaseAttribute extends LightningElement {
  constructor() {
    super();
    this._eventName = OPTION_EVENT_NAME;
    this._mt = new MicroTaskHandler();
    this._mt.registerCallback(() => this.dispatchOption());
    this._payload = {};
  }

  connectedCallback() {
    this.parent = this.parentNode;
  }

  disconnectedCallback() {
    if (this.parent) {
      this.parent.dispatchEvent(
        new CustomEvent(DISCONNECT_EVENT_NAME, {
          bubbles: true,
          detail: {
            option: this._option,
            payload: this._payload
          }
        })
      );
    }
  }

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

  static sanitize(attribut) {
    let value = attribut;
    if (value) {
      try {
        value = JSON.parse(value.replace(/\\/g, ''));
      } catch (e) {
        /* Silently */
      }
    }
    return value;
  }
}
