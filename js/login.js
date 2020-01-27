async function changeEndPoint(user) {
	if (user.role === 'admin') {
		location.href = '/pages/admin/dashboard.html';
	} else if (user.role === 'gestor') {
		location.href = '/pages/gestor/dashboard.html';
	} else {
		location.href = '/pages/funcionario/form/entrada-saida.html';
	}
}

document.addEventListener('submit', async event => {
	event.preventDefault();
	const auth = {
		username: document.getElementById('login-username').value,
		password: document.getElementById('login-password').value,
	};
	try {
		const res = await http('/auth/authenticate', {
			body: auth,
			method: 'POST',
		});
		if (res.status === 200) {
			res.json().then(result => {
				localStorage.setItem('user', JSON.stringify(result));
				changeEndPoint(result.user);
			});
		} else if (res.status === 401) {
			alert('Não altorizado');
		} else {
			alert('Algo de errado não esta certo');
		}
	} catch (error) {
		alert('Algo de errado não esta certo');
		console.error(error);
	}
});
