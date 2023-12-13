import { useEffect, useState } from "react";
import { StudentCard } from "./StudentCard";
import { Pagination } from "../Pagination/Pagination";
import {
  useAddStudentToInterviewMutation,
  useGetAllStudentsToHrMutation,
} from "../../../app/api/userApiSlice";
import { IStudentData } from "../../../types/IStudentData";

const AllStudents = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [students, setStudents] = useState<IStudentData[]>([]);
  const [lastPage, setLastPage] = useState<number>(1);
  const [getStudentsToHr] = useGetAllStudentsToHrMutation();
  const [addStudentToTalk] = useAddStudentToInterviewMutation();

  useEffect(() => {
    const fetchStudentsData = async () => {
      const data = await getStudentsToHr({
        page: currentPage,
        limit: itemsPerPage,
      }).unwrap();
      setStudents(() => data.students);
      setLastPage(() => data.lastPage);
    };
    fetchStudentsData();
  }, [currentPage, itemsPerPage]);

  const getToTalk = async (id: string) => {
    await addStudentToTalk({ studentId: id });
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const changeItemsPerPage = (number: number) => {
    setItemsPerPage(number);
    setCurrentPage(() => 1);
  };

  return (
    <>
      <div>
        {students.map((student, index) => (
          <StudentCard
            key={student.id}
            student={student}
            getToTalk={getToTalk}
            isLast={index === students.length - 1}
          />
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        lastPage={lastPage}
        paginate={paginate}
        changeItemsPerPage={changeItemsPerPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default AllStudents;
