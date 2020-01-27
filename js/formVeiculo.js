async function cadastrarUserGestor() {
	const userGestor = createObjectWithId({
		placa: 'id-placa',
		cor: 'id-cor',
		_id_proprietario_veiculo: 'id-proprietario',
		modelo: 'id-marca',
		descricao: 'id-descricao',
	});

	try {
		const res = await http('/veiculos', {
			method: 'POST',
			body: { ...userGestor, role: 'gestor' },
		});
		if (res.status === 201) {
			alert('Usuario cadastrada com sucesso');
			clearForm([
				'id-placa',
				'id-cor',
				'id-proprietario',
				'id-marca',
				'id-descricao',
			]);
		} else {
			alert('Algo deu errado');
		}
	} catch (error) {
		alert('Algo deu errado');
		console.log(error);
	}
}

document.getElementById('btn-new').addEventListener('click', () => {
	cadastrarUserGestor();
});

async function getProprietarioVeiculo() {
	const select = document.getElementById('id-proprietario');

	const res = await http('/proprietario-veiculos');

	const proprietarios = await res.json();

	proprietarios.forEach(proprietarios => {
		const option = document.createElement('option');
		option.textContent = proprietarios.nome;
		option.value = proprietarios._id;
		select.appendChild(option);
	});
}

getProprietarioVeiculo();
