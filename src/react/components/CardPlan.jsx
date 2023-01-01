import Button from "./Button";

export default function CardPlan(props) {
    return (
        <div className="stack">
            <h3 className="title-4">{props.title}</h3>
            <p>{props.desc}</p>
            <p className="title-5">{props.price}</p>
            <p>{props.frequency}</p>
            <Button to={props.btn.to}>{props.btn.content}</Button>
        </div>
    );
}