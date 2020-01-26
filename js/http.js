function http(url, body, method = 'GET', token = '') {
	const urlBase = 'http://localhost:3000/api';
	const option = {
		method: method,
		body: JSON.stringify(body),
		headers: new Headers({
			'Content-Type': 'application/json; charset=utf-8',
			'Authorization': token,
		}),
	};
	return fetch(urlBase + url, option);
}
