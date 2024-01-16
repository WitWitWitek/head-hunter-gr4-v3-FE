import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/features';
import AdminMenu from '../../components/features/AdminMenu/AdminMenu';
import ContainerColumnFlex from '../../components/layout/Containers/ContainerColumnFlex';

export const AdminView = () => {
	return (
		<div>
			<Navbar />
			<ContainerColumnFlex>
				<AdminMenu />
				<Outlet />
			</ContainerColumnFlex>
		</div>
	);
};

export default AdminView;
