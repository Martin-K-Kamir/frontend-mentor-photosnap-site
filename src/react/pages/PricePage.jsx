import data from "../../data.js";
import Hero from "../components/Hero.jsx";
import Cta from "../components/Cta.jsx";
import TablePlan from "../components/TablePlan";
import CardPlan from "../components/CardPlan";
import Toggle from "../components/Toggle";
import {useState} from "react";

export default function PricePage() {
    const [paymentFrequency, setPaymentFrequency] = useState(0);

    function handleToggle() {
        setPaymentFrequency(paymentFrequency === 0 ? 1 : 0);
    }

    return (
        <main>
            <Hero data={data} page="pricing"/>

            <section>
                <div className="wrapper">
                    <h2 className="sr-only">Subscription plans</h2>
                    <Toggle onClick={handleToggle} leadLabel="Monthly" rearLabel="Yearly" utils="fg-neutral-5 bg-neutral-2"/>
                    <div className="[ flow ] [ direction-row//lg ]">
                        {data.plans.map((plan, index) => <CardPlan paymentFrequencySelected={paymentFrequency} key={`key${index}`} {...plan} btn={{...plan.btn, content: "Pick plan"}}/>)}
                    </div>
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
