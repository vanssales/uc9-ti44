const input = require("../input");

(async ()=>{
    let pao = 2
    let salsicha = 5
    let bacon = 7
    let pure = 4
    let salada = 2
    let batata_palha = 1

    let hotdogsimples = pao + salsicha + pure + batata_palha
    let dogsalada = pao + salsicha + salada + batata_palha
    let dogduplo = pao + salsicha*2 + pure + bacon
    let dogtudo = pao + salsicha*2 + pure + bacon + salada

    console.log("Bem-Vindo ao Lanchonete LanXão\n   Este é o nosso cardápio\n1- HotDog simples Salsicha e pure\n2- Dog Salada Salsicha e salada\n3- Dog Duplo Especial Duas salsichas, purê e bacon\n4- Dog-Tudo Duas salsichas, purê em dobro, bacon, salada\n");
    console.log("Escolha seu pedido de 1 a 4");
    let pedido = Number(await input());
    console.log("Escolha seu desconto para seu pedido");
    let desc = Number(await input());
    
    

})();