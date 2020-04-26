/**
 * @author lwcc
 * @date 2020
 *
 * @description Chart Data Provider abstract class. It define the type the chartBuilder component can use to get data
 */
public inherited sharing abstract class ChartDataProvider {
  /*******************************************************************************************************
   * @description serve as an additional constructor when the classes are instanciated with type forName
   * @param initParameter any data structure the subclass requires
   */
  public abstract void init(final Object initParameter);

  /*******************************************************************************************************
   * @description allow to get the data from the real sub class
   * @return List<ChartData> the list of chart data needed to display the graph
   */
  public abstract List<ChartData> getData();

  /**
   * @description Chart Data Wrapper class
   */
  public class ChartData {
    /*******************************************************************************************************
     * @description contains the label for this data
     */
    @AuraEnabled
    public String label;

    /*******************************************************************************************************
     * @description contains the values for this data
     */
    @AuraEnabled
    public List<Object> detail;

    /*******************************************************************************************************
     * @description color to use to display the valueSet (if empty uses the default slds palette). RGBA, RBB, or hex strings
     */
    @AuraEnabled
    public String bgColor;
  }
}
