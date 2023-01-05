import Button from "./Button";

export default function CardPlan(props) {
    return (
        <div className={`[ card-plan ] [ ${props.highlight ? "fg-neutral-1 bg-neutral-5" : "fg-neutral-5 bg-neutral-2"} ]`}
             data-card-highlight={props.highlight}>
            <div className="[ card-plan__container ] [ stack ]">
                <div className="[ card-plan__content ] [ flow ]">
                    <div className="stack">
                        <h3 className="title-4">{props.title}</h3>
                        <p className={`measure-3 ${props.highlight ? "fg-neutral-3" : "fg-neutral-4"}`}>{props.desc}</p>
                    </div>
                    <div>
                        <p className="title-5">${props.price[props.paymentFrequencySelected ? props.paymentFrequencySelected : 0]}</p>
                        <p className={props.highlight ? "fg-neutral-3" : "fg-neutral-4"}>per {props.paymentFrequency[props.paymentFrequencySelected ? props.paymentFrequencySelected : 0]}</p>
                    </div>
                </div>
                <Button to={props.btn.to}>{props.btn.content}</Button>
            </div>
        </div>
    );
}