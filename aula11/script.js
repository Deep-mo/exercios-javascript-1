somar(15)

function somar(limite){
    let multiplo3 = 0;
    let multiplo5 = 0;
    for(let i = 0; i <= limite; i++){
        if( i % 3 === 0){
             multiplo3 +=  i;
        }if( i % 5 === 0){
    multiplo5 += i;
        }}
   let soma = multiplo5 + multiplo3;
   console.log(soma)
}