numerosprimos(15);

function numerosprimos(limite) {
    let ePrimo = true;
    for (let numero = 0; numero <= limite; numero++){
        for (let divisor = 2; divisor <= numero; divisor++){
            if(numero % divisor === 0){
                ePrimo = false;
                break;
            }
        }if (ePrimo) {console.log(numero)}
        
    }
    
}