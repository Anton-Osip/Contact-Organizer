export interface ElementCreatorParams {
    tag: string;
    classNames: string[];
    textContent: string;
    callback?: (event: Event) => void;
}

export class ElementCreator {
    private element!: HTMLElement;

    constructor(params: ElementCreatorParams) {
        this.createElement(params);
    }

    getElement(): HTMLElement {
        return this.element;
    }

    addInnerElement(element: HTMLElement | ElementCreator): void {
        if (element instanceof ElementCreator) {
            this.element.append(element.getElement());
        } else {
            this.element.append(element);
        }
    }

    createElement(params: ElementCreatorParams): void {
        this.element = document.createElement(params.tag);
        if (this.element instanceof HTMLElement) {
            this.setCssClasses(params.classNames);
            this.setTextContent(params.textContent);
            if (params.callback) {
                this.setCallback(params.callback);
            }
        }
    }

    setCssClasses(cssClasses: string[] = []): void {
        cssClasses.forEach((cssClass) => this.element.classList.add(cssClass));
    }

    setTextContent(text: string = ''): void {
        this.element.textContent = text;
    }

    setCallback(callback: (event: Event) => void): void {
        this.element.addEventListener('click', (event: Event) => callback(event));
    }
}
