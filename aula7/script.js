verificarcelocidademaxima(60)

function verificarcelocidademaxima(velocidade){
   const maximo = 70
   const kmponto = 5
    if(velocidade <= maximo)
       console.log('ok');
       
    else {
        const ponto = Math.floor(((velocidade - maximo) / kmpoonto));
            if(ponto >= 12){
                console.log('carteira suspensa');
            }else{
                console.log('total de pontos na carteira' +' '+ ponto)
            }
    
   }
    
}
