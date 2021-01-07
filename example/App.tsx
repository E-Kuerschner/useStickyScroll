import { useStickyScroll } from "../src/useStickyScroll"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam est mauris, aliquet eget elementum quis, pretium maximus tellus. Maecenas pulvinar finibus nulla, a sodales lorem congue elementum. Vestibulum sem felis, finibus vitae arcu a, bibendum congue neque. Morbi ac quam at nisl venenatis aliquam nec ac lorem. Duis porta varius lectus. Vestibulum consequat purus nec libero ornare gravida sed nec nibh. Phasellus commodo venenatis quam, in ultricies odio lacinia id. Sed a sagittis lorem. Curabitur pharetra ipsum vel commodo sodales. Nam lorem purus, imperdiet eget pretium non, tincidunt sit amet odio.
                    <br/>
                    <br/>
                    Proin cursus sapien eu lorem placerat dictum. Ut at ipsum molestie, molestie turpis quis, bibendum augue. Duis egestas velit rutrum tincidunt pretium. Donec ac neque libero. Integer ut consectetur purus. Suspendisse dignissim condimentum euismod. Praesent porta ligula sit amet iaculis elementum. Phasellus quis augue suscipit, rutrum lectus in, imperdiet diam. Aliquam dapibus, massa id ultricies pretium, turpis enim ullamcorper orci, sed sagittis enim turpis nec arcu.
                    <br/>
                    <br/>
                    Suspendisse potenti. Etiam porttitor pellentesque convallis. Nullam vehicula, dolor eu ultricies aliquam, nibh nibh aliquet ante, at iaculis ex enim id arcu. Morbi eget volutpat tortor. Aliquam dignissim nulla sed diam cursus sodales. Nam lacus elit, aliquet et tortor in, ultricies malesuada orci. Duis molestie diam non magna tincidunt lobortis. Ut mollis sit amet nulla congue volutpat. Integer malesuada dictum mattis. Vestibulum vitae condimentum felis. Suspendisse sed magna quis orci semper egestas eget vulputate lacus. Donec et nisl a nibh blandit aliquam ut et tortor. Vestibulum dignissim lacus eget felis tempus posuere. Aenean egestas, metus eget accumsan auctor, nunc sapien posuere risus, sit amet vehicula tortor ligula ac nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vitae magna nec leo bibendum porta.
                    <br/>
                    <br/>
                    Suspendisse risus magna, eleifend at dapibus sed, placerat non mi. Sed augue urna, vehicula aliquet augue in, fringilla vehicula mi. Pellentesque rutrum congue maximus. Maecenas eu vulputate ligula, et vulputate sapien. Ut consequat magna scelerisque, molestie mi nec, imperdiet risus. Ut a mi quam. Quisque feugiat scelerisque erat in vestibulum. Nullam sed vulputate erat. Cras ex turpis, aliquam sit amet aliquam ut, mattis laoreet magna. Mauris vulputate quam et blandit pretium. Aliquam erat volutpat. Curabitur arcu sem, iaculis vel fringilla vitae, placerat a elit. Duis hendrerit suscipit leo in suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    <br/>
                    <br/>
                    Integer id vehicula magna. Praesent elementum augue leo. Praesent at urna tellus. Morbi vel lacinia urna. Vestibulum id quam nec neque venenatis sollicitudin. Nulla posuere sit amet elit ut dignissim. Nam tincidunt dui sit amet venenatis sagittis. Donec pharetra venenatis commodo. Nam et ante ex.
                </p>
            </section>
            <footer/>
        </div>
    )
}