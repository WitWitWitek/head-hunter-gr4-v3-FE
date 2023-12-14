import * as yup from 'yup';

export const StudentFilteredValidation = yup.object().shape({
	courseCompletion: yup
		.number()
		.min(1, 'Ocena musi być w zakresie od 1 do 5')
		.max(5, 'Ocena musi być w zakresie od 1 do 5'),

	courseEngagement: yup
		.number()
		.min(1, 'Ocena musi być w zakresie od 1 do 5')
		.max(5, 'Ocena musi być w zakresie od 1 do 5'),

	projectDegree: yup
		.number()
		.min(1, 'Ocena musi być w zakresie od 1 do 5')
		.max(5, 'Ocena musi być w zakresie od 1 do 5'),

	teamProjectDegree: yup
		.number()
		.min(1, 'Ocena musi być w zakresie od 1 do 5')
		.max(5, 'Ocena musi być w zakresie od 1 do 5'),

	canTakeApprenticeship: yup.boolean(),

	expectedTypeWork: yup.array().of(yup.string()),

	expectedContractType: yup.array().of(yup.string()),

	minSalary: yup
		.number()
		.nullable()
		.min(0, 'Minimalna wartość wynagrodzenia nie może być mniejsza niż 0')
		.max(1000000, 'Za duża wartość'), // Example max value

	maxSalary: yup
		.number()
		.nullable()
		.min(0, 'Maksymalna wartość wynagrodzenia nie może być mniejsza niż 0')
		.max(1000000, 'Za duża wartość'), // Example max value

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
