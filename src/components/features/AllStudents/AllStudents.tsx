import { useEffect, useState } from "react";
import { StudentCard } from "./StudentCard";
import { dummyStudents } from "../../../../dummyStudents";
import { Pagination } from "../Pagination/Pagination";
import { useDispatch } from "react-redux";
import { addStudentToTalk } from "../../../app/talkStudentsSlice";
import { useGetAllStudentsToHrMutation } from "../../../app/api/userApiSlice";
import { IStudentData } from "../../../types/IStudentData";

const AllStudents = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [students, setStudents] = useState<IStudentData[]>([]);
  const [getStudentsToHr] = useGetAllStudentsToHrMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStudentsData = async () => {
      const data = await getStudentsToHr({
        page: currentPage,
        limit: itemsPerPage,
      }).unwrap();
      setStudents(() => data.students);
    };
    fetchStudentsData();
  }, [currentPage, itemsPerPage]);

  const getToTalk = (id: string) => {
    dispatch(addStudentToTalk(id));
    console.log(`Zarezerwowano rozmowę ze studentem o ID: ${id}`);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const changeItemsPerPage = (number: number) => setItemsPerPage(number);

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
        totalItems={students.length}
        paginate={paginate}
        changeItemsPerPage={changeItemsPerPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default AllStudents;
