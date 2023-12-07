export const isValidEmail = (email: string): boolean => {
	return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
};

export const isNumberInRange = (num: number): boolean => {
	return num >= 1 && num <= 5;
};

export const isValidURL = (url: string): boolean => {
	try {
		new URL(url);
		return true;
	} catch (e) {
		return false;
	}
};

export interface JSONData {
	email: string;
	courseCompletion: number;
	courseEngagement: number;
	projectDegree: number;
	teamProjectDegree: number;
	bonusProjectUrls: string[];
}

export const validateJSON = (jsonData: JSONData[]): string => {
	if (!Array.isArray(jsonData)) {
		return 'JSON data must be an array.';
	}

	for (const item of jsonData) {
		const {
			email,
			courseCompletion,
			courseEngagement,
			projectDegree,
			teamProjectDegree,
			bonusProjectUrls,
		} = item;

		if (
			!isValidEmail(email) ||
			!isNumberInRange(courseCompletion) ||
			!isNumberInRange(courseEngagement) ||
			!isNumberInRange(projectDegree) ||
			!isNumberInRange(teamProjectDegree) ||
			!Array.isArray(bonusProjectUrls) ||
			!bonusProjectUrls.every(isValidURL)
		) {
			return 'Błędnie dane wejściowe w pliku JSON. Zweryfikuj zawartość pliku.';
		}
	}

	return '';
};

export interface CSVRow {
	email: string;
	courseCompletion: string;
	courseEngagement: string;
	projectDegree: string;
	teamProjectDegree: string;
	bonusProjectUrls: string;
}

export const validateCSVRow = (row: CSVRow): boolean => {
	const {
		email,
		courseCompletion,
		courseEngagement,
		projectDegree,
		teamProjectDegree,
		bonusProjectUrls,
	} = row;

	return (
		isValidEmail(email) &&
		isNumberInRange(parseInt(courseCompletion)) &&
		isNumberInRange(parseInt(courseEngagement)) &&
		isNumberInRange(parseInt(projectDegree)) &&
		isNumberInRange(parseInt(teamProjectDegree)) &&
		bonusProjectUrls.split(',').every(isValidURL)
	);
};
