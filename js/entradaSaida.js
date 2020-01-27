const placaPesquisa = document.getElementById('id-placa-pesquisa');
let veiculo = {};
function registarEntradaESaida() {}

async function getVeiculos(placa) {
	const res = await http(`/veiculos/placa/${placa}`);
	return res.json();
}

placaPesquisa.addEventListener('keypress', async event => {
	if (event.which == 13 || event.keyCode == 13) {
		veiculo = await getVeiculos(placaPesquisa.value);
		document.getElementById('id-placa').value = veiculo.placa;
		document.getElementById('id-cor').value = veiculo.cor;
		document.getElementById('id-modelo').value = veiculo.modelo;
		document.getElementById('id-descricao').value = veiculo.descricao;
	}
});

document.getElementById('btn-confirm').addEventListener('click', async () => {
	const entradaESaida = createObjectWithId({
		placa: 'id-placa',
		status: 'id-status',
	});

	try {
		const res = await http('/entrada-e-saida/', { method: 'POST', body: entradaESaida });
		if (res.status === 201) {
			alert('sucesso');
			clearForm([
				'id-placa',
				'id-placa-pesquisa',
				'id-cor',
				'id-modelo',
				'id-descricao',
                'id-status',
                'id-hora'
            ]);
            veiculo = {};
		} else {
			alert('Algo de errado');
		}
	} catch (error) {
		alert('Algo de errado');
		console.log(error);
	}
});
