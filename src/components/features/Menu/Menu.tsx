import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div className={styles.container}>
      <NavLink
        to="/student"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        end
      >
        Panel
      </NavLink>
      <NavLink
        to="/student/edit-cv"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Edytuj swoje CV
      </NavLink>
      <NavLink
        to="/student/view-cv"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Zobacz swoje CV
      </NavLink>
    </div>
  );
};

export default Menu;
