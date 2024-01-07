import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { StudentDetails } from '../StudentDetails/StudentDetails';
import StudentInfo from './StudentInfo';
import StudentActions from './StudentActions';
import styles from './StudentCard.module.scss';
import { StudentProps } from '../../../types/allStudents';

export const StudentCard: React.FC<StudentProps> = ({
	student,
	getToTalk,
	isLast,
	showFullLastName,
	reservationDate,
	onShowCV,
	onNoInterest,
	onHired,
	isInToTalk,
}) => {
	const [show, setShow] = useState(false);

	const toggleDropdown = () => setShow(!show);

	return (
		<div className={styles.container}>
			<div className={styles.studentCard} onClick={toggleDropdown}>
				{reservationDate && isInToTalk && (
					<div className={styles.reservation}>
						<span>Rezerwacja do</span>
						<span>{reservationDate}</span>
					</div>
				)}
				<StudentInfo
					student={student}
					showFullLastName={showFullLastName}
					isInToTalk={isInToTalk}
				/>
				<StudentActions
					getToTalk={getToTalk}
					onShowCV={onShowCV}
					onNoInterest={onNoInterest}
					onHired={onHired}
					studentId={student.id}
					isInToTalk={isInToTalk}
				/>
				{show ? (
					<IoIosArrowUp size={30} color="#666666" />
				) : (
					<IoIosArrowDown size={30} color="#666666" />
				)}
			</div>
			<div
				className={`${styles.separator} ${isLast ? styles.hideSeparator : ''}`}
			>
				{' '}
				{show && <StudentDetails student={student} />}
			</div>
		</div>
	);
};

export default StudentCard;
