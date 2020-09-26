import { LightningElement } from 'lwc';

export default class SampleAppItem extends LightningElement {
  isModalOpen = false;

  closeModal() {
    this.isModalOpen = false;
  }

  openModal() {
    this.isModalOpen = true;
  }
}
