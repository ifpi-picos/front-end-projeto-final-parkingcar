async function cadastrarFuncionario() {
	const proprietario = createObjectWithId({
		nome: 'id-nome',
		cpf: 'id-cpf',
		telefone: 'id-telefone',
		endereco: 'id-endereco',
		observacao: 'id-descricao',
	});

	try {
		const res = await http('/proprietario-veiculos', {
			method: 'POST',
			body: { ...proprietario },
		});
		if (res.status === 201) {
			alert('Usuario cadastrada com sucesso');
			clearForm([
				'id-nome',
				'id-cpf',
				'id-telefone',
				'id-endereco',
				'id-descricao',
			]);
		} else {
			alert('Algo de errado');
		}
	} catch (error) {
		alert('Algo de errado');
		console.log(error);
	}
}

document.getElementById('btn-new').addEventListener('click', () => {
	cadastrarFuncionario();
});
