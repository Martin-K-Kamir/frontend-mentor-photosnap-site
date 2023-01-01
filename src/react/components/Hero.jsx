import Split from "./Split";
import Cover from "./Cover";

export default function Hero(props) {

    return (
        <header className="[ hero ] [ fg-neutral-1 bg-neutral-5 ]">
            {props.type === "cover" ?
                <Cover {...props} hero={true} image={{...props.image, name: "hero"}}/>
                :
                <Split {...props} hero={true} image={{...props.image, name: "hero"}}/>}
        </header>
    );
}