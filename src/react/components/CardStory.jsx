import Image from "./Image";
import Button from "./Button";

export default function CardStory(props) {
    return (
        <article className="[ card-story ] [ stacked ] [ fg-neutral-1 bg-neutral-5 ]">
            <Image utils="image-darker" dir="stories" useMedia={true} {...props.image}/>
            <div className="[ card-story__content ] [ stack block ] [ align-end ]">
                {props.showDatetime && <time className="fs-1" dateTime={props.datetime}>{props.datetime}</time>}
                <h3 className="title-3">{props.title}</h3>
                <p className="fs-1">by {props.author}</p>
                <span className="divide" aria-hidden="true"></span>
                <Button to={props.btn.to} type="link">{props.btn.content}</Button>
            </div>
        </article>
    );
}