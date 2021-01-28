@isTest
private class SOQLDataProviderTest {
  static final String OPPORTUNITY_STAGE_NAME = Opportunity.StageName.getDescribe()
      .getPicklistValues()[0]
    .getValue();
  static final Decimal OPPORTUNITY_AMOUNT = 20;
  static final String ASSERT_FALSE_MESSAGE = 'Exception thrown should prevent code to reach this point';

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
      System.Assert(false, ASSERT_FALSE_MESSAGE);
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
      System.Assert(false, ASSERT_FALSE_MESSAGE);
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
      System.Assert(false, ASSERT_FALSE_MESSAGE);
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
      System.Assert(false, ASSERT_FALSE_MESSAGE);
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
      System.Assert(false, ASSERT_FALSE_MESSAGE);
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
  static void testAppBuilderContext() {
    Test.startTest();
    final SOQLDataProvider aSOQLDataProvider = new SOQLDataProvider();
    aSOQLDataProvider.init(
      'SELECT StageName label, SUM(Amount) value FROM Opportunity WHERE IsClosed = false AND AccountId = ' +
      SOQLDataProvider.UNDEFINED_RECORDID +
      ' WITH SECURITY_ENFORCED GROUP BY StageName LIMIT 10'
    );
    final List<ChartDataProvider.ChartData> chartDatas = aSOQLDataProvider.getData();
    Test.stopTest();
    System.assertEquals(0, chartDatas.size(), 'chartDatas must be empty');
  }

  @isTest
  static void testGetDataWithStringLabel() {
    Opportunity op = new Opportunity(
      CloseDate = Date.today().addMonths(2),
      Name = 'test',
      StageName = OPPORTUNITY_STAGE_NAME,
      Amount = OPPORTUNITY_AMOUNT
    );
    insert op;
    op = [
      SELECT Amount, IsClosed, StageName
      FROM Opportunity
      WHERE Id = :op.Id
    ];

    Test.startTest();
    final SOQLDataProvider aSOQLDataProvider = new SOQLDataProvider();
    aSOQLDataProvider.init(
      'SELECT StageName label, SUM(Amount) value FROM Opportunity WHERE IsClosed = ' +
      op.IsClosed +
      ' WITH SECURITY_ENFORCED GROUP BY StageName LIMIT 10'
    );
    final List<ChartDataProvider.ChartData> chartDatas = aSOQLDataProvider.getData();
    Test.stopTest();
    System.assertEquals(
      new List<String>{ op.StageName },
      chartDatas[0].labels,
      'chartDatas.label must equals ' + op.StageName
    );
    System.assertEquals(
      op.Amount,
      (Decimal) chartDatas[0].detail[0],
      'chartDatas.detail must equals ' + op.Amount
    );
    System.assertEquals(
      null,
      chartDatas[0].bgColor,
      'chartDatas.bgColor must be null'
    );
  }

  @isTest
  static void testGetDataWithDateLabel() {
    Opportunity op = new Opportunity(
      CloseDate = Date.today().addMonths(2),
      Name = 'test',
      StageName = OPPORTUNITY_STAGE_NAME,
      Amount = OPPORTUNITY_AMOUNT
    );
    insert op;
    op = [
      SELECT Amount, CloseDate, IsClosed
      FROM Opportunity
      WHERE Id = :op.Id
    ];

    Test.startTest();
    final SOQLDataProvider aSOQLDataProvider = new SOQLDataProvider();
    aSOQLDataProvider.init(
      'SELECT CloseDate label, SUM(Amount) value FROM Opportunity WHERE IsClosed = ' +
      op.IsClosed +
      ' WITH SECURITY_ENFORCED GROUP BY CloseDate LIMIT 10'
    );
    final List<ChartDataProvider.ChartData> chartDatas = aSOQLDataProvider.getData();
    Test.stopTest();
    System.assertEquals(
      new List<String>{ op.CloseDate.format() },
      chartDatas[0].labels,
      'chartDatas.label must equals ' + op.CloseDate.format()
    );
    System.assertEquals(
      op.Amount,
      (Decimal) chartDatas[0].detail[0],
      'chartDatas.detail must equals ' + op.Amount
    );
    System.assertEquals(
      null,
      chartDatas[0].bgColor,
      'chartDatas.bgColor must be null'
    );
  }

  @isTest
  static void testGetDataWithBooleanLabel() {
    Opportunity op = new Opportunity(
      CloseDate = Date.today().addMonths(2),
      Name = 'test',
      StageName = OPPORTUNITY_STAGE_NAME,
      Amount = OPPORTUNITY_AMOUNT
    );
    insert op;
    op = [SELECT Amount, IsClosed FROM Opportunity WHERE Id = :op.Id];

    Test.startTest();
    final SOQLDataProvider aSOQLDataProvider = new SOQLDataProvider();
    aSOQLDataProvider.init(
      'SELECT IsClosed label, SUM(Amount) value FROM Opportunity WITH SECURITY_ENFORCED GROUP BY IsClosed LIMIT 10'
    );
    final List<ChartDataProvider.ChartData> chartDatas = aSOQLDataProvider.getData();
    Test.stopTest();
    System.assertEquals(
      new List<String>{ String.valueOf(op.IsClosed) },
      chartDatas[0].labels,
      'chartDatas.label must equals ' + op.IsClosed
    );
    System.assertEquals(
      op.Amount,
      (Decimal) chartDatas[0].detail[0],
      'chartDatas.detail must equals ' + op.Amount
    );
    System.assertEquals(
      null,
      chartDatas[0].bgColor,
      'chartDatas.bgColor must be null'
    );
  }
}
