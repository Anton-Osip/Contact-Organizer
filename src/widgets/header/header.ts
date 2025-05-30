import {ElementCreator, type ElementCreatorParams} from "../../shared/utils";

enum cssClassesEnum {
    HEADER = 'header',
    NAV = 'nav',
}

const textContent: string = 'textContent'

export class Header {
    private elementCreator;

    constructor() {
        this.elementCreator = this.createView()
    }

    getHTMLElement(): HTMLElement {
        return this.elementCreator.getElement()
    }

    createView() {
        const params: ElementCreatorParams = {
            tag: 'header',
            classNames: [cssClassesEnum.HEADER],
            textContent: textContent,
        }

        return new ElementCreator(params);
    }
}
