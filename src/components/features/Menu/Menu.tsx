import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

type MenuLink = {
	to: string;
	label: string;
	exact?: boolean;
};
type MenuProps = {
	links: MenuLink[];
};

const Menu: React.FC<MenuProps> = ({ links }) => {
	return (
		<div className={styles.container}>
			{links.map((link, index) => (
				<NavLink
					key={index}
					to={link.to}
					end={link.exact}
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.link
					}
				>
					{link.label}
				</NavLink>
			))}
		</div>
	);
};

export default Menu;
