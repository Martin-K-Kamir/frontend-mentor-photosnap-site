import data from "../../data.js";
import CardFeature from "../components/CardFeature";
import CardStory from "../components/CardStory";
import Split from "../components/Split.jsx";
import Hero from "../components/Hero.jsx";

export default function HomePage() {
    return (<main>
        {data.hero.map((hero, index) => hero.page === "home" && <Hero key={`key${index}`} {...hero}/>)}

        <section>
            {data.split.map((item, index) => index < 3 && <Split key={`key${index}`} {...item}/>)}
        </section>

        <section className="[ fg-neutral-1 bg-neutral-5 ]">
            <ul className="[ grid ] [ space-0  ]" data-template-columns="robust" role="list">
                {data.stories.map((card, index) => index < 4 && <li key={`key${index}`}>
                    <CardStory {...card} btn={{...card.btn, content: "read story"}}/>
                </li>)}
            </ul>
        </section>

        <section>
            <div className="wrapper">
                <ul className="[ grid ] [  ]" data-template-columns="robust" role="list">
                    {data.features.map((card, index) => index < 3 && <li key={`key${index}`}>
                        <CardFeature {...card}/>
                    </li>)}
                </ul>
            </div>
        </section>

    </main>);
}