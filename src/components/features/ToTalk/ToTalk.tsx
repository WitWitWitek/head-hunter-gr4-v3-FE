import { StudentCard } from "../AllStudents/StudentCard";
import {
  useDeleteStudentFromInterviewMutation,
  useGetStudentSToInterviewQuery,
} from "../../../app/api/userApiSlice";

const ToTalk = () => {
  const { data: studentsData } = useGetStudentSToInterviewQuery("");
  const [deleteStudentFromInterview] = useDeleteStudentFromInterviewMutation();

  //   const navigate = useNavigate();
  const handleShowCV = () => {
    // navigate(`/test-hr/student-cv/${id}?fromHR=true`);
  };

  const handleNoInterest = async (id: string) => {
    await deleteStudentFromInterview({ studentId: id });
  };

  const handleHired = (id: string) => {
    console.log(`Zatrudniony student o ID: ${id}`);
  };

  return (
    <div>
      {studentsData &&
        studentsData.students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            getToTalk={() => {}}
            isInToTalk={true}
            isLast={false}
            showFullLastName={true}
            reservationDate=" 23.07.2022r"
            onShowCV={() => handleShowCV()}
            onNoInterest={() => handleNoInterest(student.id)}
            onHired={() => handleHired(student.id)}
          />
        ))}
    </div>
  );
};

export default ToTalk;
