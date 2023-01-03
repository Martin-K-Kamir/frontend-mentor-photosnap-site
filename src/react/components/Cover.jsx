import Button from "./Button.jsx";
import Image from "./Image.jsx";

export default function Cover(props) {
    function getTitle() {
        if (props.type === "hero") {
            return 'h1';
        } else {
            return 'h2';
        }
    }
    const Title = getTitle();

    return (
        <div className="[ cover ] [ stacked ] [ fg-neutral-1 bg-neutral-5 ]">
            <Image utils="image-darker" {...props.image}/>
            <div className="[ cover__content ] [ stack ]">
                {props.subtitle && <p className="title-1">{props.subtitle}</p>}
                <Title className="title-5">{props.title}</Title>
                {props.author && props.datetime && <p className="fs-1">{props.datetime && <time dateTime={props.datetime}>{props.datetime}</time> } {props.author && "by " + props.author}</p>}
                <p className={`[ ${props.hero ? "fg-neutral-3" : "fg-neutral-4"} ]`}>{props.desc}</p>
                {props.btn && <Button type="link" {...props.btn}>{props.btn.content}</Button>}
            </div>
        </div>
    );
}