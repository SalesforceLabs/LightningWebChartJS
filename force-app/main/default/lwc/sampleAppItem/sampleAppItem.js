import { LightningElement } from 'lwc';

export default class SampleAppItem extends LightningElement {
  toggleSourceCode() {
    this.template.querySelector('.code').classList.toggle('slds-hide');
  }
}
