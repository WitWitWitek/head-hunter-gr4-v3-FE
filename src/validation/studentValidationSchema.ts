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
		.max(255, 'Wprowadzona nazwa jest za długa'),

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

	monthsOfCommercialExp: yup
		.string()
		.test('correct-data', 'Podaj liczbę całkowitą lub 0', (val) => {
			if (typeof val === 'undefined') {
				return true;
			}
			return val === '0' || /^[1-9]\d*$/.test(val);
		})
		.max(3, 'Za duża wartość'),

	education: yup.string().max(10000, 'Wprowadzony tekst jest za długi'),

	workExperience: yup.string().max(10000, 'Wprowadzony tekst jest za długi'),

	courses: yup.string().max(10000, 'Wprowadzony tekst jest za długi'),

	portfolioInput: yup
		.string()
		.nullable()
		.matches(
			/^[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_~#?&//=]*)$/,
			'Niepoprawny adres URL'
		),

	projectScrum: yup
		.string()
		.nullable()
		.matches(
			/^[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_~#?&//=]*)$/,
			'Niepoprawny adres URL'
		),

	projectInput: yup
		.string()
		.nullable()
		.matches(
			/^[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_~#?&//=]*)$/,
			'Niepoprawny adres URL'
		),
});
