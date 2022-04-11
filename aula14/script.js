function criarPersonagem(nome,classe,raça,nivel,alinhamento){
   return{
        Nome : nome,
        Classe : classe,
        Raça : raça ,
        Nivel : nivel,
        Alinhamento : alinhamento,


    }
   
}

 const personagem1 = criarPersonagem('MagoMago','Mago','Fumaça',15,'chaotico-neutro');
 console.log(personagem1)