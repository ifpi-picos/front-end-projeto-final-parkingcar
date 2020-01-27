function gerarTabela(headers, body, props) {
	const tabela = document.createElement('table');
	const trThead = document.createElement('tr');
	const tbody = document.createElement('tbody');
	const thead = document.createElement('thead');
	headers.forEach(elementTh => {
		const th = document.createElement('th');
		th.innerText = elementTh;
		trThead.append(th);
	});
	thead.append(trThead);
	tabela.append(thead);

	body.forEach(elementBody => {
		const tr = document.createElement('tr');
		props.forEach(elementProps => {
			const td = document.createElement('td');
			td.innerText = elementBody[elementProps] || '';
			tr.append(td);
		});
		tbody.append(tr);
	});
	tabela.append(tbody);
	return tabela;
}

function getAuth() {
	return localStorage.user ? JSON.parse(localStorage.user) : {};
}

function http(url, { body, method = 'GET' } = {}) {
	const token = getAuth() ? getAuth().token : '';
	const urlBase = 'http://localhost:3000/api';
	let option = {
		method: method,
		headers: new Headers({
			'Content-Type': 'application/json; charset=utf-8',
			Authorization: token,
		}),
	};
	if (body) {
		option.body = JSON.stringify(body);
	}
	return fetch(urlBase + url, option);
}

function createObjectWithId(object) {
	const newObject = {};
	Object.keys(object).forEach(key => {
		newObject[key] = document.getElementById(object[key]).value;
	});
	return newObject;
}
function clearForm(array) {
	array.forEach(element => {
		document.getElementById(element).value = '';
	});
}
