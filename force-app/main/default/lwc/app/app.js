import { LightningElement } from 'lwc';

export default class App extends LightningElement {

  barChartCurrentPercentage = 75;

  animationOnComplete = () => {
      console.log('Animation completed !');
  }

  animationOnProgress = (animation) => {
      this.barChartCurrentPercentage = animation.currentStep / animation.numSteps * 100;
  }

  getCustomTooltip = (tooltipModel) => {
    console.log(tooltipModel)
  }
}