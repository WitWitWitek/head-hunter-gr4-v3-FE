export type DynamicField = string | number | boolean | string[] | undefined;

export interface StudentFormType {
	email: string;
	tel: string;
	firstName: string;
	lastName: string;
	githubUserName: string;
	bio: string;
	targetWorkCity: string;
	expectedSalary: number;
	monthsOfCommercialExp: number;
	education: string;
	workExperience: string;
	courses: string;
	projectUrls: string[];
	portfolioUrls: string[];
	preferredWorkLocation: string;
	consentForUnpaidInternship: boolean;
	contractType: string;
	minSalary: string;
	maxSalary: string;
	[key: string]: DynamicField;
}
