import {ElementCreator, type ElementCreatorParams} from "../../utils";

enum cssClassesEnum {
    CONTAINER = 'container',
}


const paramsContainer: ElementCreatorParams = {
    tag: 'div',
    textContent: '',
    classNames: [cssClassesEnum.CONTAINER],
}


export const Container = (innerElement?: ElementCreator): ElementCreator => {
    const container = new ElementCreator(paramsContainer);
    if (innerElement) {
        container.addInnerElement(innerElement);
    }
    return container;
}



