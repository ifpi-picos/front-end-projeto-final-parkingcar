async function listEmpresas() {
    const empresas = await getGestores();
    const table = gerarTabela(['Nome', 'CPF', 'email', 'telefone'],
	empresas,
    ['name', 'cpf', 'email', 'telefone'],)
    document.getElementById('table').append(table)
}
async function getGestores() {
    const res = await http('/users-gestores');
	return res.json();
}

listEmpresas();