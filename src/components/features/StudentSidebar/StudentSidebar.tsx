import styles from './StudentSidebar.module.scss';
import StudentBio from '../StudentBio/StudentBio';
import { IStudentData } from '../../../types/IStudentData';
import { Button } from '../../ui';

interface IStudentSidebar {
	student: IStudentData;
	fromHR?: boolean;
	onNoInterest?: () => void;
	onHired?: () => void;
}
const StudentSidebar = ({
	student,
	fromHR = false,
	onNoInterest,
	onHired,
}: IStudentSidebar) => {
	return (
		<div className={styles.sidebar}>
			<StudentBio student={student} />
			{fromHR && (
				<>
					<Button fullWidth onClick={onHired}>
						Zatrudniony
					</Button>
					<Button fullWidth onClick={onNoInterest}>
						Brak zainteresowania
					</Button>
				</>
			)}
		</div>
	);
};


export default StudentSidebar;
