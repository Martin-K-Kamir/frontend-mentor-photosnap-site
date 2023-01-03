import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import Button from "./Button.jsx";
import Logo from "./Logo.jsx";

export default function HeaderSite() {
    const [navOpen, setNavOpen] = useState(false);

    function handleToggleNav() {
        setNavOpen(!navOpen);
    }

    return (<header className="[ header-site ] [ fg-neutral-5 bg-neutral-1 ]">
        <div className="[ header-site__container ] [ wrapper ] [ direction-row justify-between items-align-center ]">
            <Link to="/" aria-label="homepage"><Logo/></Link>
            <Button onClick={handleToggleNav} type="hamburger" icon={{name: navOpen ? "close" : "hamburger"}}
                    attributes={{"aria-controls": "navigation-primary", "aria-expanded": navOpen, "aria-label": "menu"}}/>
            <nav id="navigation-primary" data-open={navOpen}>
                <ul aria-label="navigation primary" className="[ flow ] [ bg-neutral-1 items-justify-center items-align-center//md direction-row//md ]" role="list">
                    <li className="[ title-2 ] [ text-uppercase ]"><NavLink exact="true" to="/stories">stories</NavLink></li>
                    <li className="[ title-2 ] [ text-uppercase ]"><NavLink exact="true" to="/features">features</NavLink></li >
                    <li className="[ title-2 ] [ text-uppercase ]"><NavLink exact="true" to="/pricing">pricing</NavLink></li>
                    <span className="[ divide ] [ hide//md ]" aria-hidden="true"></span>
                    <li className="hide//md"><Button to="/coming-soon">get an invite</Button></li>
                </ul>
            </nav>
            <Button to="/coming-soon" utils="hide//below-md">get an invite</Button>
        </div>
    </header>);
};
