async function listVeiculo() {
    const veiculos = await getVeiculos();
    const table = gerarTabela(['Modelo', 'Cor', 'Placa'],
	veiculos,
    ['modelo', 'cor', 'placa'],)
    document.getElementById('table').append(table)
}
async function getVeiculos() {
    const res = await http('/veiculos');
	return res.json();
}

listVeiculo();