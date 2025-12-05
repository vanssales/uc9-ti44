const input = require("../input");

(async () => {
    console.log ("Escreva uma frase contendo a palavra startup");
    let startup = await input();

    console.log(startup.replace("startup", "empresa"));
})();