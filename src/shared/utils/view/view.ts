import {ElementCreator, type ElementCreatorParams} from "../element-creator";

export interface ViewParams {
    tag: string,
    classNames: Array<string>,
}

export class View {
    private viewElementCreator: any;

    constructor(params: ViewParams = {tag: 'section', classNames: []}) {
        this.viewElementCreator = this.createView(params);
    }


    getHtmlElement(): HTMLElement {
        return this.viewElementCreator.getElement();
    }


    createView(params: ViewParams): ElementCreator {

        const elementParams: ElementCreatorParams = {
            tag: params.tag,
            classNames: params.classNames,
            textContent: '',
        };
        this.viewElementCreator = new ElementCreator(elementParams);

        return this.viewElementCreator;
    }
}
