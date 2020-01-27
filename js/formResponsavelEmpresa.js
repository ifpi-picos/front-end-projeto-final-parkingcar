async function cadastrarUserGestor() {
	const userGestor = createObjectWithId({
		name: 'id-nome',
		cpf: 'id-cpf',
		telefone: 'id-telefone',
		email: 'id-email',
		_id_empresa: 'id-empresa',
		username: 'id-username',
		password: 'id-password',
	});
	const passwordConfirm = document.getElementById('id-confirm-password').value;

	if (userGestor.password !== passwordConfirm) {
		alert('Senhas são diferentes');
	} else {
		try {
			const res = await http('/users-gestores', {
				method: 'POST',
				body: { ...userGestor, role: 'gestor' },
			});
			if (res.status === 201) {
				alert('Usuario cadastrada com sucesso');
				clearForm([
					'id-nome',
					'id-cpf',
					'id-telefone',
					'id-email',
					'id-empresa',
					'id-username',
					'id-password',
					'id-confirm-password',
				]);
			} else {
				alert('Algo de errado');
			}
		} catch (error) {
			alert('Algo de errado');
			console.log(error);
		}
	}
}

document.getElementById('btn-new').addEventListener('click', () => {
	cadastrarUserGestor();
});

async function getEmpresas() {
	const select = document.getElementById('id-empresa');

	const res = await http('/empresas');

	const empresas = await res.json();

	empresas.forEach(empresa => {
		const option = document.createElement('option');
		option.textContent = empresa.name;
		option.value = empresa._id;
		select.appendChild(option);
	});
}

getEmpresas();
