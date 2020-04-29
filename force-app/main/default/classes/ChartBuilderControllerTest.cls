@isTest
private class ChartBuilderControllerTest {
  static final String OPPORTUNITY_STAGE_NAME = 'Prospecting';
  static final Decimal OPPORTUNITY_AMOUNT = 20;
  static final String ASSERT_FALSE_MESSAGE = 'Exception thrown should prevent code to reach this point';

  @TestSetup
  static void makeData() {
    insert new Opportunity(
      CloseDate = date.today().addMonths(2),
      Name = 'test',
      StageName = OPPORTUNITY_STAGE_NAME,
      Amount = OPPORTUNITY_AMOUNT
    );
  }

  @isTest
  static void testControllerWithSOQL() {
    Test.startTest();
    final List<ChartDataProvider.ChartData> chartDatas = ChartBuilderController.getChartData(
      SOQLDataProvider.class.getName(),
      'SELECT StageName label, SUM(Amount) value FROM Opportunity WHERE IsClosed = false WITH SECURITY_ENFORCED GROUP BY StageName LIMIT 10'
    );
    Test.stopTest();
    System.assertEquals(
      OPPORTUNITY_STAGE_NAME,
      chartDatas[0].label,
      'chartDatas.label must equals ' + OPPORTUNITY_STAGE_NAME
    );
    System.assertEquals(
      OPPORTUNITY_AMOUNT,
      (Decimal) chartDatas[0].detail[0],
      'chartDatas.detail must equals ' + OPPORTUNITY_AMOUNT
    );
    System.assertEquals(
      null,
      chartDatas[0].bgColor,
      'chartDatas.bgColor must be null'
    );
  }

  @isTest
  static void testControllerExceptionWithSOQL() {
    Test.startTest();
    try {
      final List<ChartDataProvider.ChartData> chartDatas = ChartBuilderController.getChartData(
        SOQLDataProvider.class.getName(),
        null
      );

      System.Assert(false, ASSERT_FALSE_MESSAGE);
    } catch (AuraHandledException ahex) {
      Test.stopTest();
      System.assertEquals(
        SOQLDataProvider.QUERY_NULL_EXCEPTION,
        ahex.getMessage(),
        'Exception message should be ' + SOQLDataProvider.QUERY_NULL_EXCEPTION
      );
    }
  }

  @isTest
  static void testControllerWithCustomDataProvider() {
    Test.startTest();
    final List<ChartDataProvider.ChartData> chartDatas = ChartBuilderController.getChartData(
      ChartDataProviderTest.ChartDataProviderMock.class.getName(),
      null
    );
    Test.stopTest();
    System.assertEquals(
      ChartDataProviderTest.TEST_LABEL,
      chartDatas[0].label,
      'chartDatas.label must equals ' + ChartDataProviderTest.TEST_LABEL
    );
    System.assertEquals(
      ChartDataProviderTest.TEST_DATA,
      chartDatas[0].detail,
      'chartDatas.detail must equals ' + ChartDataProviderTest.TEST_DATA
    );
    System.assertEquals(
      ChartDataProviderTest.TEST_COLOR,
      chartDatas[0].bgColor,
      'chartDatas.bgColor must equals ' + ChartDataProviderTest.TEST_COLOR
    );
  }

  @isTest
  static void testControllerExceptionWithFakeType() {
    Test.startTest();
    try {
      final List<ChartDataProvider.ChartData> chartDatas = ChartBuilderController.getChartData(
        'ThisClassDoesNotExistBecauseItsNameIsMoreThanFortyCharacters',
        null
      );
      System.Assert(false, ASSERT_FALSE_MESSAGE);
    } catch (AuraHandledException ahex) {
      Test.stopTest();
      System.assertNotEquals(null, ahex, 'Exception should not be null');
    }
  }
}
