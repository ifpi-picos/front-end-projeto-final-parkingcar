async function listProprietariosVeiculos() {
	const empresas = await getProprietarioVeiculos();
	const table = gerarTabela(['Nome', 'CPF', 'Telefone'], empresas, [
		'nome',
		'cpf',
		'telefone',
	]);
	document.getElementById('table').append(table);
}
async function getProprietarioVeiculos() {
	const res = await http('/proprietario-veiculos');
	return res.json();
}

listProprietariosVeiculos();
