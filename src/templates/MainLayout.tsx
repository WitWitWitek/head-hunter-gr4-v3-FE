import React, { ReactNode } from 'react';
import { NavbarMain } from '../components/features';
import ContainerColumnFlex from '../components/layout/Containers/ContainerColumnFlex';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
	viewComponent: ReactNode;
	children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ viewComponent, children }) => {
	return (
		<div className={styles.container}>
			<NavbarMain />
			<ContainerColumnFlex>
				{viewComponent}
				{children}
			</ContainerColumnFlex>
		</div>
	);
};

export default MainLayout;
