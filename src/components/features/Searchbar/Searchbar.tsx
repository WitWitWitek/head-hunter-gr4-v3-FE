import { MdFilterAlt } from 'react-icons/md';
import styles from './Searchbar.module.scss';
const Searchbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.searchbar}>
				<input type="search" placeholder="Szukaj" />
				<button onClick={() => console.log('click for search')}>
					<MdFilterAlt className={styles.icon} size={22} color="#4D4D4D" />
					Filtrowanie
				</button>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Searchbar;
