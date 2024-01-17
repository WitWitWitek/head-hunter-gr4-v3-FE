import { Outlet } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import { Menu } from '../../components/features';
import { studentLinks } from '../../constants/menuLinks';

export const StudentView = () => {
	return (
		<MainLayout viewComponent={<Menu links={studentLinks} />}>
			<Outlet />
		</MainLayout>
	);
};

export default StudentView;
