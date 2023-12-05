import { FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Avatar } from '../../ui';
import styles from './StudentBio.module.scss';
import { IStudentData } from '../../../types/IStudentData';
interface StudentBioProps {
	student: IStudentData;
}
const StudentBio = ({ student }: StudentBioProps) => {
	const { firstName, lastName, email, tel, githubUsername, bio } = student;

	return (
		<div className={styles.contactInfo}>
			<Avatar type="large" />
			<div className={styles.cvUser}>
				<p>
					{firstName} {lastName}
				</p>
				<p>
					<FaGithub size={28} />
					{githubUsername}
				</p>
			</div>
			<div className={styles.cvContact}>
				<p>
					<FaPhone size={20} color="#4D4D4D" />
					<span>{tel}</span>
				</p>
				<p>
					<FaEnvelope size={20} color="#4D4D4D" />
					<span>{email}</span>
				</p>
			</div>
			<div className={styles.cvAbout}>
				<p>O mnie</p>
				<p>{bio}</p>
			</div>
		</div>
	);
};

export default StudentBio;
