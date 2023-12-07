import { useFormik } from 'formik';
import { studentValidationSchema } from '../../../validation';
import StudentStyle from './StudentForm.module.scss';
import { StudentFormType } from '../../../types/StudentFormType';
import { Input, TextArea, Select, Button, Spinner } from '../../ui';

export const StudentForm = () => {
	const formik = useFormik<StudentFormType>({
		initialValues: {
			email: '',
			tel: '',
			firstName: '',
			lastName: '',
			githubUserName: '',
			bio: '',
			targetWorkCity: '',
			expectedSalary: 0,
			monthsOfCommercialExp: 0,
			education: '',
			workExperience: '',
			courses: '',
			portfolioUrls: [''],
			projectUrls: [''],
			preferredWorkLocation: '',
			consentForUnpaidInternship: false,
			contractType: '',
			minSalary: '',
			maxSalary: '',
		},
		validationSchema: studentValidationSchema,
		onSubmit: (values) => {
			console.log('Form data', values);
		},
	});
	type ArrayFieldNames = 'projectUrls' | 'portfolioUrls';

	const addLink = (name: ArrayFieldNames) => {
		const links = [...formik.values[name], ''];
		formik.setFieldValue(name, links);
	};

	const removeLink = (name: ArrayFieldNames, index: number) => {
		const links = [...formik.values[name]];
		links.splice(index, 1);
		formik.setFieldValue(name, links);
	};
	if (formik.isSubmitting) {
		return <Spinner />;
	}
	return (
		<div className={StudentStyle.wrapper}>
			<form onSubmit={formik.handleSubmit} className={StudentStyle.form}>
				{/* Dane Osobowe */}
				<h2 style={{ color: 'white', margin: '40px 0 20px' }}>Dane Osobowe</h2>
				<Input
					description="E-mail"
					hasError={formik.touched.email && !!formik.errors.email}
					errorMessage={formik.errors.email}
					{...formik.getFieldProps('email')}
					type="email"
				/>
				<Input
					description="Nr. telefonu"
					hasError={formik.touched.tel && !!formik.errors.tel}
					errorMessage={formik.errors.tel}
					{...formik.getFieldProps('tel')}
					type="number"
				/>
				<Input
					description="Imię"
					hasError={formik.touched.firstName && !!formik.errors.firstName}
					errorMessage={formik.errors.firstName}
					{...formik.getFieldProps('firstName')}
					type="text"
				/>
				<Input
					description="Nazwisko"
					hasError={formik.touched.lastName && !!formik.errors.lastName}
					errorMessage={formik.errors.lastName}
					{...formik.getFieldProps('lastName')}
					type="text"
				/>
				<Input
					description="Login GitHuba"
					hasError={
						formik.touched.githubUserName && !!formik.errors.githubUserName
					}
					errorMessage={formik.errors.githubUserName}
					{...formik.getFieldProps('githubUserName')}
					type="text"
				/>

				{/* Preferencje dotyczące zatrudnienia */}
				<h2 style={{ color: 'white', margin: '40px 0 20px' }}>
					Preferencje dotyczące zatrudnienia
				</h2>
				<Input
					description="Docelowe miasto pracy"
					hasError={
						formik.touched.targetWorkCity && !!formik.errors.targetWorkCity
					}
					errorMessage={formik.errors.targetWorkCity}
					{...formik.getFieldProps('targetWorkCity')}
					type="text"
				/>
				<Input
					description="Oczekiwane wynagrodzenie"
					hasError={
						formik.touched.expectedSalary && !!formik.errors.expectedSalary
					}
					errorMessage={formik.errors.expectedSalary}
					{...formik.getFieldProps('expectedSalary')}
					type="number"
				/>
				<Select
					description="Preferowane miejsce pracy"
					value={formik.values.preferredWorkLocation}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					name="preferredWorkLocation"
					options={[
						'Bez znaczenia',
						'Na miejscu',
						'Gotowość do przeprowadzki',
						'Wyłącznie zdalnie',
						'Hybrydowo',
					]}
				/>
				<Select
					description="Bezpłatny staż"
					value={formik.values.consentForUnpaidInternship ? 'Tak' : 'Nie'}
					onChange={(e) =>
						formik.setFieldValue(
							'consentForUnpaidInternship',
							e.target.value === 'Tak'
						)
					}
					onBlur={formik.handleBlur}
					name="consentForUnpaidInternship"
					options={['Tak', 'Nie']}
				/>

				<Select
					description="Typ kontraktu"
					value={formik.values.contractType}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					name="contractType"
					options={[
						'Brak preferencji',
						'Tylko UoP',
						'Możliwe B2B',
						'Możliwe UZ/UoD',
					]}
				/>

				<Input
					description="Minimalne wynagrodzenie"
					hasError={formik.touched.minSalary && !!formik.errors.minSalary}
					errorMessage={formik.errors.minSalary}
					{...formik.getFieldProps('minSalary')}
					type="number"
				/>
				<Input
					description="Maksymalne wynagrodzenie"
					hasError={formik.touched.maxSalary && !!formik.errors.maxSalary}
					errorMessage={formik.errors.maxSalary}
					{...formik.getFieldProps('maxSalary')}
					type="text"
				/>
				<Input
					description="Doświadczenie komercyjne (miesiące)"
					hasError={
						formik.touched.monthsOfCommercialExp &&
						!!formik.errors.monthsOfCommercialExp
					}
					errorMessage={formik.errors.monthsOfCommercialExp}
					{...formik.getFieldProps('monthsOfCommercialExp')}
					type="text"
				/>

				{/* Pozostałe dane kandydata */}
				<h2 style={{ color: 'white', margin: '40px 0 20px' }}>
					Pozostałe dane kandydata
				</h2>
				<TextArea description="Życiorys" {...formik.getFieldProps('bio')} />
				<TextArea
					description="Przebieg edukacji"
					{...formik.getFieldProps('education')}
				/>
				<TextArea
					description="Doświadczenie zawodowe"
					{...formik.getFieldProps('workExperience')}
				/>
				<TextArea description="Kursy" {...formik.getFieldProps('courses')} />

				{/* Dynamiczne linki dla projectUrls */}
				<div className={StudentStyle.linksContainer}>
					{formik.values.projectUrls.map((_, index) => (
						<div key={index} className={StudentStyle.link}>
							<Input
								description={`Link do projektu ${index + 1}`}
								hasError={
									formik.touched.projectUrls &&
									!!formik.errors.projectUrls?.[index]
								}
								errorMessage={formik.errors.projectUrls?.[index]}
								{...formik.getFieldProps(`projectUrls.${index}`)}
								type="text"
							/>
							{index > 0 && (
								<Button
									type="button"
									onClick={() => removeLink('projectUrls', index)}
								>
									Usuń
								</Button>
							)}
						</div>
					))}

					<Button type="button" onClick={() => addLink('projectUrls')}>
						Dodaj kolejny link
					</Button>
				</div>
				{/* Dynamiczne linki dla portfolioUrls */}
				<div className={StudentStyle.linksContainer}>
					{formik.values.portfolioUrls.map((_, index) => (
						<div key={index} className={StudentStyle.link}>
							<Input
								description={`Link do portfolio ${index + 1}`}
								hasError={
									formik.touched.portfolioUrls &&
									!!formik.errors.portfolioUrls?.[index]
								}
								errorMessage={formik.errors.portfolioUrls?.[index]}
								{...formik.getFieldProps(`portfolioUrls.${index}`)}
								type="text"
							/>
							{index > 0 && (
								<Button
									type="button"
									onClick={() => removeLink('portfolioUrls', index)}
								>
									Usuń
								</Button>
							)}
						</div>
					))}
					<Button type="button" onClick={() => addLink('portfolioUrls')}>
						Dodaj kolejny link
					</Button>
				</div>

				<Button fullWidth type="submit" loading={formik.isSubmitting}>
					{formik.isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
				</Button>
			</form>
		</div>
	);
};
