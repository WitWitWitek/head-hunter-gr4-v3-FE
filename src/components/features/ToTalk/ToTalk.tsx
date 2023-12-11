import { useSelector, useDispatch } from 'react-redux';
import { StudentCard } from '../AllStudents/StudentCard';
import { dummyStudents } from '../../../../dummyStudents';
import { removeStudentFromTalk } from '../../../app/talkStudentsSlice';
import { useNavigate } from 'react-router-dom';

const ToTalk = () => {
	const talkStudents = useSelector((state) => state.talkStudents);
	const dispatch = useDispatch();

	const studentsToTalk = dummyStudents.filter((student) =>
		talkStudents.includes(student.id)
	);

	const navigate = useNavigate();

	const handleShowCV = (id: string) => {
		navigate(`/test-hr/student-cv/${id}?fromHR=true`);
	};

	const handleNoInterest = (id: string) => {
		console.log(`Brak zainteresowania studentem o ID: ${id}`);
		dispatch(removeStudentFromTalk(id));
	};

	const handleHired = (id: string) => {
		console.log(`Zatrudniony student o ID: ${id}`);
	};

	return (
		<div>
			{studentsToTalk.map((student) => (
				<StudentCard
					key={student.id}
					student={student}
					getToTalk={() => {}}
					isInToTalk={true}
					isLast={false}
					showFullLastName={true}
					reservationDate=" 23.07.2022r"
					onShowCV={() => handleShowCV(student.id)}
					onNoInterest={() => handleNoInterest(student.id)}
					onHired={() => handleHired(student.id)}
				/>
			))}
		</div>
	);
};

export default ToTalk;
