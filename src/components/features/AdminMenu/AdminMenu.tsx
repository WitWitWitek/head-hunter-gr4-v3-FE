import styles from './../Menu/Menu.module.scss';
import { NavLink } from 'react-router-dom';
const AdminMenu = () => {
	return (
		<div className={styles.container}>
			<NavLink
				to="/admin"
				className={({ isActive }) =>
					isActive ? styles.activeLink : styles.link
				}
				end
			>
				Panel
			</NavLink>
			<NavLink
				to="/admin/add-students"
				className={({ isActive }) =>
					isActive ? styles.activeLink : styles.link
				}
			>
				Dodaj kursantów
			</NavLink>
			<NavLink
				to="/admin/add-hr"
				className={({ isActive }) =>
					isActive ? styles.activeLink : styles.link
				}
			>
				Dodaj HR
			</NavLink>
		</div>
	);
};

export default AdminMenu;
