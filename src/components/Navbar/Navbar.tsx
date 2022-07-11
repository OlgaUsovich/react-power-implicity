import "./index.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg"

function Navbar() {
    return (
        <header className="navbar">
            <Logo />
            <button className="navbar__burger">
            <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 19H38V22H14V19ZM14 26.5H38V29.5H14V26.5ZM14 34H38V37H14V34Z" fill="white" />
            </svg>
            </button>
            <ul className="navbar__links">
                <li><a className="navbar__link" href="#">Partners</a></li>
                <li><a className="navbar__link" href="#">Stories</a></li>
                <li><a className="navbar__link" href="#">Features</a></li>
            </ul>
            <a className="navbar__button" href="#">Download for free</a>
        </header>
    );
}

export { Navbar };