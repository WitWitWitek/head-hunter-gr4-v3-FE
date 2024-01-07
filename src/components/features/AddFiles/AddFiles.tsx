import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Spinner } from '../../ui';
import styles from './AddFiles.module.scss';
import { CreateStudentType } from '../../../types/createStudentType';
import { useCreateStudentMutation } from '../../../app/api/userApiSlice';
import FileTemplatesForImport from '../FileTemplatesForImport/FileTemplatesForImport';
import FileInput from './FileInput';
import ErrorDisplay from './ErrorDisplay';
import ImportButtons from './ImportButtons';
import { useFileUpload } from '../../../hooks/useFileUpload';

function AddFiles() {
	const [loading, setLoading] = useState(false);
	const [selectedFileName, setSelectedFileName] = useState('');
	const [fileError, setFileError] = useState('');
	const [students, setStudents] = useState<CreateStudentType[]>();
	const [createStudent, { isSuccess }] = useCreateStudentMutation();
	const [rowCount, setRowCount] = useState(0);
	const [csvErrors, setCsvErrors] = useState<string[]>([]);
	const [jsonErrors, setJsonErrors] = useState<string[]>([]);

	const { handleFileUpload } = useFileUpload();

	const resetImport = () => {
		setCsvErrors([]);
		setJsonErrors([]);
		setFileError('');
		setSelectedFileName('');
		setRowCount(0);
		formik.setFieldValue('file', null);
	};

	const sendStudents = async () => {
		students && (await createStudent({ students: [...students] }));
		setRowCount(0);
	};

	const formik = useFormik({
		initialValues: {
			file: null,
		},
		onSubmit: (values) => {
			handleFileUpload(
				values.file,
				setStudents,
				setLoading,
				setRowCount,
				setCsvErrors,
				setJsonErrors
			);
		},
	});

	useEffect(() => {
		if (isSuccess) {
			resetImport();
		}
	}, [isSuccess]);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.currentTarget.files
			? event.currentTarget.files[0]
			: null;
		if (file) {
			formik.setFieldValue('file', file);
			setSelectedFileName(file.name);
			setFileError('');
			resetImportErrors();
		} else {
			setFileError('');
			formik.setFieldValue('file', null);
			setSelectedFileName('');
			resetImportErrors();
		}
	};

	const resetImportErrors = () => {
		setCsvErrors([]);
		setJsonErrors([]);
		setRowCount(0);
	};
	const handleFileRemove = () => {
		formik.setFieldValue('file', null);
		setSelectedFileName('');
	};

	return (
		<div className={styles.container}>
			<h2 style={{ color: 'white' }}>Dodawanie listy kursantów</h2>
			<FileTemplatesForImport />
			<form onSubmit={formik.handleSubmit} className={styles.form}>
				<FileInput
					onFileChange={handleFileChange}
					selectedFileName={selectedFileName}
				/>
				<ErrorDisplay errors={fileError ? [fileError] : []} />
				<ErrorDisplay errors={csvErrors} />
				<ErrorDisplay errors={jsonErrors} />

				{rowCount > 0 && (
					<div className={styles.rowCount}>
						Liczba wczytanych kursantów: {rowCount}
					</div>
				)}

				<ImportButtons onRemove={handleFileRemove} onSave={sendStudents} />
			</form>
			{loading && <Spinner />}
		</div>
	);
}

export default AddFiles;
