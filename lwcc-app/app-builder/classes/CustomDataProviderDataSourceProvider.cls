/**
 * @author lwcc
 * @date 2020
 *
 * @description SOQL Data Provider class. It allow to get ChartData using an SOQL query
 */
public inherited sharing class CustomDataProviderDataSourceProvider extends VisualEditor.DynamicPickList {
  private static final Set<String> FRAMEWORK_CLASSES = new Set<String>{
    SOQLDataProvider.class.getName(),
    ChartDataProviderTest.class.getName()
  };

  public static final VisualEditor.DataRow DEFAULT_ROW = new VisualEditor.DataRow(
    '--None--',
    ''
  );

  /*******************************************************************************************************
   * @description Returns the picklist item that is set as the default value for the picklist.
   * @return VisualEditor.DataRow emptied
   */
  public override VisualEditor.DataRow getDefaultValue() {
    return DEFAULT_ROW;
  }

  /*******************************************************************************************************
   * @description Returns the list of picklist item values.
   * @return VisualEditor.DynamicPickListRows The list of available classes
   */
  public override VisualEditor.DynamicPickListRows getValues() {
    final String abstractClassName = ChartDataProvider.class.getName();
    final String searchQuery = '"extends ' + abstractClassName + '"';
    final List<List<SObject>> searchList = [
      FIND :searchQuery
      IN ALL FIELDS
      RETURNING ApexClass(Name)
    ];
    final VisualEditor.DynamicPickListRows availableApexClasses = new VisualEditor.DynamicPickListRows();
    availableApexClasses.addRow(DEFAULT_ROW);
    final List<ApexClass> apexClassesList = searchList[0];
    for (ApexClass ac : apexClassesList) {
      if (!FRAMEWORK_CLASSES.contains(ac.Name)) {
        availableApexClasses.addRow(new VisualEditor.DataRow(ac.Name, ac.Name));
      }
    }
    return availableApexClasses;
  }
}
