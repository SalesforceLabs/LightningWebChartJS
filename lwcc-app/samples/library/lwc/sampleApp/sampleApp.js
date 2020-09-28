import { LightningElement } from 'lwc';

export default class SampleApp extends LightningElement {
  filterTypes = [];

  renderedCallback() {
    if (this.filterTypes.length === 0) {
      this.filterTypes = [
        ...new Set(
          [...this.template.querySelectorAll('c-chart')].map(
            (chart) => chart.type
          )
        )
      ];
    }
  }

  displayAllCharts() {
    this.template.querySelectorAll('c-chart').forEach((item) => {
      item.closest('c-sample-app-item').classList.remove('slds-hide');
    });
  }

  displayFilteredCharts(event) {
    this.template.querySelectorAll('c-chart').forEach((item) => {
      const parent = item.closest('c-sample-app-item');
      if (!parent) return;
      if (item.type.toUpperCase() === event.target.innerText) {
        parent.classList.remove('slds-hide');
      } else {
        parent.classList.add('slds-hide');
      }
    });
  }
}
