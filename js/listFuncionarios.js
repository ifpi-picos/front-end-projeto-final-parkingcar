async function listFuncionario() {
    const empresas = await getFuncionarios();
    const table = gerarTabela(['Nome', 'CPF','Telefone'],
	empresas,
    ['name', 'cpf','telefone'],)
    document.getElementById('table').append(table)
}
async function getFuncionarios() {
    const res = await http('/users-funcionario');
	return res.json();
}

listFuncionario();