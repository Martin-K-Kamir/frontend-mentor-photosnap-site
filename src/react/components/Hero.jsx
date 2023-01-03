import Split from "./Split";
import Cover from "./Cover";

export default function Hero(props) {

    return (
            props.data.hero.map((hero, index) => hero.page === props.page && <header key={`key${index}`} className="[ hero ] [ fg-neutral-1 bg-neutral-5 ]">
                {hero.type === "cover" ?
                    <Cover {...hero} hero={true} image={{...hero.image, name: "hero"}}/>
                    :
                    <div className="wrapper" data-max-wrapper="true">
                        <Split {...hero} hero={true} image={{...hero.image, name: "hero"}}/>
                    </div>}
            </header>)
    );
}