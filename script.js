const trs = document.querySelectorAll('tr')
const tabelaD = document.querySelector('table')
const buttonS = document.querySelector('button')


tabelaD.addEventListener('dblclick', function(e){
    if(e.target.parentNode.tagName != 'TR'){
        alert('O clique duplo tem que ser em uma célula da tabela para remover a linha!')
        return
    }else{
        e.target.parentNode.remove()
    }
})

buttonS.addEventListener('click', function(event){
    event.preventDefault();
    //event.stopPropagation()

    let inputNome = document.querySelector('input[name=nome]')
    let inputTelefone = document.querySelector('input[name=telefone]')
    let inputNascimento = document.querySelector('input[name=dataNascimento]')
    var nome = inputNome.value
    var telefone = inputTelefone.value
    var nascimento = inputNascimento.value
    //let textNome = document.createTextNode(nome)
    //let textTelefone = document.createTextNode(telefone)
    let tr = document.createElement('tr')
    let tdN = document.createElement('td')
    let tdT = document.createElement('td')
    let tdD = document.createElement('td')
    

    tdN.innerText = nome
    tdT.innerText = telefone
    tdD.innerText = nascimento
    tr.appendChild(tdN)
    tr.appendChild(tdT)
    tr.appendChild(tdD)
    tabelaD.appendChild(tr)

    inputNome.value = ''
    inputTelefone.value = ''
    inputNascimento.value = ''

})
