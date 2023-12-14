import styles from './FilterDialog.module.scss';
import { Button } from '../../ui';
interface FilterDialogProps {
	isOpen: boolean;
	onClose: () => void;
}

const FilterDialog: React.FC<FilterDialogProps> = ({ isOpen, onClose }) => {
	return (
		<div className={styles.dialogContainer} data-open={isOpen}>
			<dialog open={isOpen} onClose={onClose}>
				<div className={styles.heading}>
					<h2>Filtrowanie</h2>
					<button className={styles.clearBtn}>Wyczyść wszystkie</button>
				</div>
				<form>{/* treść formularza */}</form>
				<div className={styles.actions}>
					<Button color={'#0A0A0A'} onClick={onClose}>
						Anuluj
					</Button>
					<Button>Pokaż wyniki</Button>
				</div>
			</dialog>
		</div>
	);
};

export default FilterDialog;
