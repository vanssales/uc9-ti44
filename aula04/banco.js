const input = require("../input");

// Atividade bancaria

(async ()=>{

    let saldo = 400

    console.log("Bem-Vindo ao Crediario Doris");
    console.log("Digite 1 para depositar ou digite 2 para sacar: ");
    let resposta = await input();

    console.log("Digite o valor a depósitar: ");
    let valor = Number(await input());

    if(resposta == "1" ){
        saldo = saldo += valor
            if(saldo <= 1);
            console.log("O valor minimo para deposito é de R$ 1,00");
    }else if(resposta == "2"){
        saldo -= valor
            if(saldo > 400);
            console.log("Ipossível de prosseguir, saldo menor do que o disponivel");
    }
    //console.log("Depósito realizado com successo!");
    //console.log(`Valor atual na conta: ${saldo}`);
})();