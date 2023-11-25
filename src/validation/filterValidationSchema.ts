import * as yup from 'yup';

export const StudentFilteredValidation = yup.object().shape({
	courseCompletionRating: yup
		.number()
		.required('Ocena przejścia kursu jest wymagana'),
	activityAndEngagementRating: yup
		.number()
		.required('Ocena aktywności i zaangażowania na kursie jest wymagana'),
	ownProjectCodeRating: yup
		.number()
		.required('Ocena kodu w projekcie własnym jest wymagana'),
	teamWorkScrumRating: yup
		.number()
		.required('Ocena pracy w zespole w Scrum jest wymagana'),
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
		.max(3, 'Za duża wartość'),
});
