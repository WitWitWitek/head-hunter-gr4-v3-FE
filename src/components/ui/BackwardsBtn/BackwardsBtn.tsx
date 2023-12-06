import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styles from './BackwardsBtn.module.scss';

export const BackwardsBtn = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(-1);
	};

	return (
		<button onClick={handleClick} className={styles.back_button} type="button">
			<span className={styles.back_text} style={{ color: '#ebebeb' }}>
				<MdOutlineArrowBackIos color="#9e9e9e" />
				Wróć
			</span>
		</button>
	);
};
