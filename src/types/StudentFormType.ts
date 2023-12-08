export interface IStudentFormData {
	bio: string;
	canTakeApprenticeship: boolean;
	courses: string;
	education: string | null;
	email: string;
	expectedContractType: ExpectedContractType;
	expectedSalary: number | null;
	expectedTypeWork: ExpectedTypeWork;
	firstName: string;
	githubUsername: string;
	lastName: string;
	monthsOfCommercialExp: number;
	portfolioUrls?: string[] | null;
	projectUrls: string[];
	targetWorkCity: string;
	tel: string;
	workExperience: string;
}
export enum ExpectedContractType {
	UoP = 'Tylko UoP',
	B2B = 'Możliwe B2B',
	UZ_UoD = 'Możliwe UZ/UoD',
	IRRELEVANT = 'Brak preferencji',
}
export enum ExpectedTypeWork {
	AT_LOCATION = 'Na miejscu',
	CHANGE_OF_LOCATION = 'Gotowość do przeprowadzki',
	REMOTE = 'Wyłącznie zdalnie',
	HYBRID = 'Hybrydowo',
	IRRELEVANT = 'Bez znaczenia',
}
