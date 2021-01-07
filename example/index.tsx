import { render } from "react-dom"
import { App } from "./App"

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept()
}

render(<App/>, document.getElementById("react-root"))