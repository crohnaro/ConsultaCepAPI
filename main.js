const clearForm = (address) => {
    document.getElementById('rua').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('uf').value = ''
    document.getElementById('ibge').value = ''
} 



const fillForms = (address) => {
    document.getElementById('rua').value = address.logradouro
    document.getElementById('bairro').value = address.bairro
    document.getElementById('cidade').value = address.localidade
    document.getElementById('uf').value = address.uf
    document.getElementById('ibge').value = address.ibge
} 

const isNumber = (number) => /^[0-9]+$/.test(number)

const validCep = (cep) => cep.length == 9 && isNumber(cep)

const searchCep = async() => {
    clearForm()
    const cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`
    if(validCep(cep)){
        const data = await fetch(url)
        const address = await data.json()
        if (address.hasOwnProperty('erro')){
            document.getElementById('rua').value = 'Cep não encontrado!'
        }else{
            fillForms(address)
        }
    }else{
        document.getElementById('rua').value = 'Cep inválido'
    }
}

document.getElementById('cep')
        .addEventListener('focusout', searchCep)