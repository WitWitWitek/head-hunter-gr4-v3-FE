import { Outlet } from 'react-router-dom';
import { NavbarMain, HrMenu, SearchBar } from '../../components/features';
import ContainerColumnFlex from '../../components/layout/Containers/ContainerColumnFlex';
export const HrView = () => {
	return (
		<div>
			<NavbarMain />
			<ContainerColumnFlex>
				<HrMenu />
				<SearchBar />
				<Outlet />
			</ContainerColumnFlex>
		</div>
	);
};
