import { useEffect, useRef, TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.scss';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	description?: string;
}

export const TextArea = ({ description, ...rest }: Props) => {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		const textarea = textAreaRef.current;
		if (!textarea) return;

		const adjustHeight = () => {
			textarea.style.height = 'auto';
			textarea.style.height = `${textarea.scrollHeight}px`;
		};

		textarea.addEventListener('input', adjustHeight);
		adjustHeight();

		return () => textarea.removeEventListener('input', adjustHeight);
	}, []);

	return (
		<div className={styles.textarea_group}>
			{description && (
				<span className={styles.description}>{description}:</span>
			)}
			<textarea className={styles.textarea} ref={textAreaRef} {...rest} />
		</div>
	);
};
