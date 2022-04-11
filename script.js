let endereço = {
      rua: 'Targino',
      Cidade: 'Araucária',
      CEP: '00101107',

}


function exibirEndereço(endereço){
    for(let chave in endereço)
    console.log(chave,endereço[chave])
}

exibirEndereço(endereço)

