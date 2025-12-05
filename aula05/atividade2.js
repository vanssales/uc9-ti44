/*
faça um progama que sorteio até 10 números
ou até o usuario acertar
*/

const input = require("../input");

(async () => {
    for(let sortear=-1, num, i=0;sortear != num && i<10; i++);{
        sortear = Math.floor(Math.random()*11);
        console.log("Adivinhe qual o numero: ");
        num = Number(await input());
    }
})();