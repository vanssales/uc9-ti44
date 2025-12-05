/*
façam um progama que pede o nome e a idade
e mostre na saida usando interpolação a
seginte mensagem:
Olá nome, sua idade é 99:
*/

const input = require("../input");

(async () => {
    console.log("Qual sua nome e seu idade? ");
    let nome = await input();
    console.log("Qual sua idade? ");
    let idade = await input();

    console.log(`Olá ${nome}, sua idade ${idade}. `);
})();