import {Link, NavLink} from "react-router-dom";
import Button from "./Button.jsx";
import Logo from "./Logo.jsx";

export default function FooterSite() {

    return (<footer className="[ footer-site ] [ fg-neutral-1 bg-neutral-5 ]">
        <div className="wrapper">
            <Link to="/" aria-label="homepage"><Logo/></Link>
            <nav id="navigation-footer">
                <ul aria-label="navigation footer" role="list">
                    <li><NavLink exact="true" to="/">home</NavLink></li>
                    <li><NavLink exact="true" to="/stories">stories</NavLink></li>
                    <li><NavLink exact="true" to="/features">features</NavLink></li>
                    <li><NavLink exact="true" to="/pricing">pricing</NavLink></li>
                </ul>
            </nav>
            <nav id="navigation-socials">
                <ul aria-label="navigation socials" role="list">
                    <li><Button href="https://martinkamir.com/" type="icon" icon={{name: "mkk", size: "1.7em"}} attributes={{"aria-label": "author's website"}}/></li>
                    <li><Button href="https://github.com/Martin-K-Kamir/" type="icon" icon={{name: "github", size: "1.7em"}} attributes={{"aria-label": "github"}}/></li>
                    <li><Button href="https://www.linkedin.com/in/martin-kam%C3%ADr-2967aa222/" type="icon" icon={{name: "linkedin", size: "1.7em"}} attributes={{"aria-label": "linkedin"}}/></li>
                    <li><Button href="https://www.facebook.com/" type="icon" icon={{name: "facebook", size: "1.7em"}} attributes={{"aria-label": "facebook"}}/></li>
                    <li><Button href="https://www.instagram.com//" type="icon" icon={{name: "instagram", size: "1.7em"}} attributes={{"aria-label": "instagram"}}/></li>
                </ul>
            </nav>
            <Button to="/coming-soon" type="link" >Get an invite</Button>
            <p className="fs-1 fg-neutral-3">Challenge by Frontend Mentor. Coded by Martin Kamír.<br/>Copyright 2019. All Rights Reserved</p>
        </div>
    </footer>);
};
