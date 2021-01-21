# FAQs

## Which languages does it support?
LWCC extends the power of Chart.js and supports all the languages, included right-to-left ones. For example, the c-legend component includes an attribute textdirection, in which youo can define whether your texts will be displayed in left-to-right (ltr) or right-to-left (rtl) format.

## Where can I use LWCCBuilder?
The LWCCBuilder component can be dropped into the following type of Salesforce pages: App page, Home page, Record Page, Community Page.

## Can LWCC components be used inside other Lighining Web Components?
Yes, LWCC has been built using Lightning Web Components, so you can include them inside your LWC components. Please keep in mind that the AppExchange version will install in your org a managed package with a custom namespace (lwcc), that cannot be accessed directly from a LWC (this is a Salesforce Platform limitation yet). However, you can enjoy the full LWCC developer experience by cloning the repository, including it in your project and deploying it in your org!

## Can LWCC components be used inside other Aura Components?
Yes, but you might need to encapsulate beforehand the charts in another LWC. Due to how the charts are composed in LWC using slots, they cannot be converted into Aura facets. Also, keep in mind that the AppExchange version will install in your org a managed packaged with a custom namespace (lwcc), that cannot be accessed directly from a LWC (this is a Salesforce Platform limitation yet). However, you can enjoy the full LWCC developer experience by cloning the repository, including it in your project and deploying it in your org!

## Does it support mobile?
Yes, LWCC is totally responsive so you can create charts to display in different screen sizes. To benefit from a better responsive experience, please consider using the `responsive` attribute in the Chart component.

## SOQL using :recordId do not render in the App Builder and the Community Builder?
Yes, using `:recordId` in the SOQL the LWCC Chart Builder component do not display any data in the App builder or Community Builder because the context is not set to an actual record and then recordId is not populated.

## How can I use the callbacks in LWC?
Some components can expose attributes of type `function` which allows you perform some dynamic transformations before returning an error. One example could be to display a custom message for a tooltip in a Cartesian Cateegory Axis. To do this, you can simply bind a function the same way you bind any other variable:

*myComponent.html*
```html
<template>
    ...
    <c-cartesian-category-axis axis="x" ticks-callback={handleTicksCallback}></c-cartesian-category-axis>
    ...
</template>
```
*myComponent.js*
```js
...
export default class MyComponent extends LightningElement {

    // This is your callback function, binded to the cartesianCategoryAxis.ticksCallback property
    handleTicksCallback(tooltipItem){
        return `Custom title for ${tooltipItem[0].label} is here!`;
    }
}
```

## How can I use the callbacks in LWC and access properties of the current component?
Following the example above, you will get an `undefined` value if you want to access an attribute of your component from your callback function. This is because the [scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) of `this` will change when the callback function is called, so the attributes of your component won't be accessible anymore.

To fix this, you can simply change the definition of the callback from a [function declaration to a function expression](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function) using [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
By using the arrow functions, the callback will keep the scope of `this` to the component context.

*myComponent.js*
```js
...
export default class MyComponent extends LightningElement {
    salutation = 'Hey!';

    handleTicksCallback = (tooltipItem) => {
        return `${this.salutation} Custom title for ${tooltipItem[0].label} is here!`;
    }
}
```