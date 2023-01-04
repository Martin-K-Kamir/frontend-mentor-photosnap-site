import Button from "./Button";

export default function CardPlan(props) {
    return (
        <div className={`[ card-plan ] [ stack ] [ ${props.highlight ? "fg-neutral-1 bg-neutral-5" : "fg-neutral-5 bg-neutral-2"} ]`} data-card-highlight={props.highlight}>
            <h3 className="title-4">{props.title}</h3>
            <p className={props.highlight ? "fg-neutral-3" : "fg-neutral-4"}>{props.desc}</p>
            <p className="title-5">${props.price[props.paymentFrequencySelected ? props.paymentFrequencySelected : 0]}</p>
            <p className={props.highlight ? "fg-neutral-3" : "fg-neutral-4"}>per {props.paymentFrequency[props.paymentFrequencySelected ? props.paymentFrequencySelected : 0]}</p>
            <Button to={props.btn.to}>{props.btn.content}</Button>
        </div>
    );
}