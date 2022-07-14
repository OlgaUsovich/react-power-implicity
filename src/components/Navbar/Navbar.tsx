import "./index.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as Burger } from "../../assets/burger-menu.svg"

const Navbar = () => {
    return (
        <header className="navbar">
            <Logo />
            <button className="navbar__burger">
            <Burger />
            </button>
            <ul className="navbar__links">
                <li><a className="navbar__link" href="/">Partners</a></li>
                <li><a className="navbar__link" href="/">Stories</a></li>
                <li><a className="navbar__link" href="/">Features</a></li>
            </ul>
            <a className="navbar__button" href="/">Download for free</a>
        </header>
    );
}

export { Navbar };