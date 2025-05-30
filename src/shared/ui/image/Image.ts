import {type ElementCreatorParams, View} from "../../utils";


interface ImageParams {
    classNames: string
    src: string
    alt: string
}

export class Image extends View {

    constructor(imageParams: ImageParams) {
        const params: ElementCreatorParams = {
            tag: 'img',
            classNames: [imageParams.classNames],
            textContent: '',
        }
        super(params);

        this.addSrc(imageParams.src)
        this.addAlt(imageParams.alt)
    }

    addSrc(src: string) {
        this.viewElementCreator.getElement().src = src;
    }

    addAlt(alt: string) {
        this.viewElementCreator.getElement().alt = alt;
    }
}
