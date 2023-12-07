export async function checkGitHubUsernameTrue(username: string) {
	const apiUrl = `https://api.github.com/users/${username}`;
	try {
		const response = await fetch(apiUrl);
		if (response.status === 200) {
			return true;
		} else if (response.status === 404) {
			return false;
		} else {
			throw new Error('Błąd podczas sprawdzania dostępności loginu');
		}
	} catch (error) {
		console.error('Błąd:', error);
		return false;
	}
}
