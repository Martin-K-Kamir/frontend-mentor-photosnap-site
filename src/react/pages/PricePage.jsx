import data from "../../data.js";
import {useState} from "react";
import Hero from "../components/Hero.jsx";
import Cta from "../components/Cta.jsx";
import TableFeatures from "../components/TableFeatures.jsx";
import CardPlan from "../components/CardPlan";
import Toggle from "../components/Toggle";

export default function PricePage() {
    const [paymentFrequency, setPaymentFrequency] = useState(0);

    function handleToggle() {
        setPaymentFrequency(paymentFrequency === 0 ? 1 : 0);
    }

    return (
        <main>
            <Hero data={data} page="pricing"/>

            <section>
                <div className="wrapper stack">
                    <h2 className="sr-only">Subscription plans</h2>
                    <Toggle onClick={handleToggle} leadLabel="Monthly" rearLabel="Yearly" utils="fg-neutral-5 bg-neutral-2 justify-self-center"/>
                    <div className="[ flow ] [ direction-row//lg ]">
                        {data.plans.map((plan, index) =>
                            <CardPlan key={`key${index}`}
                                      {...plan}
                                      price={plan.prices[paymentFrequency]}
                                      frequency={plan.frequency[paymentFrequency]}
                                      btn={{content: "Pick plan"}}
                            />
                        )}
                    </div>
                </div>
            </section>

            <section>
                <div className="[ wrapper stack ] [ direction-column justify-items-center ]">
                    <h2 className="[ title-5 ] [ text-center hide//below-md ]">Compare</h2>
                    <TableFeatures/>
                </div>
            </section>
            <section>
                <Cta/>
            </section>
        </main>
    );
}
