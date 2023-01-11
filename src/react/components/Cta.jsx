import Image from "./Image.jsx";
import Button from "./Button";

export default function Cta() {
    return (
        <section className="[ stacked ] [ space-7 fg-neutral-1 bg-neutral-5 ]" data-extrinsic-sizing='true'>

            <span className="[ pattern-line ] [ hide//below-md ]" style={{"--_length" : "100%"}} aria-hidden="true"></span>
            <Image dir="shared" name="cta"  widths={["1440", "768", "375"]}/>
            <div className="[ flow wrapper ] [ space-4 align-items-center direction-row//md ]">
                 <span className="[ pattern-line ] [ hide//md ]"
                       data-direction="horizontal"
                       style={{"--_length": "30%", "--_block-start": "calc(var(--space-7) * -1)"}}
                       aria-hidden="true"></span>
                <h2 className="[ title-5 ] [ measure-2 ]">We’re in be`ta. Get your invite today!</h2>
                <Button to="/coming-soon" type="link" utils="justify-self-start justify-self-end//md">Get an invite</Button>
            </div>
        </section>
    );
}