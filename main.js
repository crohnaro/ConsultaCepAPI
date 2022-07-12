'use strict';

const fillForms = (address) => {
    document.getElementById('rua').value = address.logradouro
    document.getElementById('bairro').value = address.bairro
    document.getElementById('cidade').value = address.localidade
    document.getElementById('uf').value = address.uf
    document.getElementById('ibge').value = address.ibge

} 

const searchCep = async() => {
    const cep = document.getElementById('cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`
    const data = await fetch(url)
    const address = await data.json()
    
    fillForms(address)
    
}

document.getElementById('cep')
        .addEventListener('focusout', searchCep)