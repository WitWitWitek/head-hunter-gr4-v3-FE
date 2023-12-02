export const hrFormFields = [
	{
		name: 'email',
		type: 'email',
		description: 'Adres e-mail',
		placeholder: 'kontakt@hh.com',
	},
	{
		name: 'fullName',
		type: 'text',
		description: 'Imię i nazwisko',
		placeholder: 'Imię i nazwisko',
	},
	{
		name: 'company',
		type: 'text',
		description: 'Nazwa firmy',
		placeholder: 'Firma',
	},
	{
		name: 'maxReservedStudents',
		type: 'number',
		description: 'Maksymalna liczba osób na liście Do rozmowy (1-999)',
		placeholder: 'Maksymalna liczba studentów',
		min: 1,
		max: 999,
	},
];
