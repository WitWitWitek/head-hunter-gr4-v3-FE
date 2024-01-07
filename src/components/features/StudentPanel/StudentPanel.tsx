import { Link } from "react-router-dom";
import { Button } from "../../ui";
import styles from "./StudentPanel.module.scss";
import { dummyStudent } from '../../../assets/exampleFiles/dummyStudent';

// dla HR nie bedzie przy podgladzie cv widac tego gornego panelu z menu
const StudentPanel = () => {
  const { firstName, lastName } = dummyStudent;
  // dane z API
  return (
    <div className={styles.container}>
      <h1>
        Witaj, {firstName} {lastName}
      </h1>
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
