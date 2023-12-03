import {
	Navbar,
	AddFiles,
	AddHr,
	UserGreeting,
} from '../../components/features';
import CenterContent from '../../components/ui/Containers/CenterContent';

export const AdminView = () => {
	return (
		<div>
			<Navbar />
			<CenterContent>
				<UserGreeting />
				<AddFiles />
				<AddHr />
			</CenterContent>
		</div>
	);
};

export default AdminView;
