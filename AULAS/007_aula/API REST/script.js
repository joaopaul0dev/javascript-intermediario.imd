var campoCEP = document.querySelector('#cep');
var campos = ['logradouro', 'bairro', 'localidade', 'uf'];

function atualizarEnderecoPeloCEP() {
    let cep = campoCEP.value.replace(/\D/g, ''); // Remove caracteres não-numéricos
    
    // Validar se tem 8 dígitos
    if (cep.length !== 8) {
        alert('CEP deve conter 8 dígitos');
        limparCampos();
        return;
    }
    
    let requestURL = 'https://viacep.com.br/ws/' + cep + '/json/';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.send();
    request.onload = function () {
        let resposta = request.response;
        atualizarCamposDoFormulario(resposta);
    }
}

function atualizarCamposDoFormulario(dadosJson) {
    let dados = JSON.parse(dadosJson);
    if (!dados.erro) {
        campos.forEach(item => {
            document.getElementById(item).value = dados[item];
        });
    } else {
        alert('CEP não encontrado');
        limparCampos();
    }
}

function limparCampos() {
    campos.forEach(item => {
        document.getElementById(item).value = '';
    });
}

campoCEP.addEventListener('change', atualizarEnderecoPeloCEP);