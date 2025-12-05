/*
Faça uma função na biblioteca de vocês que valida
email e telefone, e reescreva o progama de agenda
cadastrando nome, email e telefone validos
*/

const {validaEmail} = require('./kevin');
const {validaNumero} = require('./kevin');
const input = require("../input");

(async () => {
    let agenda = [];
    for (let i = 0; i < 5; i++) {

        console.log("Escreva seu email: ");
        let emailE = await input();

        console.log("Escreva seu numero de telefone: ");
        let numE = await input();



        if (validaEmail(emailE) && validaNumero(numE)) {
            console.log("Email e numero adicionado com sucesso");

            agenda.push({
                email: emailE,
                telefone: numE

            });
        } else {
            console.log("Email e numero invalido");
        }

    }

    console.log(agenda);

})();