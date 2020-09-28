import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import {
  ATTRIBUTE_DATA,
  DISCONNECT_EVENT_NAME,
  DATA_EVENT_NAME
} from 'c/constants';

import { sanitize } from 'c/utils';

export default class Dataset extends BaseAttribute {
  @api
  get labels() {
    return this._payload.labels;
  }
  set labels(v) {
    this._payload.labels = sanitize(v);
  }

  constructor() {
    super();
    this._details = {};
    this._payload.datasets = [];
    this._option = ATTRIBUTE_DATA; // data option type
  }

  // Add event listener on children data and disconnect event
  connectedCallback() {
    this.addEventListener(
      DATA_EVENT_NAME,
      this._listenerHandlers.handleDataChange
    );
    this.addEventListener(
      DISCONNECT_EVENT_NAME,
      this._listenerHandlers.handleDataDeletion
    );
  }

  // Remove event listener on children data and disconnect event
  disconnectedCallback() {
    this.removeEventListener(
      DATA_EVENT_NAME,
      this._listenerHandlers.handleDataChange
    );
    this.removeEventListener(
      DISCONNECT_EVENT_NAME,
      this._listenerHandlers.handleDataDeletion
    );
  }

  _listenerHandlers = {
    // Capture child data event and store it using the uuid of the child
    handleDataChange: (evt) => {
      evt.stopPropagation();
      this._details[evt.detail.payload.uuid] = evt.detail.payload;
      this._payload.datasets = Object.values(this._details);
    },

    // Capture child diqconnect event and remove child uuid from map
    handleDataDeletion: (evt) => {
      evt.stopPropagation();
      delete this._details[evt.detail.payload.uuid];
      this._payload.datasets = Object.values(this._details);
    }
  };
}
