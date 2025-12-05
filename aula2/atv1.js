const input = require("../input");

(async () => {
    console.log ("Qual é seu primeiro nome? ");
    let nome = await input();

    console.log ("Qual é seu sobrenome? ");
    let sobre_nome = await input();

    console.log(`Citação ${nome[0]}.${sobre_nome}`);
})();

