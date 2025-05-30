import './header.scss'

import {type ElementCreatorParams, View} from "../../shared/utils";
import {Container} from "../../shared/ui";

enum cssClassesEnum {
    HEADER = 'header',
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
        this.viewElementCreator.addInnerElement(Container())
    }

}
