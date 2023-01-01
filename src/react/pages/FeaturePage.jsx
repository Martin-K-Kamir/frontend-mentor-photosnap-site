import data from "../../data.js";
import CardFeature from "../components/CardFeature.jsx";
import Hero from "../components/Hero.jsx";
import Cta from "../components/Cta.jsx";

export default function FeaturePage() {
    return (<main>
        {data.hero.map((hero, index) => hero.page === "features" && <Hero key={`key${index}`} {...hero}/>)}

        <section>
            <div className="wrapper">
                <ul className="[ grid ] [ measure-3 ]" role="list">
                    {data.features.map((card, index) => <li key={`key${index}`}>
                        <CardFeature title={card.title} iconName={card.iconName} desc={card.desc}/>
                    </li>)}
                </ul>
            </div>
        </section>
        <section>
            <Cta/>
        </section>
    </main>);
}
