const input = require("../input");

(async ()=>{
    console.log("Você quer um presente misterioso");
    let presente = await input(); 
    if(presente == "sim"){
        console.log("Você ganhou abraço");
    }else(presente == "não");
        console.log("Você ganhou 50 reais");
})();