import { Link } from 'react-router-dom';
import { Button } from '../../ui';
import styles from './AdminPanel.module.scss';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../app/api/authSlice';

const AdminPanel = () => {
	const userData = useSelector(selectUserData);
	return (
		<div className={styles.container}>
			<h1>Witaj, {userData?.username}</h1>
			<div className={styles.textContent}>
				<p>
					Użyj poniższych przycisków lub menu by zarządzać kursantami i zespołem
					HR. Możesz łatwo importować kursantów używając plików CSV/JSON, a
					także dodawać członków HR indywidualnie.
				</p>
			</div>
			<div>
				<Link to="/admin/add-students" style={{ textDecoration: 'none' }}>
					<Button fullWidth>Dodaj kursantów</Button>
				</Link>
				<Link to="/admin/add-hr" style={{ textDecoration: 'none' }}>
					<Button fullWidth>Dodaj HR</Button>
				</Link>
			</div>
		</div>
	);
};

export default AdminPanel;
