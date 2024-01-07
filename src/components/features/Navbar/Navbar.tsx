import { Link } from "react-router-dom";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import styles from "./Navbar.module.scss";
import logo from "../../../assets/images/logoMegaK.webp";

const Navbar = () => {
  return (
    <nav className={styles.themeBgDark3}>
      <div className={styles.navContainer}>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo MegaK" className={styles.logo} />
        </Link>
        <div className={styles.logoutContainer}>
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
