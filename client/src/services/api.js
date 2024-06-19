/**
 * API BASE URL
 * @var	{String}
 */
const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Sign up user
 * @param	{object} userData
 */
export const signUpUser = async userData => {
	try {
		const response = await fetch(`${API_BASE_URL}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});
		const data = await response.json();

		if (response.ok) {
			localStorage.setItem('token', data.token);
			console.log('Sign up successful');
		} else {
			console.error('Sign up failed');
		}
	} catch (err) {
		console.error('Error :', err);
	}
}

/**
 * Log in user
 * @param	{object} credentials
 */
export const logInUser = async credentials => {
	try {
		const response = await fetch(`${API_BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		});
		const data = await response.json();

		if (response.ok) {
			localStorage.setItem('token', data.token);
			console.log('Log in successful');
		} else {
			console.error('Log in failed');
		}
	} catch (err) {
		console.error('Error :', err);
	}
}
