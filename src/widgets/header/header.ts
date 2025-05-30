import './header.scss'

import {ElementCreator, type ElementCreatorParams, View} from "../../shared/utils";
import {Container} from "../../shared/ui";
import {Logo} from "../../shared/ui/logo";

enum cssClassesEnum {
    HEADER = 'header',
    HEADER_CONTAINER = 'header__container',
}

export class Header extends View {

    constructor() {
        const params: ElementCreatorParams = {
            tag: 'header',
            classNames: [cssClassesEnum.HEADER],
            textContent: '',
        }
        super(params);

        this.configureView()
    }



    configureView() {
        const paramsHeaderContainer: ElementCreatorParams = {
            tag: 'div',
            classNames: [cssClassesEnum.HEADER_CONTAINER],
            textContent: '',
        }
        const headerContainer: ElementCreator = new ElementCreator(paramsHeaderContainer)
        headerContainer.addInnerElement(new Logo().getHtmlElement())
        this.viewElementCreator.addInnerElement(Container(headerContainer))
    }

}
