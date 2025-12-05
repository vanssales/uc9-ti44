const input = require("../input");
/*
 um progama que verifica se a pessoa colocou saldo maior do que 5 e apertou o número 42, se for verdade
 de para ele uma coca-cola, se não mande-o embora e devolva o dinheiro
*/

(async ()=>{
    console.log("Coloque um valor ");
    let val = Number (await input());

    console.log("aperte um numero ");
    let num = Number (await input());

    if(isNan(val)){
        console.log("Saldo deve ser um numero");
    }else if(isNan(num)){
        console.log("Saldo deve ser um numero");
    }else if(val > 5 && num ==42){
        console.log("Receba seu refri");
    }else{
        (console.log("Saldo insuficiente"));
    }
})();