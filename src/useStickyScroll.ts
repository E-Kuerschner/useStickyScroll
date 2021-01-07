import { MutableRefObject, useEffect, useRef } from "react"

interface UseStickyScrollOptions {
    element: MutableRefObject<HTMLElement | null>
    container: MutableRefObject<HTMLElement | null>
    stickyClass?: string
}

export const useStickyScroll = (options: UseStickyScrollOptions) => {
    const { container, element, stickyClass } = options
    const replacementDiv = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!container.current || !element.current) return
        const containerElement = container.current
        const stickyElement = element.current
        const containerRect = containerElement.getBoundingClientRect()
        const stickyRect = stickyElement.getBoundingClientRect()
        const height = stickyRect.y - containerRect.y

        const handleContainerScroll = () => {
            const currentScroll = containerElement.scrollTop
            if (currentScroll >= height) {
                if (replacementDiv.current === null) {
                    // create a div to take the place of the element about to become fixed
                    // this prevents a screen "jump" in content as the element's positioning is changed
                    const div = document.createElement("div")
                    div.id = "replacementDiv"
                    div.style["height"] = `${stickyRect.height}px`
                    div.style["width"] = `${stickyRect.width}px`
                    stickyElement.insertAdjacentElement("beforebegin", div)
                    replacementDiv.current = div
                }

                if (stickyClass) {
                    stickyElement.classList.add(stickyClass)
                }

                stickyElement.style["position"] = "fixed"
                // fix the top of the sticky element to the top edge of the scrolling container taking into account any top border
                const borderTopCss = getComputedStyle(containerElement).getPropertyValue("border-top")
                const borderTopWidth = borderTopCss.split(" ").shift() ?? "0px"
                const borderTop = Number(borderTopWidth.slice(0, -2))
                stickyElement.style["top"] = `${containerRect.y + borderTop}px`
                // while fixed, ensure the width of the now fixed element remains consistent
                stickyElement.style["width"] = `${stickyRect.width}px`
            } else {
                replacementDiv.current?.remove()
                replacementDiv.current = null

                if (stickyClass) {
                    stickyElement.classList.remove(stickyClass)
                }

                stickyElement.style["position"] = "relative"
                stickyElement.style["top"] = "0px"
            }
        }

        container.current?.addEventListener("scroll", handleContainerScroll)
        return () => container.current?.removeEventListener("scroll", handleContainerScroll)
    }, [element, container, stickyClass])
}