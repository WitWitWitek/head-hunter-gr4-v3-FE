import { Link } from 'react-router-dom';
import styles from './NavbarMain.module.scss';
import logo from '../../../assets/images/logoMegaK.webp';
import { Avatar, Button, Text } from '../../ui';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { useState } from 'react';
import { LogoutButton } from '../LogoutButton/LogoutButton';
import { dummyStudent } from '../../../../dummyStudent';

const NavbarMain = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { firstName, lastName } = dummyStudent;
	// dane z API
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	return (
		<nav className={styles.themeBgDark3}>
			<div className={styles.navContainer}>
				<Link to="/" className="navbar-brand">
					<img src={logo} alt="Logo MegaK" className={styles.logo} />
				</Link>
				<div className={styles.container}>
					<Avatar />
					<Text weight="bold" color="white">
						{firstName} {lastName}
					</Text>
					<div className={styles.dropdown}>
						<button className={styles.button} onClick={toggleDropdown}>
							{isDropdownOpen ? (
								<TiArrowSortedUp size={'20px'} color={'white'} />
							) : (
								<TiArrowSortedDown size={'20px'} color={'white'} />
							)}
						</button>
						{isDropdownOpen && (
							<div
								className={`${styles.dropdownContent} ${
									isDropdownOpen ? styles.show : ''
								}`}
							>
								<Button fullWidth={true}>
									<Link to="/settings">Ustawienia konta</Link>
								</Button>
								{/* strona z ustawieniami - zmiana hasła do konta */}
								<LogoutButton />
								{/* na klik akcja wylogowania */}
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavbarMain;
