import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import styles from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	customClasses?: string;
	status?: 'active' | 'disabled';
	loading?: boolean;
}

export const Button = ({
	children,
	customClasses = '',
	status = 'active',
	loading = false,
	...rest
}: Props) => {
	return (
		<button
			{...rest}
			className={`${styles.button} ${styles[status]} ${customClasses}`}
			disabled={status === 'disabled' || loading}
		>
			{loading ? (
				<>
					<SpinnerCircular size={20} color="#e02635" />
					<span style={{ marginLeft: '10px' }}>{children}</span>{' '}
				</>
			) : (
				children
			)}
		</button>
	);
};
