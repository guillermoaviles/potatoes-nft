import icon from '../media/potato.png';
import {Link} from "react-router-dom";
import "../styles/Header.scss";


const Header = () => {

    return (
      <header className="navbar">
        <Link to='/' className="nav-logo-container">
            <img
                src={icon}
                alt="logo"
                className="nav-logo"
            ></img>
        </Link>
        <div className="nav-title-container">
            <h1>
                Potatoes
            </h1>
        </div>
      </header>
    )
}

export default Header;