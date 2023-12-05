import { ReactNode } from 'react';
import styles from './Expectations.module.scss';

interface Props {
	title: string;
	children?: ReactNode;
}

const Expectations = (props: Props) => {
	return (
		<>
			<div className={styles.expectations}>
				<p className={styles.label}>{props.title}</p>
				<p className={styles.text}>{props.children}</p>
			</div>
		</>
	);
};

export default Expectations;
