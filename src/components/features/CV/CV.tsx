import styles from "./CV.module.scss";
import MainCv from "../MainCv/MainCv";
import StudentSidebar from "../StudentSidebar/StudentSidebar";
import { useGetUserDataMutation } from "../../../app/api/userApiSlice";
import { useEffect, useState } from "react";
import { IStudentData } from "../../../types/IStudentData";
import { useSelector } from "react-redux";
import { selectCurrentRole } from "../../../app/api/authSlice";
import { Spinner } from "../../ui";
const Cv = () => {
  const [getStudentData, { isLoading }] = useGetUserDataMutation();
  const [studentData, setStudentData] = useState<IStudentData>();
  const role = useSelector(selectCurrentRole);

  useEffect(() => {
    const fetchStudentData = async () => {
      if (role) {
        const studentData = await getStudentData({ role }).unwrap();
        setStudentData(() => studentData);
      }
    };
    fetchStudentData();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading && <Spinner />}
      {studentData && (
        <>
          <StudentSidebar student={studentData} />
          <MainCv student={studentData} />
        </>
      )}
    </div>
  );
};

export default Cv;
