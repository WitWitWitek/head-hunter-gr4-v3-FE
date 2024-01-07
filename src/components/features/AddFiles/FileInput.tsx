import React from 'react';
import styles from './AddFiles.module.scss';

interface FileInputProps {
	onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	selectedFileName: string;
}

const FileInput: React.FC<FileInputProps> = ({
	onFileChange,
	selectedFileName,
}) => {
	return (
		<div className={styles.fileInputContainer}>
			<label htmlFor="fileInput" className={styles.fileInputLabel}>
				Wybierz plik
			</label>
			<input
				id="fileInput"
				type="file"
				name="file"
				onChange={onFileChange}
				className={styles.hiddenFileInput}
			/>
			<div className={styles.fileName}>{selectedFileName}</div>
		</div>
	);
};

export default FileInput;
