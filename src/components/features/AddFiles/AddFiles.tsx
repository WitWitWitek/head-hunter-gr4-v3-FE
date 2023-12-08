import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Spinner, Button } from "../../ui";
import { toast } from "react-toastify";
import Papa from "papaparse";
import styles from "./AddFiles.module.scss";
import { CreateStudentType } from "../../../types/createStudentType";
import { useCreateStudentMutation } from "../../../app/api/userApiSlice";
import { studentsMapper } from "../../../utils/studentsMapper";
import { Text } from '../../ui';
import {
	validateJSON,
	validateCSVRow,
	CSVRow,
} from '../../../validation/inputFilesValidators';
import FileTemplatesForImport from '../FileTemplatesForImport/FileTemplatesForImport';

function AddFiles() {
	const [loading, setLoading] = useState(false);
	const [selectedFileName, setSelectedFileName] = useState('');
	const [fileError, setFileError] = useState('');
	const [students, setStudents] = useState<CreateStudentType[]>();
	const [createStudent, { isSuccess }] = useCreateStudentMutation();
	const [rowCount, setRowCount] = useState(0);
	const [csvErrors, setCsvErrors] = useState<string[]>([]);
	const [jsonErrors, setJsonErrors] = useState<string[]>([]);
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
			handleFile(values.file);
		},
	});

	useEffect(() => {
		setSelectedFileName(() => '');
	}, [isSuccess]);

	const handleFile = (file: File | null) => {
		if (!file) {
			toast.error('Proszę wybrać plik.');
			return;
		}

		setLoading(true);
		const fileExtension = file.name.split('.').pop();

		if (fileExtension === 'csv') {
			Papa.parse<CSVRow>(file, {
				header: true,
				complete: (results) => {
					const errors: string[] = [];
					results.data.forEach((row, index) => {
						const validation = validateCSVRow(row, index + 1);
						if (!validation.isValid) {
							errors.push(validation.error || `Błąd w wierszu ${index + 1}`);
						}
					});

					if (errors.length > 0) {
						setCsvErrors(errors);
						setLoading(false);
						toast.error('Nieprawidłowy format CSV.');
					} else {
						const students = studentsMapper(
							results.data as unknown as CreateStudentType[]
						);
						setStudents(() => students);
						setLoading(false);
						setRowCount(results.data.length);
						toast.success(
							`Plik CSV został przetworzony. Dodano ${results.data.length} kursantów`
						);
					}
				},
			});
		} else if (fileExtension === 'json') {
			const reader = new FileReader();
			reader.onload = (event: ProgressEvent<FileReader>) => {
				const result = event.target?.result;
				if (typeof result === 'string') {
					const jsonData = JSON.parse(result);
					const errors = validateJSON(jsonData);
					if (errors.length > 0) {
						setJsonErrors(errors);
						setLoading(false);
						toast.error(errors);
						return;
					} else {
						const students = studentsMapper(
							jsonData as unknown as CreateStudentType[]
						);
						setStudents(() => students);
						setLoading(false);
						setRowCount(jsonData.length);
						toast.success(
							`Plik JSON został pomyślnie wczytany. Dodano ${jsonData.length} kursantów/a`
						);
					}
				}
			};
			reader.readAsText(file);
		} else {
			toast.error('Nieobsługiwany format pliku.');
			setLoading(false);
		}
	};
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.currentTarget.files
			? event.currentTarget.files[0]
			: null;
		if (file) {
			const fileExtension = file.name.split('.').pop()?.toLowerCase() ?? '';
			if (fileExtension === 'csv' || fileExtension === 'json') {
				formik.setFieldValue('file', file);
				setSelectedFileName(file.name);
				setFileError('');
			} else {
				setFileError(
					'Niepoprawny format pliku. Akceptowane formaty: .csv, .json'
				);
				formik.setFieldValue('file', null);
				setSelectedFileName('');
			}
		} else {
			formik.setFieldValue('file', null);
			setSelectedFileName('');
			setFileError('');
		}
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
				<div className={styles.fileInputContainer}>
					<label htmlFor="fileInput" className={`${styles.fileInputLabel}`}>
						Wybierz plik
					</label>
					<input
						id="fileInput"
						type="file"
						name="file"
						onChange={handleFileChange}
						className={styles.hiddenFileInput}
					/>
					<div className={styles.fileName}>{selectedFileName}</div>
				</div>
				{fileError && <div className={styles.fileError}>{fileError}</div>}
				{rowCount > 0 && (
					<div className={styles.rowCount}>
						<Text weight="light" color="white">
							Liczba wczytanych kursantów: {rowCount}
						</Text>
					</div>
				)}
				{csvErrors.length > 0 && (
					<div className={styles.fileError}>
						{csvErrors.map((error, index) => (
							<Text key={index} weight="light" color="red">
								{error}
							</Text>
						))}
						<Button type="button" onClick={resetImport}>
							Resetuj błędny import
						</Button>
					</div>
				)}

				{jsonErrors.length > 0 && (
					<div className={styles.fileError}>
						{jsonErrors.map((error, index) => (
							<Text key={index} weight="light" color="red">
								{error}
							</Text>
						))}
						<Button type="button" onClick={resetImport}>
							Resetuj błędny import
						</Button>
					</div>
				)}

				<div className={styles.buttonsContainer}>
					<button onClick={handleFileRemove} className={styles.removeBtn}>
						Usuń
					</button>
					<Button type="submit">Importuj dane</Button>
					{students && (
						<Button type="button" onClick={() => sendStudents()}>
							Zapisz
						</Button>
					)}
				</div>
			</form>
			{loading && <Spinner />}
		</div>
	);
}

export default AddFiles;
