const input = require("../input");

(async () => {
    console.log ("Escreva uma frase");
    let frase = await input();
    console.log(frase.length);
})();