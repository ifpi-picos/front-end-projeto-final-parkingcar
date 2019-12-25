var test = {
	gerarTabela(headers, body, props) {
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
	},
};

module.exports = test;