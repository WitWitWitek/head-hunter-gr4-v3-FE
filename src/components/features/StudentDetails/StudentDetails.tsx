import styles from './StudentDetails.module.scss';
interface StudentDetailsProps {
	student: Student;
}

interface Student {
	courseCompletion: number;
	courseEngagement: number;
	projectDegree: number;
	teamProjectDegree: number;
	expectedTypeWork: string;
	targetWorkCity: string;
	expectedContractType: string;
	expectedSalary: string;
	canTakeApprenticeship: boolean;
	monthsOfCommercialExp: number;
}

export const StudentDetails = ({ student }: StudentDetailsProps) => {
	return (
		<div className={styles.description}>
			<div className={styles.descriptionItem}>
				<p>Ocena przejścia kursu</p>
				<p>
					<strong>{student.courseCompletion}</strong>/5
				</p>
			</div>
			<div className={styles.descriptionItem}>
				<p>Ocena aktywności i zaangażowania na kursie</p>
				<p>
					<strong>{student.courseEngagement}</strong>/5
				</p>
			</div>
			<div className={styles.descriptionItem}>
				<p>Ocena kodu w projekcie własnym</p>
				<p>
					<strong>{student.projectDegree}</strong>/5
				</p>
			</div>
			<div className={styles.descriptionItem}>
				<p>Ocena pracy w zespole Scrum</p>
				<p>
					<strong>{student.teamProjectDegree}</strong>/5
				</p>
			</div>
			<div className={styles.descriptionItem}>
				<p>Preferowane miejsce pracy</p>
				<p>
					<strong>{student.expectedTypeWork}</strong>
				</p>
			</div>
			<div className={styles.descriptionItem}>
				<p>Docelowe miasto, gdzie chce pracować kandydat</p>
				<p>
					<strong>{student.targetWorkCity}</strong>
				</p>
			</div>
			<div className={styles.descriptionItem}>
				<p>Oczekiwany typ kontraktu</p>
				<p>
					<strong>{student.expectedContractType}</strong>
				</p>
			</div>
			<div className={styles.descriptionItem}>
				<p>Oczekiwane wynagrodzenie miesięczne netto</p>
				<p>
					<strong>
						{student.expectedSalary != null
							? `${student.expectedSalary} zł`
							: 'Nie podano'}
					</strong>
				</p>
			</div>
			<div className={styles.descriptionItem}>
				<p>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</p>
				<p>
					<strong>{student.canTakeApprenticeship ? 'Tak' : 'Nie'}</strong>
				</p>
			</div>
			<div className={styles.descriptionItem}>
				<p>Komercyjne doświadczenie w programowaniu</p>
				<p>
					<strong>{student.monthsOfCommercialExp}</strong> miesięcy
				</p>
			</div>
		</div>
	);
};
