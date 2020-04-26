import { LightningElement } from 'lwc';

export default class SampleApp extends LightningElement {
  filterTypes;

  renderedCallback() {
    if (!this.filterTypes) {
      this.initializeChartTypesFilter();
    }
  }

  initializeChartTypesFilter() {
    const items = [];
    this.template.querySelectorAll('c-chart').forEach(chart => {
      if (!items.includes(chart.type)) {
        items.push(chart.type);
      }
    });
    this.filterTypes = items;
  }

  displayAllCharts() {
    this.template.querySelectorAll('c-chart').forEach(item => {
      item.closest('c-sample-app-item').classList.remove('slds-hide');
    });
  }

  displayFilteredCharts(event) {
    this.template.querySelectorAll('c-chart').forEach(item => {
      const parent = item.closest('c-sample-app-item');
      if (!parent) return;
      if (item.type === event.target.innerText) {
        parent.classList.remove('slds-hide');
      } else {
        parent.classList.add('slds-hide');
      }
    });
  }
}
