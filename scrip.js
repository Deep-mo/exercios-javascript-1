//personagem
let vida = 25;
let poçoes = 2
let itens = {
    arma : 'espada e escudo',
   
    armadura : true,
};
//jogo
function Inventario(){
    console.log('Inventario');
    console.log(itens);
}
function Mostrarvida(){
    console.log( 'Seus atuais pontos de vida são ' + vida)
}

console.log('Um monstro aparece')


function luta(){
    if(arma = 'espada e escudo'){
        console.log('Com muita bravura voce puxa sua espada e mata o monstro,mas acaba perdendo um 5 pontos de vida ');
        vida = vida -5;

    }else{
        console.log('Foi uma batalha dificil mas você saiu vitorioso(menos 15 pontos de vida)');
        vida = vida - 15;

    }
}
luta()

function UsarCura(){
    if(poçoes >= 1){
        console.log('Poção de cura usada, mais 5 pontos de vida');
        vida = vida + 5;
        poçoes = poçoes - 1;
    }else{
        console.log('você não possui poções de cura');
    }
}
UsarCura()
Inventario()
Mostrarvida()