# Lightning Web Chart.js Component
The power of Chart.js brought to Salesforce !

<div align="center">
  <img src="{{ "/assets/images/lwcc_logo.png" | relative_url }}" alt="LWCC Logo" width="250" />
</div>

TODO: include presentation video

## What is LWCC?
---
LWCC is a suit of Salesforce Lightning Web Components created to bring you all the power and flexibility of Chart.js into the Salesforce platform. Designed for admins and developers, LWCC allows everybody to create highly customizable charts to visualize your data.



<div class="row">
  <div class="col-sm-4">
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">Open source</h5>
        <p class="card-text">The source code is available in GitHub and contributions are welcome!</p>
        <a href="{{ site.github.repository_url }}" class="btn btn-primary">GitHub</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">Salesforce Platform</h5>
        <p class="card-text">Designed to run on the Salesforce Platform*, using the Lightning technology</p>
        <a href="https://appexchange.salesforce.com/" class="btn btn-primary">AppExchange</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">Chart.js</h5>
        <p class="card-text">Build using Chart.js, a flexible JavaScript charting library</p>
        <a href="https://www.chartjs.org/" class="btn btn-primary">Chart.js</a>
      </div>
    </div>
  </div>
</div>

<br>
<p><small>*If you want to experience Lightning Web Components on any platform, please visit https://lwc.dev, and try out the Lightning Web Components sample application LWC Recipes OSS.</small></p>

## Installation
---
#### App Exchange
LWCC is available in AppExchange to be installed directly into your Salesforce org.

TODO: Link to the AppExchange

#### SFDX
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
```

7. Open the scratch org:
```
sfdx force:org:open
```
8. Start composing application using the chart components or by creating your own using the library.
## How to use it?
---





#### LWCC for Admins
Create awesome charts directly from the AppBuilder! Just go to your page settings, drag the LWCC Chart component and drop it whenever you want. You can configure different options to adapt the look and feel of your chart, and make relevant data to be displayed:
- JSON static data
- SOQL query
- APEX Controller
- PUBSUB events

TODO img/gif drag&drop component into platform

#### LWCC for Developers
Get the most of LWCC by integrating it directly into your code! LWCC has been build using Lightning Web Components, which allow you to include your charts inside both, your Aura and LWC components.

```html
<c-chart type="bar">
    <c-title text="# of LWCC installs"></c-title>
    <c-legend position="bottom"></c-legend>
</c-chart>
```

See all the available options in the [API Documentation](./docs/api.html)