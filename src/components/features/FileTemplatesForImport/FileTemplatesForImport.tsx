import { FaFileCsv, FaFileCode } from 'react-icons/fa';
import { Text } from '../../ui';
import styles from './FileTemplatesForImport.module.scss';

const FileTemplatesForImport = () => {
	return (
		<div className={styles.container}>
			<Text weight="normal" color="white">
				Poprawne dane wejściowe powinny być sformatowane zgodnie z szablonem.
				Przykładowe pliki:
			</Text>
			<div className={styles.linkContainer}>
				<a
					href="../assets/exampleFiles/example.csv"
					title="Pobierz przykładowy plik CSV"
					download
				>
					<FaFileCsv size={24} />
					<span>CSV Template</span>
				</a>
				<a
					href="../assets/exampleFiles/example.json"
					title="Pobierz przykładowy plik JSON"
					download
				>
					<FaFileCode size={24} />
					<span>JSON Template</span>
				</a>
			</div>
		</div>
	);
};

export default FileTemplatesForImport;
