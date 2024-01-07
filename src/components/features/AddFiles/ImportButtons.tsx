import React from 'react';
import { Button } from '../../ui';
import styles from './AddFiles.module.scss';

interface ImportButtonsProps {
	onRemove: () => void;
	onSave: () => void;
}

const ImportButtons: React.FC<ImportButtonsProps> = ({ onRemove, onSave }) => {
	return (
		<div className={styles.buttonsContainer}>
			<button onClick={onRemove} className={styles.removeBtn}>
				Usuń
			</button>
			<Button type="submit">Importuj dane</Button>
			<Button type="button" onClick={onSave}>
				Zapisz
			</Button>
		</div>
	);
};

export default ImportButtons;
