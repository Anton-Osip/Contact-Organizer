import {View, type ViewParams} from "../../shared/utils";

enum cssClassesEnum {
    HEADER = 'header',
    NAV = 'nav',
}


export class Header extends View {

    constructor() {
        const params: ViewParams = {
            tag: 'header',
            classNames: [cssClassesEnum.HEADER],
        }
        super(params)
    }


}
