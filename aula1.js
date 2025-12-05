console.log("Olá mundo");

var nome = "Kevin"
// estou fazendo uma concatenação
console.log ("Olá " +nome);

var idade = 21;
var tel = 1699999999;
// estou faznedo uma iterpolação
/*
"" - aspas
'' - apostrofe
`` - crase
*/
console.log (`Olá ${nome}, sua idade é ${idade}`);

/*
() - para funções
[] - para vetores
*/

//camalcase
var cestaCafe = []; // estou declarando um vetor
cestaCafe[0] = "café";  // uma atribuição
cestaCafe[1] = "ovo";

//undercase
var cesta_cafe = ["café", "ovo"];

cestaCafe.push("bacon");
cesta_cafe.push("pão");

console.log(cestaCafe);
console.log(cesta_cafe);

var list = [];

list[0] = ("Seu nome "+nome);
list[1] = ("Sua idade "+idade);
list[2] = ("Seu numero "+tel);

console.log(list);

// estrutura, dicionario, classe anônima
var usuario = {
    nome: "Kevin",
    idade: 21,
    Telefone: "1699999999"
}
console.log(usuario.idade);

var lista1 = [];

lista1.push({
    nome: "Renato Fernando Nogueira",
    telefone: "51 3617-5036",
    endereco: "Beco Rosa Selvagem 930",
});
lista1.push({
    nome: "Fernando Nogueira",
    telefone: "51 7594-5036",
    endereco: "Rosa Selvagem 784"
});

// codigo, nome, valores exibir a soma no final.

var listaProdutos = [];

listaProdutos.push({
    produto: "arroz",
    codigo: "1234",
    valor: 22.00

});
listaProdutos.push({
    produto: "carne",
    codigo: "3574",
    valor: 45.00

});

var soma = listaProdutos[0].valor + listaProdutos[1].valor;
console.log("A soma do seu estoque é "+soma);

var listaAlunos = [];

listaAlunos.push({
    nome: "Kevin",
    nota: 5.9
});
listaAlunos.push({
    nome: "Nicolas",
    nota: 7.9
});
listaAlunos.push({
    nome: "Anthony",
    nota: 6
});

var soma = listaAlunos[0].nota + listaAlunos[1].nota + listaAlunos[2].nota;
console.log("A soma do seus alunos " +soma/3);