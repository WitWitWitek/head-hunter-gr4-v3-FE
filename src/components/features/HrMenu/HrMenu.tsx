import styles from "./HrMenu.module.scss";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div className={styles.container}>
      <NavLink
        to="/hr"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        end
      >
        Dostępni kursanci
      </NavLink>
      <NavLink
        to="/hr/to-talk"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Do rozmowy
      </NavLink>
    </div>
  );
};

export default Menu;
