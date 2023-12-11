import { useState } from 'react';
import { StudentCard } from './StudentCard';
import { dummyStudents } from '../../../../dummyStudents';
import { Pagination } from '../Pagination/Pagination';
import { useDispatch } from 'react-redux';
import { addStudentToTalk } from '../../../app/talkStudentsSlice';

const AllStudents = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [itemsPerPage, setItemsPerPage] = useState<number>(10);

	const dispatch = useDispatch();

	const getToTalk = (id: string) => {
		dispatch(addStudentToTalk(id));
		console.log(`Zarezerwowano rozmowę ze studentem o ID: ${id}`);
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = dummyStudents.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
	const changeItemsPerPage = (number: number) => setItemsPerPage(number);

	return (
		<>
			<div>
				{currentItems.map((student, index) => (
					<StudentCard
						key={student.id}
						student={student}
						getToTalk={getToTalk}
						isLast={index === currentItems.length - 1}
					/>
				))}
			</div>
			<Pagination
				itemsPerPage={itemsPerPage}
				totalItems={dummyStudents.length}
				paginate={paginate}
				changeItemsPerPage={changeItemsPerPage}
				currentPage={currentPage}
			/>
		</>
	);
};

export default AllStudents;
