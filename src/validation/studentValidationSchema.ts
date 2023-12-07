import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Nieprawidłowy adres email')
		.required('Podaj email'),

	tel: yup
		.string()
		.matches(/^(?:\d{9}|)$/, 'Podaj dokładnie 9 cyfr')
		.nullable(),

	firstName: yup
		.string()
		.max(50, 'Imię nie może być dłuższe niż 50 znaków')
		.required('Podaj imię'),

	lastName: yup
		.string()
		.max(100, 'Nazwisko nie może być dłuższe niż 100 znaków')
		.required('Podaj nazwisko'),

	githubUserName: yup
		.string()
		.nullable()
		.max(255, 'Wprowadzona nazwa jest za długa')
		.required('Podaj swoją nazwę użytkownika GitHuba'),

	bio: yup.string().max(500, 'Wprowadzony tekst jest za długi'),

	targetWorkCity: yup
		.string()
		.nullable()
		.max(50, 'Wprowadzony tekst jest za długi'),

	expectedSalary: yup
		.string()
		.test('correct-data', 'Podaj liczbę całkowitą lub 0', (val) => {
			if (typeof val === 'undefined') {
				return true;
			}
			return val === '0' || /^[1-9]\d*$/.test(val);
		})
		.max(6, 'Za duża wartość'),

	education: yup.string().max(10000, 'Wprowadzony tekst jest za długi'),

	workExperience: yup.string().max(10000, 'Wprowadzony tekst jest za długi'),

	courses: yup.string().max(10000, 'Wprowadzony tekst jest za długi'),

	projectUrls: yup.array().of(
		yup
			.string()
			.nullable()
			.matches(
				/^(http[s]?:\/\/)?([\w-]+\.)+[\w-]+([\w-./?%&=]*)?$/,
				'Niepoprawny adres URL'
			)
			.required(
				'Podaj adres URL - podanie linku do projektu zaliczeniowego jest obowiązkowe'
			)
	),
	portfolioUrls: yup.array().of(
		yup
			.string()
			.nullable()
			.matches(
				/^(http[s]?:\/\/)?([\w-]+\.)+[\w-]+([\w-./?%&=]*)?$/,
				'Niepoprawny adres URL'
			)
	),
	preferredWorkLocation: yup
		.string()
		.required('Wymagane jest podanie preferowanego miejsca pracy'),
	consentForUnpaidInternship: yup
		.boolean()
		.required('Musisz zaznaczyć jedna z opcji'),
	contractType: yup.string().required('Wymagany jest wybór typu kontraktu'),
	minSalary: yup
		.string()
		.nullable()
		.test(
			'correct-data',
			'Podaj liczbę całkowitą',
			(val) =>
				val !== null &&
				val !== undefined &&
				!val.includes('.') &&
				!val.includes(',')
		)
		.max(6, 'Za duża wartość'),

	maxSalary: yup
		.string()
		.nullable()
		.test(
			'correct-data',
			'Podaj liczbę całkowitą',
			(val) =>
				val !== null &&
				val !== undefined &&
				!val.includes('.') &&
				!val.includes(',')
		)
		.max(6, 'Za duża wartość'),

	monthsOfCommercialExp: yup
		.string()
		.test('correct-data', 'Podaj liczbę całkowitą lub 0', (val) => {
			if (typeof val === 'undefined') {
				return true;
			}
			return val === '0' || /^[1-9]\d*$/.test(val);
		})
		.max(3, 'Za duża wartość'),
});
