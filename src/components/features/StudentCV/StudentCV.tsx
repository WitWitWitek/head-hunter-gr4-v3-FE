import { useParams } from "react-router-dom";
import styles from "./StudentCV.module.scss";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import MainCv from "../MainCv/MainCv";
import { dummyStudents } from "../../../assets/exampleFiles/dummyStudents";
import NavbarMain from "../NavbarMain/NavbarMain";
import { BackwardsBtn } from "../../ui";
import { useLocation } from "react-router-dom";

interface IStudentCVProps {
  onNoInterest: () => void;
  onHired: () => void;
}

const StudentCV = ({ onNoInterest, onHired }: IStudentCVProps) => {
  const { studentId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fromHR = queryParams.get("fromHR") === "true";

  const student = dummyStudents.find((student) => student.id === studentId);

  if (!student) {
    return <div>Nie znaleziono studenta</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <NavbarMain />
      </div>
      <div className={styles.content}>
        <StudentSidebar
          student={student}
          fromHR={fromHR}
          onNoInterest={onNoInterest}
          onHired={onHired}
        />
        <MainCv student={student} />
        <div className={styles.backwardsBtn}>
          <BackwardsBtn />
        </div>
      </div>
    </div>
  );
};

export default StudentCV;
