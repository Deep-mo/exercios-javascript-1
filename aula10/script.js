const filme ={
    titulo : 'Batuman the Beguin',
    ano : 2015,
    Diretor : 'Robin Wilians',
    personagem : 'O Batuman',
}

mosntar(filme)
function mosntar(obejeto){
   for(prop in obejeto){
       if(typeof obejeto[prop] === 'string'){
           console.log(prop,obejeto[prop])
       }
   }
    
}