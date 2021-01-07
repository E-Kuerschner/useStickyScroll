# useStickyScroll
A simple React hook to help you set up "sticky scroll" behavior.
"sticky scroll" is a technique in which an element switches between relative and fixed positioning as you scroll past it
so that it remains at the top of your screen or the container while you scroll through the rest of the content.

![Version](https://img.shields.io/npm/v/react-use-sticky-scroll)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-use-sticky-scroll)
<a href="https://buymeacoffee.com/erichk" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a>

### Description
[`position: sticky`](https://www.w3schools.com/howto/howto_css_sticky_element.asp) is support but [it's browser support is very limited](https://caniuse.com/css-sticky).
This hook provides a workable solution that does not rely on the experimental css feature for your React application.

### Install
```bash
npm install react-use-sticky-scroll

yarn add react-use-sticky-scroll
``` 

### API
The module exports a single function `useStickyScroll`.

The hook accepts a single argument which is an options object:

`element`: a `React.MutableRefObject` that contains a reference to the element that you want to stick

`container`: a `React.MutableRefObject` that contains a reference to a scrollable ancestor of the sticky element.
The sticky element will fix itself to the top of this container once the container's scroll height reaches the element.

`stickyClass`: an optional string containing a css class to apply to the sticky element once its positioning has become fixed.

### Example
There is a runnable example located in the /example folder in the repository.
To run it make sure to clone the repo and install all the dependencies.
You can spin up the example with `npm run example`.

For convenience here is the usage of the hook:

```typescript jsx
import { useStickyScroll } from "react-use-sticky-scroll"
import { useRef } from "react"

export const App = () => {
    const stickyHeader = useRef<HTMLDivElement>(null)
    const content = useRef<HTMLElement>(null)

    useStickyScroll({
        element: stickyHeader,
        container: content,
        stickyClass: "stickyContent--stuck"
    })

    return (
        <div>
            <header>
                <h2>useStickyScroll example</h2>
            </header>
            <section ref={content}>
                <h4>Article</h4>
                <p>notice how the div below sticks to the top of the scrollable container as the scroll height passes it</p>
                <div ref={stickyHeader} className="stickyContent">Sticky Content!</div>
                <p className="longContent">
                    some loooooong content
                </p>
            </section>
            <footer/>
        </div>
    )
}
```

```css
html {
    background-color: azure;
}

section {
    width: 500px;
    overflow: auto;
    border: solid 1px darkslategray;
    padding-top: 25px;
    padding-left: 25px;
}

.stickyContent {
    font-weight: bold;
}

.stickyContent--stuck {
    background-color: azure;
}

.longContent {
    height: 300px;
}
```
