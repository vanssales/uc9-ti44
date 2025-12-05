const input = require("../input");

(async() =>{
    console.log("Bem-vindo");
    console.log("Escolha o tamnho do combo\n P: Combo pequeno R$15.00\n M: Combo médio R$20.00\n ou G: Combo Grande R$25.00");
    let tamanho = String(await input());

    switch(tamanho.toUpperCase()){
        case "P":
        console.log("Combo escolhido P,: Combo pequeno (R$ 15.00). ");
    break
        case "M":
        console.log("Combo escolhido M,: Combo pequeno (R$ 20.00). ");
    break
        case "G":
        console.log("Combo escolhido G,: Combo pequeno (R$ 25.00). ");
    break
    default:
        console.log("Tamnho inválido.");
    }
})();