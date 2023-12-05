import { Outlet } from 'react-router-dom';
import { Menu, NavbarMain } from '../../components/features';
import ContainerColumnFlex from '../../components/layout/Containers/ContainerColumnFlex';
import styles from './StudentView.module.scss';

export const StudentView = () => {
	return (
		<div className={styles.container}>
			<NavbarMain />
			<ContainerColumnFlex>
				<Menu />
				<Outlet />
			</ContainerColumnFlex>
		</div>
	);
};
