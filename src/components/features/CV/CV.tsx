import styles from './CV.module.scss';
import MainCv from '../MainCv/MainCv';
import StudentSidebar from '../StudentSidebar/StudentSidebar';
import { dummyStudent } from '../../../../dummyStudent';
const Cv = () => {
	return (
		<div className={styles.container}>
			<StudentSidebar student={dummyStudent} />
			<MainCv student={dummyStudent} />
		</div>
	);
};

export default Cv;
