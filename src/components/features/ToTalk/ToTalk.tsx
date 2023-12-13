import { StudentCard } from "../AllStudents/StudentCard";
import {
  useDeleteStudentFromInterviewMutation,
  useGetStudentSToInterviewMutation,
} from "../../../app/api/userApiSlice";
import { useEffect, useState } from "react";
import { IStudentData } from "../../../types/IStudentData";

const ToTalk = () => {
  const [getStudentsToInterview] = useGetStudentSToInterviewMutation();
  const [deleteStudentFromInterview] = useDeleteStudentFromInterviewMutation();
  const [students, setStudents] = useState<IStudentData[]>([]);

  useEffect(() => {
    const fetchStudentsData = async () => {
      const data = await getStudentsToInterview("").unwrap();
      setStudents(() => data.students);
    };
    fetchStudentsData();
  }, []);

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
      {students.map((student) => (
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
