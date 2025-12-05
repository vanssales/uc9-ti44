//Cardápio básico da lanchonete (menu simples)

const input = require("../input");



(async() =>{
    console.log("Escolha uma opção do cardápio\n 1-X-Salada\n 2-X-Burger\n Misto Quente\n Suco Natural\n Refrigerante");
    let menu = Number(await input());
    switch(menu){
        case 1:
            console.log("X-salada");
        break
        case 2 :
            console.log("X-Burger");
        break
        case 3:
            console.log("Misto Quente");
        break
        case 4:
            console.log("Suco Natural");
        break
        case 5:
            console.log("Refrigerante");
        break
        default:
            console.log("Opção inválida, tente novamente");
    }

})();