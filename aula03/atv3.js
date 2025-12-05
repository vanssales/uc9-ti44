const input = require("../input");

(async ()=>{
    console.log("Escreva um numero");
    let numb = Number(await input());

    if(isNaN(numb)){
        console.log("Não é um numero ");
    }else if(numb == 0){
        console.log("Zero é neutro")
    }else if(numb %2 == 0){
        console.log("Seu numero é par ");
    }else{(numb %2 == 1)
        console.log("Seu numero é impar");
    }      
})();