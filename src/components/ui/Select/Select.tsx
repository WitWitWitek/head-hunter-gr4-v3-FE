import { HTMLAttributes } from 'react';
import styles from './Select.module.scss';
interface Props extends Omit<HTMLAttributes<HTMLSelectElement>, 'onChange'> {
	options: string[];
	description?: string;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	value?: string;
	name?: string;
	fullSize?: boolean;
}

export const Select = ({
	options,
	description,
	onChange,
	fullSize = true,
	...rest
}: Props) => {
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange(e);
		}
	};

	return (
		<div
			className={`${styles.select_group} ${fullSize ? styles.full_size : ''}`}
		>
			{description && (
				<span className={styles.description}>{description}:</span>
			)}
			<select className={styles.select} onChange={handleSelectChange} {...rest}>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};
