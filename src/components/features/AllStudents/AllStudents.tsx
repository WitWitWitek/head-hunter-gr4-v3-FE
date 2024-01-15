import { useEffect, useState } from "react";
import { StudentCard } from "./StudentCard";
import { Pagination } from "../Pagination/Pagination";
import {
  useAddStudentToInterviewMutation,
  useGetAllStudentsToHrQuery,
} from "../../../app/api/hrApiSlice";
import Searchbar from "../Searchbar/Searchbar";
import { StudentQueryValues } from "../../../types/StudentFormType";
import { FormValues } from "../Filter/FilterDialog";
import { transformQueryParams } from "../../../utils/transformQueryParams";
import { Spinner } from "../../ui";

const AllStudents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [queryParams, setQueryParams] = useState<StudentQueryValues>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [lastPage, setLastPage] = useState(1);

  const { data: studentsData, isLoading } = useGetAllStudentsToHrQuery({
    page: currentPage,
    limit: itemsPerPage,
    queryParams,
    search: searchQuery,
  });

  const [addStudentToTalk] = useAddStudentToInterviewMutation();

  useEffect(() => {
    if (studentsData) {
      setLastPage(() => studentsData.lastPage);
    }
  }, [studentsData]);

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

  if (isLoading) return <Spinner />;

  return (
    <>
      <Searchbar
        setQueryParams={filterStudentWithQueryParams}
        setSearchQuery={filterStudentWithSearchQuery}
      />
      <div>
        {studentsData &&
          studentsData.students.map((student, index) => (
            <StudentCard
              key={student.id}
              student={student}
              getToTalk={getToTalk}
              isLast={index === studentsData.students.length - 1}
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
