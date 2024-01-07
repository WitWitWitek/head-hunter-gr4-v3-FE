export async function checkGitHubUsernameTrue(username: string) {
	const apiUrl = `https://api.github.com/users/${username}`;
	try {
		const response = await fetch(apiUrl);
		if (response.ok) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.error('Błąd:', error);
		return false;
	}
}
