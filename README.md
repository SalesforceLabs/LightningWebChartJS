<h1 align="center">
	TODO logo  
</h1>

<h4 align="center">
	<a href="#overview">Overview</a> |
	<a href="#installation-instructions">Install Me</a> |
	<a href="#how-it-works">How it Works</a> |
	<a href="#faqs">FAQs</a> |
	<a href="#contributing">Contribute</a>
</h4>
	
<h3 align="center">
	An interactive Lightning Web Component for the Salesforce platform<br><br>
	<a href="https://github.com/scolladon/lwcc/network/members">
    		<img alt="forks on github"
		src="https://img.shields.io/github/forks/scolladon/lwcc?style=flat-square&logoColor=blue">
  	</a>
  	<a href="https://github.com/scolladon/lwcc/stargazers">
    		<img alt="stars on github"
		src="https://img.shields.io/github/stars/scolladon/lwcc?style=flat-square">
  	</a>
  	<a href="https://github.com/scolladon/lwcc/watchers">
    		<img alt="watchers"
		src="https://img.shields.io/github/watchers/scolladon/lwcc?style=flat-square">
  	</a>
  	<a href="https://github.com/scolladon/lwcc/issues">
    		<img alt="issues"
		src="https://img.shields.io/github/issues-raw/scolladon/lwcc?style=flat-square">
  	</a>
    TODO code climate
</h3>

<p align="center">
  TODO gif image
</p>

## Overview

ChartJs in Lightning Web Compoponent. Allow developer to build chart component using ChartJs. Allow admin to compose page using those chart component

- **ChartJs base chart** Line, bar, radar, doughnut & pie, polar area, bubble, scatter, area chart.
- **ChartJs Mix chart** Support for mix chart using custom lightning web component.
- **ChartJs axes** Axes definition using custom lightning web component.
- **ChartJs events** Support for custom event handler in your application
- **Responsive chart.** Use ChartJs responsive APIs.
- **App builder support.** TODO

> This sample application is designed to run on Salesforce Platform. If you want to experience Lightning Web Components on any platform, please visit https://lwc.dev, and try out the Lightning Web Components sample application [LWC Recipes OSS](https://github.com/trailheadapps/lwc-recipes-oss).

## Installation Instructions

TODO to revise when the component will be in a managed package

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

## How it Works TODO

TODO lien github page documentation

### LWC Components TODO github page

#### Chart API TODO github page

- Line chart
- Bar chart
- Radar chart
- Doughnut & Pie chart
- Polar Area chart
- Bubble chart
- Scatter chart
- Area chart

#### Option API TODO github page

- Common option
- Animation option
- Layout option
- Legend option
- Title option
- Tooltip option
- Elements option

#### Axes API TODO github page

- Cartesian Category axes
- Cartesian Linear axes
- Cartesian Logarithmic axes
- Cartesian Time axes
- Radial Linear axes

### App builder Components TODO github page

#### Description TODO github page

#### Compose pages using chart component TODO github page

## How to use it TODO

### How to build your App builder embeddable chart component TODO

### How to build custom Lightning application TODO

## Contributing

Contributions are what make the trailblazer community such an amazing place. I regard this component as a way to inspire and learn from others. Any contributions you make are **greatly appreciated**.

See [contributing.md](/CONTRIBUTING.md) for lwcc principles.

## Utilities and Dependencies

#### Dependencies

- Chart.js v2.7.3
- nanoid.js v3.1.3

#### Code formatting

[Prettier](https://prettier.io/) is a code formatter used to ensure consistent formatting across your code base. To use Prettier with Visual Studio Code, install [this extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) from the Visual Studio Code Marketplace. The [.prettierignore](/.prettierignore) and [.prettierrc](/.prettierrc) files are provided as part of this repository to control the behavior of the Prettier formatter.

#### Code linting

[ESLint](https://eslint.org/) is a popular JavaScript linting tool used to identify stylistic errors and erroneous constructs. To use ESLint with Visual Studio Code, install [this extension](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-lwc) from the Visual Studio Code Marketplace. The [.eslintignore](/.eslintignore) file is provided as part of this repository to exclude specific files from the linting process in the context of Lightning Web Components development.
