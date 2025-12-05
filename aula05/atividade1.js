const input = require("../input");

(async () => {
    while (continuar == "sim"){
        console.log("Deseja continuar: (sim)");
        var continuar = await input();
    }
})();