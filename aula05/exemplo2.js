const input = require("../input");

(async () => {
    do{ // smepre quando eu quero que execute pelo menos uma vez
        console.log("Deseja continuar: (sim)");
        var continuar = await input();
    }while (continuar == "sim");
})();
