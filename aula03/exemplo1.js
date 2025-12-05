const input = require("../input");

(async ()=>{
    console.log("Quantos anos você tem? ");
    let idade = await input();

    if(idade <= 0){
        console.log("Número invalido");
    }else if(18 > idade){
    if(18 > idade)
        console.log("Bloqueado");
    }else{
        console.log("Bem vindo!");
    }
})();