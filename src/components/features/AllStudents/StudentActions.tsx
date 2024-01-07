import { Button } from '../../ui';
import styles from './StudentCard.module.scss';

interface StudentActionsProps {
	getToTalk?: (id: string) => void;
	onShowCV?: () => void;
	onNoInterest?: () => void;
	onHired?: () => void;
	studentId: string;
	isInToTalk?: boolean;
}

const StudentActions: React.FC<StudentActionsProps> = ({
	getToTalk,
	onShowCV,
	onNoInterest,
	onHired,
	studentId,
	isInToTalk,
}) => {
	return (
		<div className={styles.studentButtons}>
			{getToTalk && !isInToTalk && (
				<Button onClick={() => getToTalk(studentId)}>Zarezerwuj rozmowę</Button>
			)}
			{isInToTalk && (
				<>
					{onShowCV && <Button onClick={onShowCV}>Pokaż CV</Button>}
					{onNoInterest && (
						<Button onClick={onNoInterest}>Brak zainteresowania</Button>
					)}
					{onHired && <Button onClick={onHired}>Zatrudniony</Button>}
				</>
			)}
		</div>
	);
};

export default StudentActions;
