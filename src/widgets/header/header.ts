import {type ElementCreatorParams, View} from "../../shared/utils";

enum cssClassesEnum {
    HEADER = 'header',
    NAV = 'nav',
}

const textContent: string = 'textContent'

export class Header extends View {

    constructor() {
        const params: ElementCreatorParams = {
            tag: 'header',
            classNames: [cssClassesEnum.HEADER],
            textContent: textContent,
        }
        super(params);
    }


}
