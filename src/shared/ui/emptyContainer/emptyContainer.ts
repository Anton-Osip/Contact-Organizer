import './emptyContainer.scss'
import {ElementCreator, type ElementCreatorParams, View} from "../../utils";


enum cssClassesEnum {
    EMPTY_TEXT = 'empty__text',
    EMPTY_CONTAINER = 'empty__container',
}


export class EmptyContainer extends View {

    constructor() {
        const params: ElementCreatorParams = {
            tag: 'div',
            classNames: [cssClassesEnum.EMPTY_CONTAINER],
            textContent: '',
        }
        super(params);

        this.configureView()
    }

    configureView() {
        const paramsEmptyText: ElementCreatorParams = {
            tag: 'p',
            classNames: [cssClassesEnum.EMPTY_TEXT],
            textContent: 'Список контактов пуст',
        }

        const emptyText: ElementCreator = new ElementCreator(paramsEmptyText)

        this.viewElementCreator.addInnerElement(emptyText)
    }


}
