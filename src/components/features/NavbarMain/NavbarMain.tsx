import { Link } from "react-router-dom";
import styles from "./NavbarMain.module.scss";
import logo from "../../../assets/images/logoMegaK.webp";
import { Avatar, Button, Text } from "../../ui";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useState } from "react";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import { selectCurrentRole, selectUserData } from "../../../app/api/authSlice";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const role = useSelector(selectCurrentRole);
  const userData = useSelector(selectUserData);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
		<nav className={styles.themeBgDark3}>
			<div className={styles.navContainer}>
				<Link to={`${role ? '/' + role : '/'}`} className="navbar-brand">
					<img src={logo} alt="Logo MegaK" className={styles.logo} />
				</Link>
				<div className={styles.container}>
					<Avatar githubUsername={userData?.github ?? undefined} />
					<Text weight="bold" color="white">
						{userData?.email}
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
								<Button fullWidth={true} onClick={toggleDropdown}>
									<Link to={`/${role}/settings`}>Ustawienia konta</Link>
								</Button>
								<LogoutButton />
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavbarMain;
