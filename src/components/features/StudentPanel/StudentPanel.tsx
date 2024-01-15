import { Link } from "react-router-dom";
import { Button } from "../../ui";
import styles from "./StudentPanel.module.scss";
import { useSelector } from "react-redux";
import { selectUserData } from "../../../app/api/authSlice";

const StudentPanel = () => {
  const userData = useSelector(selectUserData);
  return (
    <div className={styles.container}>
      <h1>Witaj, {userData?.username}</h1>
      <div>
        <Link to="/student/edit-cv" style={{ textDecoration: "none" }}>
          <Button fullWidth>Edytuj swoje CV</Button>
        </Link>
        <Link to="/student/view-cv" style={{ textDecoration: "none" }}>
          <Button fullWidth>Zobacz swoje CV</Button>
        </Link>
      </div>
    </div>
  );
};

export default StudentPanel;
