const input = require("../input");

(async() =>{
    console.log("Digite sua quantidade de pontos");
    let pontos = Number(await input());
    switch(true){
        case pontos < 100:
        console.log("Cliente Iniciante, sem prêmios");
        break
        case pontos >= 100 && pontos < 300:
        console.log("Cliente Bronze, um vale do BK de R$ 50.00");
        break
        case pontos >= 300 && pontos < 700:
        console.log("Cliente Prata, pode comer em qualquer lanchonete de graça por 5 dias");
        break
        case pontos >= 700:
        console.log("Cliente Ouro, vale viajem pra qualquer lugar");
        break
    }
})();