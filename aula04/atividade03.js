const input = require("../input");

(async() =>{
    console.log("Bem-Vindo ao LanXão\n 100-X-Salada R$ 12.00\n 101-X-Burger R$ 10.00\n 102 Cachorro quente R$ 8.50\n 103 Suco Natural R$ 6.00\n 104 Refrigerante R$ 5.00");
    console.log("Escolha um codigo");
    let codigo = Number(await input());
    console.log("Escolha quanto você quer");
    let quanti = Number(await input());
    switch(codigo){
        case 100:
            console.log(`Seu pedido é ${quanti} unidades e o seu valor total R$${12.00*quanti}`);
        break
        case 101:
            console.log(`Seu pedido é ${quanti} unidades e o seu valor total R$${10.00*quanti}`);
        break
        case 102:
            console.log(`Seu pedido é ${quanti} unidades e o seu valor total R$${8.50*quanti}`);
        break
        case 103:
            console.log(`Seu pedido é ${quanti} unidades e o seu valor total R$${6.00*quanti}`);
        break
        case 104:
            console.log(`Seu pedido é ${quanti} unidades e o seu valor total R$${5.00*quanti}`);
        break
        default:
            console.log("Código invalido");
    }

})();