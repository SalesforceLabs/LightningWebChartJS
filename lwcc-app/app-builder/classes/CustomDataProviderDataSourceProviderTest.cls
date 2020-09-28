@isTest
private class CustomDataProviderDataSourceProviderTest {
  @isTest
  static void testGetDefaultValue() {
    Test.startTest();
    final CustomDataProviderDataSourceProvider testSubject = new CustomDataProviderDataSourceProvider();
    final VisualEditor.DataRow defaultValue = testSubject.getDefaultValue();
    Test.stopTest();

    System.assertEquals(
      CustomDataProviderDataSourceProvider.DEFAULT_ROW,
      defaultValue,
      'CustomDataProviderDataSourceProvider default value must be ' +
      CustomDataProviderDataSourceProvider.DEFAULT_ROW
    );
  }

  @isTest
  static void testGetValues() {
    Test.startTest();
    final CustomDataProviderDataSourceProvider testSubject = new CustomDataProviderDataSourceProvider();
    final VisualEditor.DynamicPickListRows values = testSubject.getValues();
    Test.stopTest();

    System.assertNotEquals(
      null,
      values,
      'CustomDataProviderDataSourceProvider value must not be null'
    );
  }
}
