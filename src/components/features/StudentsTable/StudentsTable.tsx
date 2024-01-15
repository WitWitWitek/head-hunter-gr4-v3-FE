import { ExtendedStudentType } from "../../../types/createStudentType";
import styles from "./StudentsTable.module.scss";

type Props = {
  students: ExtendedStudentType[];
};

export default function StudentsTable({ students }: Props) {
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
              <td colSpan={6}>
                <b>Status:</b> {student.status}
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
}
