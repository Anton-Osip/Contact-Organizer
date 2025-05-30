import {Header, Main} from "../widgets";


export class App {
    constructor() {
        this.createView()
    }

    createView() {
        const header = new Header()
        const main = new Main()

        document.body.append(header.getHtmlElement(), main.getHtmlElement())
    }
}
