import data from "../../data.js";
import Hero from "../components/Hero.jsx";
import Cta from "../components/Cta.jsx";
import TablePlan from "../components/TablePlan";
import CardPlan from "../components/CardPlan";
import Toggle from "../components/Toggle";

export default function PricePage() {
    return (
        <main>
            {data.hero.map((hero, index) => hero.page === "pricing" && <Hero key={`key${index}`} {...hero}/>)}
            <section>
                <div className="wrapper">
                    <h2 className="sr-only">Subscription plans</h2>
                    <Toggle/>
                    {data.plans.map((plan, index) => <CardPlan key={`key${index}`} {...plan} btn={{...plan.btn, content: "Pick plan"}}/>)}
                </div>
            </section>
            <section>
                <div className="wrapper">
                    <h2 className="title-5">Compare</h2>
                    <TablePlan/>
                </div>
            </section>
            <section>
                <Cta/>
            </section>
        </main>
    );
}
