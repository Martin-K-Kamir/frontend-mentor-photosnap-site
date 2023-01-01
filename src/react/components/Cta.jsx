import Image from "./Image.jsx";
import Button from "./Button";

export default function Cta() {
    return (
        <div className="[ stacked ] [ fg-neutral-1 bg-neutral-5 ]">
            <Image dir="shared" name="cta" widths={["1440", "768", "375"]}/>
            <div className="[ flow wrapper ] [ items-align-center direction-row//md ]">
                <h2 className="title-5">We’re in beta. Get your invite today!</h2>
                <Button to="/coming-soon" type="link">Get an invite</Button>
            </div>
        </div>
    );
}