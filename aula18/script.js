let postagem = {
    titulo: 'Novos filmes',
    mensagem: ' Os filems de são...',
    autor: 'Mobi',
    vizualizaçoes: '120',
    comentarios: [
        comentario1 ={
            autor: 'carlitos',
            mensagem: 'Concordo,que tais filmes...',
        },
       comentario2 = {
           autor: 'XXExplosionDeath2000',
           mensagem: 'é uma bosta',
       }
    ],
    estaAoVivo: 'Sim',

}

function criarPostagem(postagem){
    
    for(let chave in postagem)
    console.log(chave,postagem[chave])
}

criarPostagem(postagem)
