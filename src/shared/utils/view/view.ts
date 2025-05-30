import {ElementCreator, type ElementCreatorParams} from "../element-creator";


export class View {
    private viewElementCreator: any;

    constructor(params: ElementCreatorParams = {tag: 'section', classNames: [], textContent: ''}) {
        this.viewElementCreator = this.createView(params);
    }


    getHtmlElement(): HTMLElement {
        return this.viewElementCreator.getElement();
    }


    createView(params: ElementCreatorParams): ElementCreator {

        const elementParams: ElementCreatorParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: params.textContent,
            callback: params.callback ?? params.callback,
        };
        this.viewElementCreator = new ElementCreator(elementParams);

        return this.viewElementCreator;
    }
}
