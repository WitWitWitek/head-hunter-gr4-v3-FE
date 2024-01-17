import { Outlet } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import { Menu } from '../../components/features';
import { adminLinks } from '../../constants/menuLinks';

export const AdminView = () => {
	return (
		<MainLayout viewComponent={<Menu links={adminLinks} />}>
			<Outlet />
		</MainLayout>
	);
};

export default AdminView;
