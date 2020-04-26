@isTest
private class SOQLDataProviderTest {
  @isTest
  static void testInit() {
    Test.startTest();
    final SOQLDataProvider aSOQLDataProvider = new SOQLDataProvider();
    aSOQLDataProvider.init(null);
    Test.stopTest();
    System.assertNotEquals(
      null,
      aSOQLDataProvider,
      'aSOQLDataProvider must be instanciated'
    );
  }

  @isTest
  static void testGetDataWithoutQuery() {
    Test.startTest();
    final SOQLDataProvider aSOQLDataProvider = new SOQLDataProvider();
    aSOQLDataProvider.init(null);
    try {
      aSOQLDataProvider.getData();
      System.assert(false);
    } catch (SOQLDataProvider.SOQLDataProviderException sdpex) {
      Test.stopTest();
      System.assertEquals(
        SOQLDataProvider.QUERY_NULL_EXCEPTION,
        sdpex.getMessage(),
        'Exception message should be ' + SOQLDataProvider.QUERY_NULL_EXCEPTION
      );
    }
  }

  @isTest
  static void testGetDataWithoutLabel() {
    Test.startTest();
    final SOQLDataProvider aSOQLDataProvider = new SOQLDataProvider();
    aSOQLDataProvider.init(
      'SELECT StageName, SUM(Amount) value FROM Opportunity WHERE IsClosed = false WITH SECURITY_ENFORCED GROUP BY StageName LIMIT 10 '
    );
    try {
      aSOQLDataProvider.getData();
      System.assert(false);
    } catch (SOQLDataProvider.SOQLDataProviderException sdpex) {
      Test.stopTest();
      System.assertEquals(
        SOQLDataProvider.QUERY_WITHOUT_LABEL_EXCEPTION,
        sdpex.getMessage(),
        'Exception message should be ' +
        SOQLDataProvider.QUERY_WITHOUT_LABEL_EXCEPTION
      );
    }
  }

  @isTest
  static void testGetDataWithoutValue() {
    Test.startTest();
    final SOQLDataProvider aSOQLDataProvider = new SOQLDataProvider();
    aSOQLDataProvider.init(
      'SELECT StageName label, SUM(Amount) FROM Opportunity WHERE IsClosed = false WITH SECURITY_ENFORCED GROUP BY StageName LIMIT 10 '
    );
    try {
      aSOQLDataProvider.getData();
      System.assert(false);
    } catch (SOQLDataProvider.SOQLDataProviderException sdpex) {
      Test.stopTest();
      System.assertEquals(
        SOQLDataProvider.QUERY_WITHOUT_VALUE_EXCEPTION,
        sdpex.getMessage(),
        'Exception message should be ' +
        SOQLDataProvider.QUERY_WITHOUT_VALUE_EXCEPTION
      );
    }
  }

  @isTest
  static void testGetDataWithoutLimitClause() {
    Test.startTest();
    final SOQLDataProvider aSOQLDataProvider = new SOQLDataProvider();
    aSOQLDataProvider.init(
      'SELECT StageName label, SUM(Amount) value FROM Opportunity WHERE IsClosed = false WITH SECURITY_ENFORCED GROUP BY StageName'
    );
    try {
      aSOQLDataProvider.getData();
      System.assert(false);
    } catch (SOQLDataProvider.SOQLDataProviderException sdpex) {
      Test.stopTest();
      System.assertEquals(
        SOQLDataProvider.QUERY_WITHOUT_LIMIT_EXCEPTION,
        sdpex.getMessage(),
        'Exception message should be ' +
        SOQLDataProvider.QUERY_WITHOUT_LIMIT_EXCEPTION
      );
    }
  }

  @isTest
  static void testGetDataWithoutSecurityEnforcedClause() {
    Test.startTest();
    final SOQLDataProvider aSOQLDataProvider = new SOQLDataProvider();
    aSOQLDataProvider.init(
      'SELECT StageName label, SUM(Amount) value FROM Opportunity WHERE IsClosed = false GROUP BY StageName LIMIT 10 '
    );
    try {
      aSOQLDataProvider.getData();
      System.assert(false);
    } catch (SOQLDataProvider.SOQLDataProviderException sdpex) {
      Test.stopTest();
      System.assertEquals(
        SOQLDataProvider.QUERY_WITHOUT_SECURITY_ENFORCED_EXCEPTION,
        sdpex.getMessage(),
        'Exception message should be ' +
        SOQLDataProvider.QUERY_WITHOUT_SECURITY_ENFORCED_EXCEPTION
      );
    }
  }

  @isTest
  static void testGetData() {
    insert new Opportunity(
      CloseDate = date.today().addMonths(2),
      Name = 'test',
      StageName = OPPORTUNITY_STAGE_NAME,
      Amount = OPPORTUNITY_AMOUNT
    );
    Test.startTest();
    final SOQLDataProvider aSOQLDataProvider = new SOQLDataProvider();
    aSOQLDataProvider.init(
      'SELECT StageName label, SUM(Amount) value FROM Opportunity WHERE IsClosed = false WITH SECURITY_ENFORCED GROUP BY StageName LIMIT 10'
    );
    final List<ChartDataProvider.ChartData> chartDatas = aSOQLDataProvider.getData();
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

  public static final String OPPORTUNITY_STAGE_NAME = 'Prospecting';
  public static final Decimal OPPORTUNITY_AMOUNT = 20;
}
