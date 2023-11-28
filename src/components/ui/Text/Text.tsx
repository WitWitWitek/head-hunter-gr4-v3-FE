import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Text.module.scss';

interface Props
	extends Omit<HTMLAttributes<HTMLParagraphElement>, 'className'>,
		PropsWithChildren {
	customClasses?: string;
	weight?: 'bold' | 'normal' | 'light';
	color?: 'white' | 'gray';
}

export const Text = ({
	children,
	customClasses = '',
	weight = 'normal',
	color = 'white',
	...rest
}: Props) => {
	return (
		<p
			className={`${styles.p} ${customClasses} ${styles[weight]} ${styles[color]}`}
			{...rest}
		>
			{children}
		</p>
	);
};
