# Lightning Web Chart.js Component

The power of Chart.js brought to Salesforce !

<div align="center">
  <img src="{{ "/assets/images/lwcc_logo.png" | relative_url }}" alt="LWCC Logo" width="250" />
</div>

TODO: include presentation video

## What is LWCC?

---

LWCC is a suit of Salesforce Lightning Web Components created to bring you all the power and flexibility of Chart.js into the Salesforce platform. Designed for admins and developers, LWCC allows everybody to create highly customizable charts to visualize your data.

<div class="slds-grid slds-gutters">
  <!-- Github card -->
  <div class="slds-col slds-size_1-of-3">
    <div class="slds-card text-center">
      <div class="card-body">
        <h4 class="card-title">Open source</h4>
        <p class="card-text">The source code is available in GitHub and contributions are welcome!</p>
        <footer class="slds-card__footer">
          <a class="slds-card__footer-action" href="{{ site.github.repository_url }}">Github
          </a>
        </footer>
      </div>
    </div>
  </div>
  <!-- Appexchange card -->
  <div class="slds-col slds-size_1-of-3">
    <div class="slds-card text-center">
      <div class="card-body">
        <h4 class="card-title">Salesforce Platform</h4>
        <p class="card-text">Designed to run on the Salesforce Platform*, using the Lightning technology</p>
        <footer class="slds-card__footer">
          <a class="slds-card__footer-action" href="https://appexchange.salesforce.com/">AppExchange
          </a>
        </footer>
      </div>
    </div>
  </div>
  <!-- Chartjs card -->
  <div class="slds-col slds-size_1-of-3">
    <div class="slds-card text-center">
      <div class="card-body">
        <h4 class="card-title">Chart.js</h4>
        <p class="card-text">The suit has been built using Chart.js, a flexible JavaScript charting library</p>
        <footer class="slds-card__footer">
          <a class="slds-card__footer-action" href="https://www.chartjs.org/">Chart.js
          </a>
        </footer>
      </div>
    </div>
  </div>
</div>

<br>
<p><small>*If you want to experience Lightning Web Components on any platform, please visit https://lwc.dev, and try out the Lightning Web Components sample application LWC Recipes OSS.</small></p>

## Installation

---

### App Exchange

LWCC is available in AppExchange to be installed directly into your Salesforce org.

TODO: Link to the AppExchange

### SFDX

Alternatively, you integrate the LWCC project hosted in GitHub directly into your Salesforce Project

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

- Enable Dev Hub in your Trailhead Playground
- Install Salesforce CLI
- Install Visual Studio Code
- Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

2. If you haven't already done so, authenticate with your hub org and provide it with an alias (**myhuborg** in the command below):

```
sfdx force:auth:web:login -d -a myhuborg
```

3. Clone the lwcc repository:

```
git clone https://github.com/scolladon/lwcc
cd lwcc
```

4. Create a scratch org and provide it with an alias (**lwcc** in the command below):

```
sfdx force:org:create -s -f config/project-scratch-def.json -a lwcc
```

5. Push the app to your scratch org:

```
sfdx force:source:push
```

6. Assign the Lightning_Web_Chart_Component permission set to the default user:

```
sfdx force:user:permset:assign -n Lightning_Web_Chart_Component
# Optionally add the Lightning_Web_Chart_Component_Demo permission set to access the demo
sfdx force:user:permset:assign -n Lightning_Web_Chart_Component_Demo
```

7. Open the scratch org:

```
sfdx force:org:open
```

8. Start composing application using the chart components or by creating your own using the library.

## How to use it?

---

### LWCC for Admins

Create awesome charts directly from the AppBuilder! Just go to your page settings, drag the LWCC Chart component and drop it whenever you want.

<div align="center">
  <img src="{{ "/assets/images/lwcc-app-builder.gif" | relative_url }}" alt="LWCC App Builder"/>
</div>

#### App Builder support

LWCCBuilder is a custom component available in the **App Builder** component palette.
The component is available for those targets :

```xml
<targets>
  <target>lightning__AppPage</target>
  <target>lightning__HomePage</target>
  <target>lightning__RecordPage</target>
  <target>lightningCommunity__Default</target>
</targets>
```

#### Component Properties

| Attribute            | Description                                                                                                                    | Validation                                                                  | Exemple                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Type                 | Define the chart type                                                                                                          | Picklist (line, bar, radar, doughnut, pie, polarArea, bubble, scatter)      |
| Title                | Define the chart title                                                                                                         | String                                                                      |
| Legend Position      | Define where the legend will be displayed                                                                                      | Picklist (top, bottom, right, left)                                         |
| CSS Style            | Provide inline custom css style for chart container                                                                            | String                                                                      | position: relative; margin: auto;                                                                                                    |
| Color palette to use | Choose the slds [color palette](https://www.lightningdesignsystem.com/guidelines/charts/#Chart-Color) to use                   | Picklist (default, colorsafe, light, bluegrass, sunrise, water, watermelon) |
| Fill the chart ?     | Check this property fo fill the chart                                                                                          | Boolean                                                                     |
| Dataset Labels       | Display the label for each values set in the dataset in a JSON array of string                                                 | JSON Array []                                                               | ["Label 1","Label 2"],...                                                                                                            |
| Dataset              | Define the chart values in a JSON array of object                                                                              | JSON Array []                                                               | [{"label":"Data 1", "detail":[1, 1]},{"label":"Data 2", "detail":[2, 2]},...]                                                        |
| SOQL                 | Define a SOQL to be used to fetch the data (only aggregate query). Use label alias for the label and value alias for the value | String                                                                      | SELECT StageName label, SUM(Amount) value FROM Opportunity WHERE IsClosed = false WITH SECURITY_ENFORCED GROUP BY StageName LIMIT 10 |
| Custom Data Provider | Define the Custom Data Provider class hander name to fetch the data. It must extends "ChartDataProvider"                       | String                                                                      | MyCustomChartDataProvider                                                                                                            |

#### Focus on the "Dataset" Property

This property is used to display static content.

Provide the JSON object you want to display.

Use this property to get fast at prototyping and to show case final render.

#### Focus on the "SOQL" Property

This property is used to execute a query to gather data from the server.

The SOQL query must respect those constraints :

- having a `label` alias in order to set the label of the data.
- having a `value` alias in order to set the values of the data.
- **grouping** the record by a field
- having a `limit` statement
- having the `WITH SECURITY_ENFORCED` statement

The query accept to use `:recordId` string placeholder and will replace this with the actual record Id if the component is placed on an object page

Exemple of a well formed query for a Component placed on an account page :

```
SELECT StageName label, SUM(Amount) value FROM Opportunity WHERE IsClosed = false AND AccountId = :recordId WITH SECURITY_ENFORCED GROUP BY StageName LIMIT 10
```

#### Focus on the "Custom Data Provider" Property

This property is used to execute custom apex handler to provide data.

The class provided must extend the class `ChartDataProvider`.

The lwc component will pass to the class the recordId (if on an object page)

### LWCC for Developers

Get the most of LWCC by integrating it directly into your code! LWCC has been build using Lightning Web Components, which allow you to include your charts inside both, your Aura and LWC components.

```html
<c-chart type="bar">
  <c-title text="# of LWCC installs"></c-title>
  <c-legend position="bottom"></c-legend>
</c-chart>
```

See all the available options in the [API Documentation](./docs/api.html) and explore the [Sample gallery](./docs/general/samples.html)
