/**
 * @author lwcc
 * @date 2020
 *
 * @description SOQL Data Provider class. It allow to get ChartData using an SOQL query
 */
public inherited sharing virtual class SOQLDataProvider extends ChartDataProvider {
  private static final String SOQL_SECURITY_ENFORCED = 'WITH SECURITY_ENFORCED';
  private static final String SOQL_LIMIT_STATEMENT = 'LIMIT';
  private static final String LABEL_ALIAS = 'label';
  private static final String VALUE_ALIAS = 'value';
  public static final String UNDEFINED_RECORDID = '\'xxxxxxxxxxxxxxx\'';

  public static final String QUERY_NULL_EXCEPTION = 'Query is null';
  public static final String QUERY_WITHOUT_LABEL_EXCEPTION = 'Query must contains "label" alias';
  public static final String QUERY_WITHOUT_VALUE_EXCEPTION = 'Query must contains "value" alias';
  public static final String QUERY_WITHOUT_LIMIT_EXCEPTION =
    'Query must contains "' +
    SOQL_LIMIT_STATEMENT +
    '" statement';
  public static final String QUERY_WITHOUT_SECURITY_ENFORCED_EXCEPTION =
    'Query must contains "' +
    SOQL_SECURITY_ENFORCED +
    '"';

  /*******************************************************************************************************
   * @description the SOQL query to execute
   */
  protected String query;

  /*******************************************************************************************************
   * @description Allow us to get the SOQL query
   * @param initParameter it is an SQOL query as a string. The SOQL need to have two alias : value and label
   * ex : SELECT StageName label, Amount value FROM Opportunity WITH SECURITY_ENFORCED WHERE Amount > 100000 LIMIT 10
   */
  public virtual override void init(final Object initParameter) {
    this.query = (String) initParameter;
  }

  /*******************************************************************************************************
   * @description return the data structured by the SOQL query
   * @return List<ChartData> the list of chart data needed to display the graph
   */
  public virtual override List<ChartDataProvider.ChartData> getData() {
    if (String.isBlank(this.query)) {
      throw new SOQLDataProviderException(QUERY_NULL_EXCEPTION);
    }

    if (!this.query.containsIgnoreCase(' ' + LABEL_ALIAS)) {
      throw new SOQLDataProviderException(QUERY_WITHOUT_LABEL_EXCEPTION);
    }

    if (!this.query.containsIgnoreCase(' ' + VALUE_ALIAS)) {
      throw new SOQLDataProviderException(QUERY_WITHOUT_VALUE_EXCEPTION);
    }

    if (!this.query.containsIgnoreCase(' ' + SOQL_LIMIT_STATEMENT + ' ')) {
      throw new SOQLDataProviderException(QUERY_WITHOUT_LIMIT_EXCEPTION);
    }

    if (!this.query.containsIgnoreCase(' ' + SOQL_SECURITY_ENFORCED)) {
      throw new SOQLDataProviderException(
        QUERY_WITHOUT_SECURITY_ENFORCED_EXCEPTION
      );
    }

    // When building the chart in the app builder and using :recordId in the query
    // The context is not set and :recordId is undefined
    // In this case we can't get not data but it is still possible to build the chart in the App Builder
    if (this.query.contains(UNDEFINED_RECORDID)) {
      return new List<ChartDataProvider.ChartData>();
    }

    final ChartDataProvider.ChartData aChartData = new ChartDataProvider.ChartData();
    aChartData.labels = new List<String>();
    aChartData.detail = new List<Object>();

    for (AggregateResult aResult : Database.query(this.query)) {
      String label = '' + aResult.get(LABEL_ALIAS);
      if (
        aResult.get(LABEL_ALIAS) != null &&
        aResult.get(LABEL_ALIAS) instanceof Date
      ) {
        label = ((Date) aResult.get(LABEL_ALIAS)).format();
      }

      aChartData.labels.add(label);
      aChartData.detail.add(aResult.get(VALUE_ALIAS));
    }

    return new List<ChartDataProvider.ChartData>{ aChartData };
  }

  public class SOQLDataProviderException extends Exception {
  }
}
