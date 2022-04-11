


let movimento = 'andar'


let açaomaior = maior(movimento,'andar');

function maior(movimento,açaotriger){
    return  movimento == açaotriger ? 'foi atacado' : 'segue o jogo'
}

console.log(açaomaior)