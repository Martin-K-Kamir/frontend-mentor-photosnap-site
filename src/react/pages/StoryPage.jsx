import data from "../../data.js";
import CardStory from "../components/CardStory.jsx";
import Hero from "../components/Hero.jsx";

export default function StoryPage() {
    return (
        <main>
            {data.hero.map((hero, index) => hero.page === "stories" && <Hero key={`key${index}`} {...hero}/>)}

            <section>
                <ul role="list">
                    {data.stories.map((card, index) => <li key={`key${index}`}>
                        <CardStory {...card} btn={{...card.btn, content: "read story"}}/>
                    </li>)}
                </ul>
            </section>
        </main>
    );
}
