import * as yup from 'yup';

export const StudentFilteredValidation = yup.object().shape({
	courseCompletion: yup
		.number()
		.required('Ocena przejścia kursu jest wymagana'),
	courseEngagement: yup
		.number()
		.required('Ocena aktywności i zaangażowania na kursie jest wymagana'),
	projectDegree: yup
		.number()
		.required('Ocena kodu w projekcie własnym jest wymagana'),
	teamProjectDegree: yup
		.number()
		.required('Ocena pracy w zespole w Scrum jest wymagana'),
	expectedTypeWork: yup
		.string()
		.required('Wymagane jest podanie preferowanego miejsca pracy'),
	canTakeApprenticeship: yup
		.boolean()
		.required('Musisz zaznaczyć jedna z opcji'),
	expectedContractType: yup
		.string()
		.required('Wymagany jest wybór typu kontraktu'),
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


