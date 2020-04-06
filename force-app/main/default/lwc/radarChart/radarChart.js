import BaseChart from 'c/baseChart';
import { RADAR_CHART_TYPE } from 'c/constants';
/**
 * https://www.chartjs.org/docs/latest/charts/radar.html
 */
export default class RadarChart extends BaseChart {
    static type = RADAR_CHART_TYPE;
}
