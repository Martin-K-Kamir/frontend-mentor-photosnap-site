import Image from "./Image";
import Button from "./Button";

export default function Split(props) {
    function getTitle() {
        if (props.hero) {
            return 'h1';
        } else {
            return 'h2';
        }
    }

    const Title = getTitle();

    return (
        <div className="[ split ] [ direction-row//md ]">
            <div className="[ split__content ] [ stack ] [ justify-center//md justify-self-center//md align-content-center//md  ]">
                <Title className="[ title-5 ] [ ]">{props.title}</Title>
                <p className={`[ ${props.hero ? "fg-neutral-3" : "fg-neutral-4"} ]`}>{props.desc}</p>
                {props.btn && <Button type="link" {...props.btn}>{props.btn.content}</Button>}
            </div>
            <Image {...props.image}/>
        </div>
    );
}