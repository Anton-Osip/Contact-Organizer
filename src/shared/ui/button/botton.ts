import './button.scss'

import {type ElementCreatorParams, View} from "../../utils";

type Mode = 'primary' | 'secondary'

enum cssClassesEnum {
    BUTTON = 'button',
    PRIMARY = 'button--primary',
    SECONDARY = 'button--secondary',
}

export interface ButtonParams {
    mode: Mode
    textContent?: string
    className?: string
}

export class Button extends View {

    constructor(buttonParams: ButtonParams) {

        const params: ElementCreatorParams = {
            tag: 'button',
            classNames: [cssClassesEnum.BUTTON, buttonParams.className ?? 'a'],
            textContent: buttonParams.textContent ?? '',
        }
        super(params);
        const modeClass = this.changeMode(buttonParams.mode);
        this.viewElementCreator.getElement().classList.add(modeClass);
    }

    changeMode(mode: Mode) {
        switch (mode) {
            case 'primary':
                return cssClassesEnum.PRIMARY;
            case 'secondary':
                return cssClassesEnum.SECONDARY;
        }

    }


}


