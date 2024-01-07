import React from 'react';
import { Text } from '../../ui';
import styles from './AddFiles.module.scss';

interface ErrorDisplayProps {
	errors: string[];
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ errors }) => {
	return (
		<>
			{errors.length > 0 && (
				<div className={styles.fileError}>
					{errors.map((error, index) => (
						<Text key={index} weight="light" color="red">
							{error}
						</Text>
					))}
				</div>
			)}
		</>
	);
};

export default ErrorDisplay;
