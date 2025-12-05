const input = require("../input");

(async () => {
    console.log("Qual sua idade: ");
    let idade = await input();
    console.log("a sua idade é " + idade);
})();