import './main.scss'

import {ElementCreator, type ElementCreatorParams, View} from "../../shared/utils";
import {Container, EmptyContainer} from "../../shared/ui";

enum cssClassesEnum {
    MAIN = 'main',
    MAIN_CONTAINER = 'main__container',
}


export class Main extends View {

    constructor() {
        const params: ElementCreatorParams = {
            tag: 'main',
            classNames: [cssClassesEnum.MAIN],
            textContent: '',
        }
        super(params);

        this.configureView()
    }

    configureView() {
        const paramsMainContainer: ElementCreatorParams = {
            tag: 'div',
            classNames: [cssClassesEnum.MAIN_CONTAINER],
            textContent: '',
        }

        const mainContainer: ElementCreator = new ElementCreator(paramsMainContainer)

        mainContainer.addInnerElement(new EmptyContainer().getHtmlElement())

        this.viewElementCreator.addInnerElement(Container(mainContainer))
    }


}
