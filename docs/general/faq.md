# FAQs

## Which languages does it support?
LWCC extends the power of Chart.js and supports all the languages, included right-to-left ones. For example, the c-legend component includes an attribute textdirection, in which youo can define whether your texts will be displayed in left-to-right (ltr) or right-to-left (rtl) format.

## Where can I use LWCCBuilder?
The LWCCBuilder component can be dropped into the following type of Salesforce pages: App page, Home page, Record Page, Community Page.

## Can LWCC components be used inside other Lighining Web Componentes?
Yes, LWCC has been built using Lightning Web Components, so you can include them inside your LWC components. Please keep in mind that the AppExchange version will install in your org a managed package with a custom namespace (lwcc), that cannot be accessed directly from a LWC (this is a Salesforce Platform limitation yet). However, you can enjoy the full LWCC developer experience by cloning the repository, including it in your project and deploying it in your org!

## Can LWCC components be used inside other Aura Components?
Yes, but you might need to encapsulate beforehand the charts in another LWC. Due to how the charts are composed in LWC using slots, they cannot be converted into Aura facets. Also, keep in mind that the AppExchange version will install in your org a managed packaged with a custom namespace (lwcc), that cannot be accessed directly from a LWC (this is a Salesforce Platform limitation yet). However, you can enjoy the full LWCC developer experience by cloning the repository, including it in your project and deploying it in your org!

## Does it support mobile?
Yes, LWCC is totally responsive so you can create charts to display in different screen sizes. To benefit from a better responsive experience, please consider using the `responsive` attribute in the Chart component.

## SOQL using :recordId do not render in the App Builder and the Community Builder?
Yes, using `:recordId` in the SOQL the LWCC Chart Builder component do not display any data in the App builder or Community Builder because the context is not set to an actual record and then recordId is not populated.