/*
faça um progama que sorteio até 10 números
ou até o usuario acertar
*/

const input = require("../input");



(async () => {
    let = sortear
    let num
    let i=0
    do{
        let sortear = Math.floor(Math.random()*10);
        console.log("Adivinhe qual o numero: ");
        num = Number(await input());
        i++
    }while (sortear != num && i<10);
})();