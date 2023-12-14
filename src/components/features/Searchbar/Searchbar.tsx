import { useState } from 'react';
import { MdFilterAlt } from 'react-icons/md';
import styles from './Searchbar.module.scss';
import FilterDialog from '../Filter/FilterDialog';
const Searchbar = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const openDialog = () => {
		setIsDialogOpen(true);
	};
	const closeDialog = () => {
		setIsDialogOpen(false);
	};
	return (
		<div className={styles.container}>
			<div className={styles.searchbar}>
				<input type="search" placeholder="Szukaj" />
				<button onClick={openDialog}>
					<MdFilterAlt className={styles.icon} size={22} color="#4D4D4D" />
					Filtrowanie
				</button>
				{isDialogOpen && (
					<FilterDialog isOpen={isDialogOpen} onClose={closeDialog} />
				)}
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Searchbar;
