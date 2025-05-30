import {ElementCreator, type ElementCreatorParams} from "../../utils";

enum cssClassesEnum {
    CONTAINER = 'container',
}

const textContent: string = 'textContent'

const paramsContainer: ElementCreatorParams = {
    tag: 'div',
    textContent: textContent,
    classNames: [cssClassesEnum.CONTAINER],
}


export const Container = (innerElement?: ElementCreator) => {
    if (innerElement) {
        new ElementCreator(paramsContainer).addInnerElement(innerElement);
    } else {
        return new ElementCreator(paramsContainer);
    }
}



