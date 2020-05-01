# FAQs

## Which languages does it support?
LWCC extends the power of Chart.js and supports all the languages, included right-to-left ones. For example, the c-legend component includes an attribute textdirection, in which youo can define whether your texts will be displayed in left-to-right (ltr) or right-to-left (rtl) format.

## Where can I use LWCCBuilder?
The LWCCBuilder component can be dropped into the following type of Salesforce pages: App page, Home page, Record Page, Community Page.

## Can LWCC components be used inside Aura Components?
Yes, LWCC has been built using Lightning Web Components, so you can include them inside your Aura components.

## Can LWCC components be used inside Lighining Web Componentes?
Yes, LWCC has been built using Lightning Web Components, so you can include them inside your LWC components.

## Does it support mobile?
Yes, LWCC is totally responsive so you can create charts to display in different screen sizes. To benefit from a better responsive experience, please consider using the `responsive` attribute in the Chart component.

## SOQL using :recordId do not render in the App Builder?
Yes, using `:recordId` in the SOQL the LWCC Chart Builder component do not display data in the App builder because SOQL cannot be executed in the App Builder using  because the context is not set to an actual record and then recordId is not populated. 