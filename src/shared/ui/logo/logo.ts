import './logo.scss'
import {ElementCreator, type ElementCreatorParams, View} from "../../utils";
import {Image} from '../image'
import LogoIcon from '../../assets/logo.svg'

enum cssClassesEnum {
    LOGO = 'logo',
    LOGO__IMAGE = 'logo__image',
    LOGO__TEXT = 'logo__text',
}

export class Logo extends View {

    constructor() {
        const params: ElementCreatorParams = {
            tag: 'div',
            classNames: [cssClassesEnum.LOGO],
            textContent: '',
        }
        super(params);

        this.configureView()
    }

    configureView() {
        const paramsText: ElementCreatorParams = {
            tag: 'p',
            classNames: [cssClassesEnum.LOGO__TEXT],
            textContent: 'Книга контактов',
        }
        const LogoText: ElementCreator = new ElementCreator(paramsText)
        const image = new Image({
            classNames: cssClassesEnum.LOGO__IMAGE,
            src: LogoIcon,
            alt: 'logo'
        }).getHtmlElement()
        this.viewElementCreator.addInnerElement(image)

        this.viewElementCreator.addInnerElement(LogoText)
    }

}
