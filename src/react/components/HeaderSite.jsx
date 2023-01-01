import {Link, NavLink} from "react-router-dom";
import Button from "./Button.jsx";
import Logo from "./Logo.jsx";

export default function HeaderSite() {

    return (<header className="[ header-site ] [ fg-neutral-5 bg-neutral-1 ]">
        <div className="[ wrapper ]">
            <Link to="/" aria-label="homepage"><Logo/></Link>
            <Button type="hamburger" icon={{name: "hamburger", size: "2.25em"}}
                    attributes={{"aria-controls": "navigation-primary", "aria-expanded": "false", "aria-label": "menu"}}/>
            <nav id="navigation-primary">
                <ul aria-label="navigation primary" role="list">
                    <li><NavLink exact="true" to="/stories">stories</NavLink></li>
                    <li><NavLink exact="true" to="/features">features</NavLink></li>
                    <li><NavLink exact="true" to="/pricing">pricing</NavLink></li>
                    <li><Button to="/coming-soon">get an invite</Button></li>
                </ul>
            </nav>
        </div>
    </header>);
};
