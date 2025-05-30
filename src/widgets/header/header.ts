import './header.scss'

import {ElementCreator, type ElementCreatorParams, View} from "../../shared/utils";
import {Button, type ButtonParams, Container, Logo} from "../../shared/ui";

enum cssClassesEnum {
    HEADER = 'header',
    HEADER_CONTAINER = 'header__container',
    BUTTONS_CONTAINER = 'buttons__container',
    BUTTONS_ADD = 'buttons__add',
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
        const paramsButtonsContainer: ElementCreatorParams = {
            tag: 'div',
            classNames: [cssClassesEnum.BUTTONS_CONTAINER],
            textContent: '',
        }
        const ButtonGroupsParams: ButtonParams = {mode: 'primary', textContent: 'Группы'}
        const ButtonAddParams: ButtonParams = {
            mode: 'secondary',
            textContent: 'Добавить контакт',
            className: cssClassesEnum.BUTTONS_ADD
        }


        const headerContainer: ElementCreator = new ElementCreator(paramsHeaderContainer)
        headerContainer.addInnerElement(new Logo().getHtmlElement())

        const buttonsContainer: ElementCreator = new ElementCreator(paramsButtonsContainer)
        headerContainer.addInnerElement(buttonsContainer)

        buttonsContainer.addInnerElement(new Button(ButtonAddParams).getHtmlElement())
        buttonsContainer.addInnerElement(new Button(ButtonGroupsParams).getHtmlElement())

        this.viewElementCreator.addInnerElement(Container(headerContainer))
    }

}
