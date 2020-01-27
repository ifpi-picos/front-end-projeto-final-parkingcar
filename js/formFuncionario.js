async function cadastrarFuncionario() {
	const userGestor = createObjectWithId({
		name: 'id-nome',
		cpf: 'id-cpf',
		telefone: 'id-telefone',
		email: 'id-email',
		username: 'id-username',
		password: 'id-password',
	});
	userGestor._id_empresa = getAuth().user._id_empresa
	const passwordConfirm = document.getElementById('id-confirm-password').value;

	if (userGestor.password !== passwordConfirm) {
		alert('Senhas são diferentes');
	} else {
		try {
			const res = await http('/users-funcionario', {
				method: 'POST',
				body: { ...userGestor, role: 'funcionario' },
			});
			if (res.status === 201) {
				alert('Usuario cadastrada com sucesso');
				clearForm([
					'id-nome',
					'id-cpf',
					'id-telefone',
					'id-email',
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
	cadastrarFuncionario();
});
