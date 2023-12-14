import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	description?: string;
	hasError?: boolean;
	errorMessage?: string;
	warningMessage?: string;
	descriptionClass?: string;
}

export const Input = ({
	description,
	hasError,
	errorMessage,
	warningMessage,
	descriptionClass = '',
	...rest
}: Props) => {
	const message = hasError ? errorMessage : warningMessage;
	const messageClass = hasError ? styles.error_message : styles.warning_message;

	return (
		<div className={styles.input_group}>
			{description && (
				<span className={`${styles.description} ${descriptionClass}`}>
					{description}:
				</span>
			)}
			<input
				className={`${styles.input} ${
					hasError || warningMessage ? styles.error : ''
				}`}
				{...rest}
			/>
			{message && (
				<p className={`${styles.message} ${messageClass}`}>{message}</p>
			)}
		</div>
	);
};
