async function cadastrarEmpresa() {
	/*
    const empresa = {
		name: document.getElementById('id-nome').value,
		cnpj: document.getElementById('id-cnpj').value,
		cidade: document.getElementById('id-cidade').value,
		telefone: document.getElementById('id-telefone').value,
		cep: document.getElementById('id-cep').value,
    };
    */
	const empresa = createObjectWithId({
		name: 'id-nome',
		cnpj: 'id-cnpj',
		cidade: 'id-cidade',
		telefone: 'id-telefone',
		cep: 'id-cep',
	});
	try {
		const res = await http('/empresas', { method: 'POST', body: empresa });
		if (res.status === 201) {
			alert('Empresa cadastrada com sucesso');
			clearForm(['id-nome', 'id-cnpj', 'id-cidade', 'id-telefone', 'id-cep']);
		} else {
			alert('Algo de errado');
		}
	} catch (error) {
		alert('Algo de errado');
		console.log(error);
	}
}

document.getElementById('btn-new').addEventListener('click', () => {
	cadastrarEmpresa();
});
