const input = require("../input");

(async() =>{
    console.log("Digite um valor da compra");
    let valor = await input();
    
    console.log("Qual sua forma de pagamento");
    let val2 = await input();

    let total = (val1+val2);

    switch(true){
        case total >= 100:
        console.log("Seu desconto é de 20% aplicado, valor final "+(val1-val2*0.2));
        break
        case total >= 50 && total < 100:
        console.log("Seu desconto é de 10% aplicado "+(val1-val2*0.1));
        break
        case total >= 20 && total < 50:
        console.log("Seu desconto é de 5% aplicado"+(val1-val2*0.05));
        break
        default:
            console.log("Sem desconto, valor muito baixo ");
    }
})();