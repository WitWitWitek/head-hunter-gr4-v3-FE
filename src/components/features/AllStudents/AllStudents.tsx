import { useEffect, useState } from "react";
import { StudentCard } from "./StudentCard";
import { Pagination } from "../Pagination/Pagination";
import {
  useAddStudentToInterviewMutation,
  useGetAllStudentsToHrMutation,
} from "../../../app/api/userApiSlice";
import { IStudentData } from "../../../types/IStudentData";
import Searchbar from "../Searchbar/Searchbar";
import { StudentQueryValues } from "../../../types/StudentFormType";
import { FormValues } from "../Filter/FilterDialog";
import { transformQueryParams } from "../../../utils/transformQueryParams";

const AllStudents = () => {
  const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);
  const [queryParams, setQueryParams] = useState<StudentQueryValues>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [students, setStudents] = useState<IStudentData[]>([]);
  const [lastPage, setLastPage] = useState(1);

  const [getStudentsToHr] = useGetAllStudentsToHrMutation();
  const [addStudentToTalk] = useAddStudentToInterviewMutation();

  useEffect(() => {
    const fetchStudentsData = async () => {
      const data = await getStudentsToHr({
        page: currentPage,
        limit: itemsPerPage,
        queryParams,
        search: searchQuery,
      }).unwrap();
      setStudents(() => data.students);
      setLastPage(() => data.lastPage);
    };
    fetchStudentsData();
  }, [currentPage, itemsPerPage, queryParams, searchQuery]);

  const getToTalk = async (id: string) => {
    await addStudentToTalk({ studentId: id });
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const changeItemsPerPage = (number: number) => {
    setItemsPerPage(number);
    setCurrentPage(() => 1);
  };

  const filterStudentWithQueryParams = (params: FormValues) => {
    const transformedParams = transformQueryParams(params);
    setQueryParams(() => transformedParams);
  };

  const filterStudentWithSearchQuery = (text: string) =>
    setSearchQuery(() => text);

  return (
    <>
      <Searchbar
        setQueryParams={filterStudentWithQueryParams}
        setSearchQuery={filterStudentWithSearchQuery}
      />
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
