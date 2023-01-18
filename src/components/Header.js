import icon from '../media/potato.png';
import {Link} from "react-router-dom";
import "../styles/Header.scss";
import Chip from '@mui/material/Chip';
import truncateEthAddress from 'truncate-eth-address'

const Header = ({ session, signOut }) => {

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
        <Chip label={truncateEthAddress(session.address)} color="primary" />
        <Chip label="Disconnect" onClick={signOut} color="primary"/>
      </header>
    )
}

export default Header;