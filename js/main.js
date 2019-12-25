//import a from './methods.js';

function gerarTabela(headers, body, props) {
	const tabela = document.createElement('table');
	const trThead = document.createElement('tr');
	const tbody = document.createElement('tbody');
	const thead = document.createElement('thead');
	headers.forEach(elementTh => {
		const th = document.createElement('th');
		th.innerText = elementTh;
		trThead.append(th);
	});
	thead.append(trThead);
	tabela.append(thead);
	
	body.forEach(elementBody => {
		const tr = document.createElement('tr');
		props.forEach(elementProps => {
			const td = document.createElement('td');
			td.innerText = elementBody[elementProps];
			tr.append(td);
		});
		tbody.append(tr);
	});
	tabela.append(tbody);
	return tabela;
}

const veiculos = gerarTabela(
	['Placa', 'Modelo', 'Descrição'],
	[
		{
			placa: 'ABC-1234',
			modelo: 'Carro 1',
			descricao: 'Descrição...................................................',
		},
		{
			placa: 'DEF-5678',
			modelo: 'Carro 2',
			descricao: 'Descrição...................................................',
		},
		{
			placa: 'GHI-9012',
			modelo: 'Carro 2',
			descricao: 'Descrição...................................................',
		},
	],
	['placa', 'modelo', 'descricao'],
	);
	
	document.getElementById('table').append(veiculos);
	