import './main.scss'

import {type ElementCreatorParams, View} from "../../shared/utils";

enum cssClassesEnum {
    MAIN = 'main',
}

const textContent: string = 'MAIN'

export class Main extends View {

    constructor() {
        const params: ElementCreatorParams = {
            tag: 'main',
            classNames: [cssClassesEnum.MAIN],
            textContent: textContent,
        }
        super(params);
    }


}
