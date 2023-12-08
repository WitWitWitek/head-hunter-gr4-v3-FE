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

export const validateJSON = (jsonData: JSONData[]): string[] => {
	const errors: string[] = [];

	if (!Array.isArray(jsonData)) {
		errors.push('JSON data must be an array.');
		return errors;
	}

	jsonData.forEach((item, index) => {
		const {
			email,
			courseCompletion,
			courseEngagement,
			projectDegree,
			teamProjectDegree,
			bonusProjectUrls,
		} = item;

		if (!isValidEmail(email)) {
			errors.push(`Błąd w rekordzie ${index + 1}: nieprawidłowy email.`);
		}
		if (
			!email ||
			!courseCompletion ||
			!courseEngagement ||
			!projectDegree ||
			!teamProjectDegree ||
			!bonusProjectUrls
		) {
			errors.push(`Błąd w rekordzie ${index + 1}: brakujące pole/pola.`);
			return;
		}
		if (
			!isNumberInRange(courseCompletion) ||
			!isNumberInRange(courseEngagement) ||
			!isNumberInRange(projectDegree) ||
			!isNumberInRange(teamProjectDegree)
		) {
			errors.push(
				`Błąd w rekordzie ${index + 1}: nieprawidłowe wartości liczbowe.`
			);
		}
		if (
			!Array.isArray(bonusProjectUrls) ||
			!bonusProjectUrls.every(isValidURL)
		) {
			errors.push(
				`Błąd w rekordzie ${index + 1}: nieprawidłowe URL-e w bonusProjectUrls.`
			);
		}
	});

	return errors;
};

export interface CSVRow {
	email: string;
	courseCompletion: string;
	courseEngagement: string;
	projectDegree: string;
	teamProjectDegree: string;
	bonusProjectUrls: string;
}

export const validateCSVRow = (
	row: CSVRow,
	rowIndex: number
): { isValid: boolean; error?: string } => {
	const {
		email,
		courseCompletion,
		courseEngagement,
		projectDegree,
		teamProjectDegree,
		bonusProjectUrls,
	} = row;

	if (!isValidEmail(email)) {
		return {
			isValid: false,
			error: `Błąd w wierszu ${rowIndex}: nieprawidłowy email.`,
		};
	}
	if (
		!email ||
		!courseCompletion ||
		!courseEngagement ||
		!projectDegree ||
		!teamProjectDegree ||
		!bonusProjectUrls
	) {
		return {
			isValid: false,
			error: `Błąd w wierszu ${rowIndex}: brakujące pole/pola.`,
		};
	}
	if (
		!isNumberInRange(parseInt(courseCompletion)) ||
		!isNumberInRange(parseInt(courseEngagement)) ||
		!isNumberInRange(parseInt(projectDegree)) ||
		!isNumberInRange(parseInt(teamProjectDegree))
	) {
		return {
			isValid: false,
			error: `Błąd w wierszu ${rowIndex}: nieprawidłowe wartości liczbowe.`,
		};
	}
	if (!bonusProjectUrls.split(',').every(isValidURL)) {
		return {
			isValid: false,
			error: `Błąd w wierszu ${rowIndex}: nieprawidłowe URL-e.`,
		};
	}
	return { isValid: true };
};

