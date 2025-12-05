const input = require("../input");

(async () => {
    console.log ("Digite um numero");
    let numero = Number(await input());

    console.log(numero*2);
})();