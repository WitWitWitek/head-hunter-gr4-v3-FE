import { ExtendedStudentType } from "../../../types/createStudentType";
import styles from "./StudentsTable.module.scss";
import {
	BsFillQuestionSquareFill,
	BsFillXSquareFill,
	BsFillCheckSquareFill,
} from 'react-icons/bs';

type Props = {
	students: ExtendedStudentType[];
};

export default function StudentsTable({ students }: Props) {
	const getStatusIcon = (statusMessage: string) => {
		if (statusMessage === 'OK') {
			return (
				<BsFillCheckSquareFill
					style={{ color: '#7ADE7B', marginLeft: '5px', margin: '5px' }}
				/>
			);
		} else if (statusMessage.includes('Internal server error')) {
			return (
				<BsFillXSquareFill
					style={{ color: '#e02635', marginLeft: '5px', marginTop: '5px' }}
				/>
			);
		} else {
			return (
				<BsFillQuestionSquareFill
					style={{ color: '#0b8bd4', marginLeft: '5px', marginTop: '5px' }}
				/>
			);
		}
	};

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>Lp.</th>
					<th>E-mail</th>
					<th>courseCompletion</th>
					<th>courseEngagement</th>
					<th>projectDegree</th>
					<th>teamProjectDegree</th>
				</tr>
			</thead>
			<tbody>
				{students.map((student, index) => (
					<>
						<tr key={student.email}>
							<td rowSpan={2}>{index + 1}</td>
							<td>{student.email}</td>
							<td>{student.courseCompletion}</td>
							<td>{student.courseEngagement}</td>
							<td>{student.projectDegree}</td>
							<td>{student.teamProjectDegree}</td>
						</tr>
						<tr key={student.bonusProjectUrls + student.email}>
							<td colSpan={5}>
								<b>Status:</b> {student.status}
								{getStatusIcon(student.status)}
							</td>
						</tr>
					</>
				))}
			</tbody>
		</table>
	);
}
