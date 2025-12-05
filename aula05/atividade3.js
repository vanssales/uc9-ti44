const input = require("../input");

(async()=>{
    let agenda = [];
    let continuar;
    do{
        console.log("Escreva um nome");
        let nomeE= await input();

        console.log("Escreva um numero");
        let telE= await input();
        
        agenda.push({
            nome: nomeE,
            telefone: telE
        });
        console.log("Deseja continuar? (sim)")
        continuar= (await input()).ToLowerCase();
        
    }while(agenda.length <=5 && continuar == "sim")
    console.log(agenda)
})();