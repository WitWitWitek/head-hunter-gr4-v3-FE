import { Formik, Form, FieldProps, Field, FieldArray } from 'formik';
import { studentValidationSchema } from '../../../validation';
import StudentStyle from './StudentForm.module.scss';
import { StudentFormType } from '../../../types/StudentFormType';
import { Input, TextArea, Select, Button } from '../../ui';

const DynamicLinksFieldArray = ({
	name,
	description,
}: {
	name: string;
	description: string;
}) => (
	<FieldArray
		name={name}
		render={(arrayHelpers) => (
			<div className={StudentStyle.linksContainer}>
				{arrayHelpers.form.values[name].map((_: string, index: number) => (
					<div key={index} className={StudentStyle.link}>
						<Field name={`${name}.${index}`}>
							{({ field, form }: FieldProps<string, StudentFormType>) => (
								<Input
									{...field}
									description={index === 0 ? description : ''}
									hasError={form.touched[name] && !!form.errors[name]}
									errorMessage={form.errors[name]}
									type="text"
								/>
							)}
						</Field>
						{index > 0 && (
							<Button type="button" onClick={() => arrayHelpers.remove(index)}>
								Usuń
							</Button>
						)}
					</div>
				))}
				<Button type="button" onClick={() => arrayHelpers.push('')}>
					Dodaj kolejny link
				</Button>
			</div>
		)}
	/>
);
export const StudentForm = () => {
	return (
		<Formik
			initialValues={{
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
			}}
			onSubmit={(values: StudentFormType) => {
				console.log('hello world');
				console.log(values);
			}}
			validationSchema={studentValidationSchema}
		>
			<div className={StudentStyle.wrapper}>
				<Form className={StudentStyle.form}>
					<h2 style={{ color: 'white', margin: '40px 0 20px' }}>
						Dane Osobowe
					</h2>
					<Field name="email">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="E-mail"
								hasError={form.touched.email && !!form.errors.email}
								errorMessage={form.errors.email}
								type="email"
							/>
						)}
					</Field>
					<Field name="tel">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="Nr. telefonu"
								hasError={form.touched.tel && !!form.errors.tel}
								errorMessage={form.errors.tel}
								type="number"
							/>
						)}
					</Field>
					<Field name="firstName">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="Imię"
								hasError={form.touched.firstName && !!form.errors.firstName}
								errorMessage={form.errors.firstName}
								type="text"
							/>
						)}
					</Field>
					<Field name="lastName">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="Nazwisko"
								hasError={form.touched.lastName && !!form.errors.lastName}
								errorMessage={form.errors.lastName}
								type="text"
							/>
						)}
					</Field>
					<Field name="githubUserName">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="Login GitHuba"
								hasError={
									form.touched.githubUserName && !!form.errors.githubUserName
								}
								errorMessage={form.errors.githubUserName}
								type="text"
							/>
						)}
					</Field>

					<h2 style={{ color: 'white', margin: '40px 0 20px' }}>
						Preferencje dotyczące zatrudnienia
					</h2>
					<Field name="targetWorkCity">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="Docelowe miasto pracy"
								hasError={
									form.touched.targetWorkCity && !!form.errors.targetWorkCity
								}
								errorMessage={form.errors.targetWorkCity}
								type="text"
							/>
						)}
					</Field>
					<Field name="expectedSalary">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="Oczekiwane wynagrodzenie"
								hasError={
									form.touched.expectedSalary && !!form.errors.expectedSalary
								}
								errorMessage={form.errors.expectedSalary}
								type="number"
							/>
						)}
					</Field>
					<Field name="preferredWorkLocation">
						{({ field }: FieldProps<string, StudentFormType>) => (
							<Select
								{...field}
								description="Preferowane miejsce pracy"
								options={[
									'Bez znaczenia',
									'Na miejscu',
									'Gotowość do przeprowadzki',
									'Wyłącznie zdalnie',
									'Hybrydowo',
								]}
								value="Bez znaczenia"
							/>
						)}
					</Field>
					<Field name="consentForUnpaidInternship">
						{({ field }: FieldProps<string, StudentFormType>) => (
							<Select
								{...field}
								description="Bezpłatny staż"
								options={['Tak', 'Nie']}
								value="Nie"
							/>
						)}
					</Field>
					<Field name="contractType">
						{({ field }: FieldProps<string, StudentFormType>) => (
							<Select
								{...field}
								description="Typ kontraktu"
								options={[
									'Brak preferencji',
									'Tylko UoP',
									'Możliwe B2B',
									'Możliwe UZ/UoD',
								]}
								value="Brak preferencji"
							/>
						)}
					</Field>
					<Field name="minSalary">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="Minimalne wynagrodzenie"
								hasError={form.touched.minSalary && !!form.errors.minSalary}
								errorMessage={form.errors.minSalary}
								type="number"
							/>
						)}
					</Field>
					<Field name="maxSalary">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="Maksymalne wynagrodzenie"
								hasError={form.touched.maxSalary && !!form.errors.maxSalary}
								errorMessage={form.errors.maxSalary}
								type="text"
							/>
						)}
					</Field>
					<Field name="monthsOfCommercialExp">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="Doświadczenie komercyjne(miesiące)"
								hasError={
									form.touched.monthsOfCommercialExp &&
									!!form.errors.monthsOfCommercialExp
								}
								errorMessage={form.errors.monthsOfCommercialExp}
								type="text"
							/>
						)}
					</Field>
					<h2 style={{ color: 'white', margin: '40px 0 20px' }}>
						Pozostałe dane kandydata
					</h2>
					<Field name="bio">
						{({ field }: FieldProps<string, StudentFormType>) => (
							<TextArea description="Życiorys" {...field}></TextArea>
						)}
					</Field>
					<Field name="education">
						{({ field }: FieldProps<string, StudentFormType>) => (
							<TextArea description="Przebieg edukacji" {...field}></TextArea>
						)}
					</Field>
					<Field name="workExperience">
						{({ field }: FieldProps<string, StudentFormType>) => (
							<TextArea
								description="Doświadczenie zawodowe"
								{...field}
							></TextArea>
						)}
					</Field>
					<Field name="courses">
						{({ field }: FieldProps<string, StudentFormType>) => (
							<TextArea description="Kursy" {...field}></TextArea>
						)}
					</Field>

					<DynamicLinksFieldArray
						name="projectUrls"
						description="Link do projektu"
					/>
					<DynamicLinksFieldArray
						name="portfolioUrls"
						description="Link do portfolio"
					/>

					<Button fullWidth type="submit" className={StudentStyle.btn}>
						Wyślij
					</Button>
				</Form>
			</div>
		</Formik>
	);
};
