const input = require("../input");

(async ()=>{
    console.log("Digite sua senha");
    let senha = await input();
    console.log("Digite sua codigo");
    let codigo = await input();

    if(senha == "senac123");
        console.log("Acesso permitido ");
    if(codigo.ToLowercase() == "senac123");
        console.log("Acesso permitido ");
    
})();