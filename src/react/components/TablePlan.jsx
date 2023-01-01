import data from "../../data.js";
import Icon from "./Icon.jsx";

export default function TablePlan() {
    return (
        <table>
            <caption className="sr-only">Compare each plan features</caption>
            <thead>
            <tr>{data.tablePlan.headerPlans.map((headerPlan, index) => <th key={`key${index}`} scope="col" className="title-1 text-uppercase">{headerPlan}</th>)}</tr>
            </thead>
            <tbody>
            {data.tablePlan.headerFeatures.map((headerPlan, index) => <tr key={`key${index}`}>
                <th scope="row" className="title-1 text-uppercase">{headerPlan}</th>
                {data.tablePlan.plans.map((plan, index) => <td key={`key${index}`}>
                    {plan.features && plan.features.includes(headerPlan) ? <span><span aria-hidden="true" className="fs-1">{plan.planName} <Icon name="check" size="1.2em"/></span><span className="sr-only">is included in {plan.planName} plan</span></span> : <span className="sr-only">is not included in {plan.planName} plan</span>}
                </td>)}
            </tr>)}
            </tbody>
        </table>
    );
}