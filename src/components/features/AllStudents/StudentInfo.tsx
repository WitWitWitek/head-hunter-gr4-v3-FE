import { IStudentData } from '../../../types/IStudentData';
import { Avatar } from '../../ui';
import styles from './StudentCard.module.scss';

interface StudentInfoProps {
	student: IStudentData;
	showFullLastName?: boolean;
	isInToTalk?: boolean;
}

const StudentInfo: React.FC<StudentInfoProps> = ({
	student,
	showFullLastName,
	isInToTalk,
}) => {
	return (
		<div className={styles.studentName}>
			{isInToTalk && <Avatar />}
			<p>
				{student.firstName}{' '}
				{showFullLastName ? student.lastName : `${student.lastName.charAt(0)}.`}
			</p>
		</div>
	);
};

export default StudentInfo;
