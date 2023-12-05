import styles from './StudentSidebar.module.scss';
import StudentBio from '../StudentBio/StudentBio';
import { IStudentData } from '../../../types/IStudentData';

interface IStudentSidebar {
	student: IStudentData;
}
const StudentSidebar = ({ student }: IStudentSidebar) => {
	return (
		<div className={styles.sidebar}>
			<StudentBio student={student} />
			{/* dla hr beda tu renderowane przyciski - brak zainteresowania oraz zatrudniony */}
		</div>
	);
};

export default StudentSidebar;
