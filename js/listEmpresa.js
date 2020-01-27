async function listEmpresas() {
    const empresas = await getEmpresas();
    const table = gerarTabela(['Nome', 'CNPJ', 'Cidade','Telefone', 'Cep'],
	empresas,
    ['name', 'cnpj', 'cidade','telefone','cep'],)
    document.getElementById('table').append(table)
}
async function getEmpresas() {
    const res = await http('/empresas');
	return res.json();
}

listEmpresas();