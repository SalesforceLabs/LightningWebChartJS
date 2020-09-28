/**
 * @author lwcc
 * @date 2020
 *
 * @description Demo Chart Data Provider class. Used to get demo values for chart
 */
public inherited sharing class DemoDataProvider extends ChartDataProvider {
  /*******************************************************************************************************
   * @description Not used for this class
   * @param initParameter Object
   */
  public override void init(final Object initParameter) {
    // TODO
  }

  /*******************************************************************************************************
   * @description return the data
   * @return List<ChartData> the list of chart data needed to display the graph
   */
  public override List<ChartDataProvider.ChartData> getData() {
    final List<ChartDataProvider.ChartData> chartDatas = new List<ChartDataProvider.ChartData>();
    ChartDataProvider.ChartData aChartData = new ChartDataProvider.ChartData();
    aChartData.labels = DEMO_LABEL;
    aChartData.detail = DEMO_DATA;
    aChartData.bgColor = DEMO_COLOR;
    chartDatas.add(aChartData);
    return chartDatas;
  }

  public static final List<String> DEMO_LABEL = new List<String>{ '' };
  public static final List<Decimal> DEMO_DATA = new List<Decimal>{
    10,
    20,
    15,
    5,
    25,
    30
  };
  public static final String DEMO_COLOR = 'rgba(0,0,0,0.5);';
}
