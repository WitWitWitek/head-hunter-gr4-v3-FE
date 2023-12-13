import { useState } from 'react';
import { Button } from '../../ui';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { StudentDetails } from '../StudentDetails/StudentDetails';
import { IStudentData } from '../../../types/IStudentData';
import styles from './StudentCard.module.scss';
import { Avatar } from '../../ui';

interface StudentProps {
	student: IStudentData;
	getToTalk?: (id: string) => void;
	isLast: boolean;
	showFullLastName?: boolean;
	reservationDate?: string;
	onShowCV?: () => void;
	onNoInterest?: () => void;
	onHired?: () => void;
	isInToTalk?: boolean;
}

export const StudentCard = ({
	student,
	getToTalk,
	isLast,
	showFullLastName,
	reservationDate,
	onShowCV,
	onNoInterest,
	onHired,
	isInToTalk,
}: StudentProps) => {
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
				{isInToTalk && <Avatar />}
				<div className={styles.studentName}>
					<p>
						{student.firstName}{' '}
						{showFullLastName ? student.lastName : student.lastName.charAt(0)}
						{!isInToTalk && '.'}
					</p>
				</div>
				<div className={styles.studentButtons}>
					{getToTalk && !isInToTalk && (
						<Button onClick={() => getToTalk(student.id)}>
							Zarezerwuj rozmowę
						</Button>
					)}

					{isInToTalk && (
						<div className={styles.studentButtons}>
							{onShowCV && <Button onClick={onShowCV}>Pokaż CV</Button>}
							{onNoInterest && (
								<Button onClick={onNoInterest}>Brak zainteresowania</Button>
							)}
							{onHired && <Button onClick={onHired}>Zatrudniony</Button>}
						</div>
					)}
				</div>
				{show ? (
					<IoIosArrowUp size={30} color="#666666" />
				) : (
					<IoIosArrowDown size={30} color="#666666" />
				)}
			</div>
			<div
				className={`${styles.separator} ${isLast ? styles.hideSeparator : ''}`}
			></div>
			{show && (
				<div className={styles.studentDetails}>
					<StudentDetails student={student} />
				</div>
			)}
		</div>
	);
};
