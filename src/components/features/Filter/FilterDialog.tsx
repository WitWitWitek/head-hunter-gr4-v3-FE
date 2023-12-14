import styles from './FilterDialog.module.scss';
import { Button, Input } from '../../ui';
import { StudentFilteredValidation } from '../../../validation';
import { useFormik } from 'formik';
import {
	ExpectedContractType,
	ExpectedTypeWork,
} from '../../../types/IStudentData';
interface FilterDialogProps {
	isOpen: boolean;
	onClose: () => void;
}
interface FormValues {
	teamProjectDegree: string;
	courseCompletion: string;
	courseEngagement: string;
	projectDegree: string;
	expectedTypeWork: string[];
	expectedContractType: string[];
	canTakeApprenticeship: boolean;
	minSalary: number | null;
	maxSalary: number | null;
	monthsOfCommercialExp: number;
}

const FilterDialog: React.FC<FilterDialogProps> = ({ isOpen, onClose }) => {
	const formik = useFormik<FormValues>({
		initialValues: {
			teamProjectDegree: '',
			courseCompletion: '',
			courseEngagement: '',
			projectDegree: '',
			expectedTypeWork: [],
			expectedContractType: [],
			canTakeApprenticeship: false,
			minSalary: null,
			maxSalary: null,
			monthsOfCommercialExp: 0,
		},
		validationSchema: StudentFilteredValidation,
		onSubmit: (values) => {
			console.log(values);
		},
		validateOnChange: true,
		validateOnBlur: true,
	});
	const { handleSubmit, handleChange, setFieldValue, values, errors, touched } =
		formik;

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const currentValues = values[name as keyof FormValues] as string[];

		if (currentValues.includes(value)) {
			formik.setFieldValue(
				name,
				currentValues.filter((item: string) => item !== value)
			);
		} else {
			formik.setFieldValue(name, [...currentValues, value]);
		}
	};
	const handleClear = () => {
		formik.resetForm();
	};

	const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFieldValue(name, value === 'true');
	};
	return (
		<div className={styles.dialogContainer} data-open={isOpen}>
			<dialog open={isOpen} onClose={onClose}>
				<form onSubmit={handleSubmit}>
					<div className={styles.heading}>
						<h2>Filtrowanie</h2>
						<button className={styles.clearBtn} onClick={handleClear}>
							Wyczyść wszystkie
						</button>
					</div>
					<div className={styles.points}>
						<Input
							type="number"
							id="teamProjectDegree"
							name="teamProjectDegree"
							placeholder="Wpisz minimalną ocenę w zakresie od 1 do 5"
							description="Ocena pracy w zespole w Scrum"
							descriptionClass={styles.customDescription}
							onChange={handleChange}
							value={values.teamProjectDegree}
							hasError={touched.teamProjectDegree && !!errors.teamProjectDegree}
							errorMessage={errors.teamProjectDegree}
						/>
						<Input
							type="number"
							id="courseCompletion"
							name="courseCompletion"
							placeholder="Wpisz minimalną ocenę w zakresie od 1 do 5"
							description="Ocena przejścia kursu"
							descriptionClass={styles.customDescription}
							onChange={handleChange}
							value={values.courseCompletion}
							hasError={touched.courseCompletion && !!errors.courseCompletion}
							errorMessage={errors.courseCompletion}
						/>
						<Input
							type="number"
							id="courseEngagement"
							name="courseEngagement"
							placeholder="Wpisz minimalną ocenę w zakresie od 1 do 5"
							description="Ocena aktywności i zaangażowania na kursie"
							descriptionClass={styles.customDescription}
							onChange={handleChange}
							value={values.courseEngagement}
							hasError={touched.courseEngagement && !!errors.courseEngagement}
							errorMessage={errors.courseEngagement}
						/>
						<Input
							type="number"
							id="projectDegree"
							name="projectDegree"
							placeholder="Wpisz minimalną ocenę w zakresie od 1 do 5"
							description="Ocena kodu w projekcie własnym"
							descriptionClass={styles.customDescription}
							onChange={handleChange}
							value={values.projectDegree}
							hasError={touched.projectDegree && !!errors.projectDegree}
							errorMessage={errors.projectDegree}
						/>
					</div>

					<fieldset className={styles.fieldset}>
						<legend>Preferowane miejsce pracy</legend>
						<div className={styles.checkboxGroup}>
							{Object.entries(ExpectedTypeWork).map(([key, value]) => (
								<div key={key} className={styles.checkboxWrapper}>
									<input
										type="checkbox"
										id={key}
										name="expectedTypeWork"
										value={key}
										checked={values.expectedTypeWork.includes(key)}
										onChange={handleCheckboxChange}
										className={styles.checkboxInput}
									/>
									<label htmlFor={key} className={styles.checkboxLabel}>
										{value}
									</label>
								</div>
							))}
						</div>
						{touched.expectedTypeWork && errors.expectedTypeWork && (
							<div className={styles.errorText}>{errors.expectedTypeWork}</div>
						)}
					</fieldset>

					<fieldset className={styles.fieldset}>
						<legend>Oczekiwany typ kontraktu</legend>
						<div className={styles.checkboxGroup}>
							{Object.entries(ExpectedContractType).map(([key, value]) => (
								<div key={key} className={styles.checkboxWrapper}>
									<input
										type="checkbox"
										id={key}
										name="expectedContractType"
										value={key}
										checked={values.expectedContractType.includes(key)}
										onChange={handleCheckboxChange}
										className={styles.checkboxInput}
									/>
									<label htmlFor={key} className={styles.checkboxLabel}>
										{value}
									</label>
								</div>
							))}
						</div>
						{touched.expectedContractType && errors.expectedContractType && (
							<div className={styles.errorText}>
								{errors.expectedContractType}
							</div>
						)}
					</fieldset>
					<fieldset className={styles.salary}>
						<legend>Oczekiwane wynagrodzenie miesięczne netto</legend>
						<div className={styles.salaryInputGroup}>
							<p>Od:</p>
							<Input
								type="number"
								id="minSalary"
								name="minSalary"
								placeholder="np. 1000 zł"
								onChange={handleChange}
								value={values.minSalary}
								hasError={touched.minSalary && !!errors.minSalary}
								errorMessage={errors.minSalary}
							/>
							<p>Do:</p>
							<Input
								type="number"
								id="maxSalary"
								name="maxSalary"
								placeholder="np. 10000 zł"
								onChange={handleChange}
								value={values.maxSalary}
								hasError={touched.maxSalary && !!errors.maxSalary}
								errorMessage={errors.maxSalary}
							/>
						</div>
					</fieldset>

					<fieldset>
						<legend>
							Zgoda na odbycie bezpłatnych praktyk/stażu na początek
						</legend>
						<label>
							<input
								type="radio"
								id="canTakeApprenticeshipTrue"
								name="canTakeApprenticeship"
								value="true"
								onChange={handleRadioChange}
								checked={values.canTakeApprenticeship === true}
							/>{' '}
							Tak
						</label>
						<label>
							<input
								type="radio"
								id="canTakeApprenticeshipFalse"
								name="canTakeApprenticeship"
								value="false"
								onChange={handleRadioChange}
								checked={values.canTakeApprenticeship === false}
							/>{' '}
							Nie
						</label>
						{touched.canTakeApprenticeship && errors.canTakeApprenticeship && (
							<div className={styles.errorText}>
								{errors.canTakeApprenticeship}
							</div>
						)}
					</fieldset>
					<div className={styles.expMonths}>
						<Input
							type="number"
							id="monthsOfCommercialExp"
							name="monthsOfCommercialExp"
							min="0"
							placeholder="0 miesięcy"
							description="Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu"
							descriptionClass={styles.customDescription}
							onChange={handleChange}
							value={values.monthsOfCommercialExp}
							hasError={
								touched.monthsOfCommercialExp && !!errors.monthsOfCommercialExp
							}
							errorMessage={errors.monthsOfCommercialExp}
						/>
					</div>

					<div className={styles.actions}>
						<Button color={'#0A0A0A'} onClick={onClose}>
							Anuluj
						</Button>
						<Button type={'submit'}>Pokaż wyniki</Button>
					</div>
				</form>
			</dialog>
		</div>
	);
};

export default FilterDialog;
