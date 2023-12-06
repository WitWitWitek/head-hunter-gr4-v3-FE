import { ReactNode } from 'react';
import styles from './CvDegrees.module.scss';
import { FaStar } from 'react-icons/fa';

interface Props {
	title: string;
	degree: number;
	children?: ReactNode;
}

const CvDegrees = (props: Props) => {
	const redStars = [];
	const greyStars = [];

	for (let i = 0; i < props.degree; i++) {
		redStars.push(
			<FaStar size={20} key={i} className={styles.starRed}></FaStar>
		);
	}

	for (let i = 0; i < 5 - props.degree; i++) {
		greyStars.push(
			<FaStar size={20} key={i} className={styles.starGrey}></FaStar>
		);
	}

	return (
		<>
			<div className={styles.details}>
				<p className={styles.title}>{props.title}</p>
				<p className={styles.degree}>
					<span className={styles.points}>{props.degree}&nbsp;</span>{' '}
					<span className={styles.maxPoints}>/5</span>
					{redStars}
					{greyStars}
				</p>
			</div>
		</>
	);
};

export default CvDegrees;
