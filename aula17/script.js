function Endereço(rua,cidade,cep){
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
}

const endereço1 = new Endereço('a','b','c');
const endereço2 = new Endereço('a','b','c');

function saoIgauis(endereço1,endereço2){
      return endereço1.rua === endereço2.rua &&
             endereço1.cidade === endereço2.cidade &&
             endereço1.cep === endereço2.cep
}

console.log(saoIguais(endereço1,endereço2));

function temEndereçoMemmoriaIgual(endereço1,endereço2){
        return endereço1 === endereço2
}

console.log(temEndereçoMemmoriaIgual(endereço1,endereço2));