import { Outlet } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import { Menu } from '../../components/features';
import { hrLinks } from '../../constants/menuLinks';

export const HrView = () => {
	return (
		<MainLayout viewComponent={<Menu links={hrLinks} />}>
			<Outlet />
		</MainLayout>
	);
};

export default HrView;
