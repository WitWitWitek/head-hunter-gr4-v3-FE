import { IStudentData } from './IStudentData';
export interface StudentProps {
	student: IStudentData;
	getToTalk?: (id: string) => void;
	isLast: boolean;
	showFullLastName?: boolean;
	reservationDate?: string;
	onShowCV?: () => void;
	onNoInterest?: () => void;
	onHired?: () => void;
	isInToTalk?: boolean;
}
