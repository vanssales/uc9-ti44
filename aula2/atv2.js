const input = require("../input");

(async () => {
    console.log("Digite um numero");
    let primeiro = Number(await input());

    console.log("Digite um segundo numero");
    let segundo = Number(await input());

    console.log("A soma é "+(primeiro+segundo));
})();