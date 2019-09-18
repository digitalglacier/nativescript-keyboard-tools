import { KeyboardTools } from 'nativescript-keyboard-tools';
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";

import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();

    const keyTools = new KeyboardTools();

    keyTools.isVisible().subscribe((data) => {
        console.log('isVisible Sub', data);
    })

    keyTools.lastHeight().subscribe((data) => {
        console.log('lastHeight Sub', data);
    })
}
