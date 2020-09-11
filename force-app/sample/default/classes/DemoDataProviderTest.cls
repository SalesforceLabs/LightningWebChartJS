@isTest
private class DemoDataProviderTest {
  @isTest
  static void testInit() {
    Test.startTest();
    final DemoDataProvider aDemoDataProvider = new DemoDataProvider();
    aDemoDataProvider.init(null);
    Test.stopTest();
    System.assertNotEquals(
      null,
      aDemoDataProvider,
      'aDemoDataProvider must be instanciated'
    );
  }

  @isTest
  static void testGetData() {
    Test.startTest();
    final DemoDataProvider aDemoDataProvider = new DemoDataProvider();
    final List<ChartDataProvider.ChartData> chartDatas = aDemoDataProvider.getData();
    Test.stopTest();
    System.assertEquals(
      DemoDataProvider.DEMO_LABEL,
      chartDatas[0].labels,
      'chartDatas.label must equals ' + DemoDataProvider.DEMO_LABEL
    );
    System.assertEquals(
      DemoDataProvider.DEMO_DATA,
      chartDatas[0].detail,
      'chartDatas.detail must equals ' + DemoDataProvider.DEMO_DATA
    );
    System.assertEquals(
      DemoDataProvider.DEMO_COLOR,
      chartDatas[0].bgColor,
      'chartDatas.bgColor must equals ' + DemoDataProvider.DEMO_COLOR
    );
  }
}
