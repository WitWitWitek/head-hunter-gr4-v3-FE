import { ReactNode } from 'react';
import styles from './CvLabel.module.scss';

interface Props {
	title: string;
	children?: ReactNode;
}

const CvLabel = (props: Props) => {
	return (
		<>
			<div className={styles.label}>
				<p className={styles.title}>{props.title}</p>
				<div className={styles.details}>{props.children}</div>
			</div>
		</>
	);
};

export default CvLabel;
