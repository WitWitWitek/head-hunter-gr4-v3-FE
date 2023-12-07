import { Formik, Form, FieldProps, Field, FieldArray } from 'formik';
import {
	studentValidationSchema,
	StudentFilteredValidation,
} from '../../../validation';
import StudentStyle from './StudentForm.module.scss';
import { StudentFormType } from '../../../types/StudentFormType';
import { Input, TextArea, Select, Button } from '../../ui';
import * as Yup from 'yup';

const combinedValidationSchema = Yup.object().shape({
	...studentValidationSchema.fields,
	...StudentFilteredValidation.fields,
});
interface FilterValues {
	courseCompletionRating: number;
	activityAndEngagementRating: number;
	ownProjectCodeRating: number;
	teamWorkScrumRating: number;
	preferredWorkLocation: string;
	consentForUnpaidInternship: boolean;
	contractType: string;
	minSalary: string;
	maxSalary: string;
	monthsOfCommercialExp: string;
}

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
				{arrayHelpers.form.values[name].map((link: string, index: number) => (
					<div key={index} className={StudentStyle.link}>
						<Field name={`${name}.${index}`}>
							{({ field, form }: any) => (
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
				courseCompletionRating: 0,
				activityAndEngagementRating: 0,
				ownProjectCodeRating: 0,
				teamWorkScrumRating: 0,
				preferredWorkLocation: '',
				consentForUnpaidInternship: false,
				contractType: '',
				minSalary: '',
				maxSalary: '',
			}}
			onSubmit={(values: StudentFormType) => {
				console.log(values);
			}}
			validationSchema={combinedValidationSchema}
		>
			<div className={StudentStyle.wrapper}>
				<Form className={StudentStyle.form} noValidate>
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
					{/* tego ponizej nie ma do wypelnienia dla studenta - to sa dane importowane z pliku HR */}
					{/* <Field name="courseCompletionRating">
						{({ field, form }: FieldProps<string, FilterValues>) => (
							<Input
								{...field}
								description="Ocena przejścia kursu"
								hasError={
									form.touched.courseCompletionRating &&
									!!form.errors.courseCompletionRating
								}
								errorMessage={form.errors.courseCompletionRating}
								type="number"
								min={1}
								max={5}
							/>
						)}
					</Field>
					<Field name="activityAndEngagementRating">
						{({ field, form }: FieldProps<string, FilterValues>) => (
							<Input
								{...field}
								description="Ocena zaangażowania w kurs"
								hasError={
									form.touched.activityAndEngagementRating &&
									!!form.errors.activityAndEngagementRating
								}
								errorMessage={form.errors.activityAndEngagementRating}
								type="number"
								min={1}
								max={5}
							/>
						)}
					</Field>
					<Field name="ownProjectCodeRating">
						{({ field, form }: FieldProps<string, FilterValues>) => (
							<Input
								{...field}
								description="Ocena z projektu własnego"
								hasError={
									form.touched.ownProjectCodeRating &&
									!!form.errors.ownProjectCodeRating
								}
								errorMessage={form.errors.ownProjectCodeRating}
								type="number"
								min={1}
								max={5}
							/>
						)}
					</Field>
					<Field name="teamWorkScrumRating">
						{({ field, form }: FieldProps<string, FilterValues>) => (
							<Input
								{...field}
								description="Ocena z pracy w zespole"
								hasError={
									form.touched.teamWorkScrumRating &&
									!!form.errors.teamWorkScrumRating
								}
								errorMessage={form.errors.teamWorkScrumRating}
								type="number"
								min={1}
								max={5}
							/>
						)}
					</Field> */}
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
					<Field name="referredWorkLocation">
						{({ field }: FieldProps<string, FilterValues>) => (
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
						{({ field }: FieldProps<string, FilterValues>) => (
							<Select
								{...field}
								description="Bezpłatny staż"
								options={['Tak', 'Nie']}
								value="Nie"
							/>
						)}
					</Field>
					<Field name="contractType">
						{({ field }: FieldProps<string, FilterValues>) => (
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
						{({ field, form }: FieldProps<string, FilterValues>) => (
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
						{({ field, form }: FieldProps<string, FilterValues>) => (
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
						{({ field, form }: FieldProps<string, FilterValues>) => (
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
					{/* <Field name="projectScrum">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="Link do projektu scrum"
								hasError={
									form.touched.projectScrum && !!form.errors.projectScrum
								}
								errorMessage={form.errors.projectScrum}
								type="text"
							/>
						)}
					</Field> */}
					{/* <Field name="portfolioInput">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="Link do portfolio"
								hasError={
									form.touched.portfolioInput && !!form.errors.portfolioInput
								}
								errorMessage={form.errors.portfolioInput}
								type="text"
							/>
						)}
					</Field>

					<Field name="projectInput">
						{({ field, form }: FieldProps<string, StudentFormType>) => (
							<Input
								{...field}
								description="Link do projektu zaliczeniowego"
								hasError={
									form.touched.projectInput && !!form.errors.projectInput
								}
								errorMessage={form.errors.projectInput}
								type="text"
							/>
						)}
					</Field> */}

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
