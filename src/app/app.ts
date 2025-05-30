import {Header} from "../widgets";


export class App {
    constructor() {
        this.createView()
    }

    createView() {
        const header = new Header()

        document.body.append(header.getHTMLElement())
    }
}
