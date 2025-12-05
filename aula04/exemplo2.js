function tigrinho(){
    return Math.floor(Math.random()*10);
}

let sorte = tigrinho()

switch(true){
    case sorte > 3:
        console.log("Parabéns você ganhou o premio maximo");
    case sorte == 2:
        console.log("Parabéns você ganhou uma maça");    
    default:
        console.log("Ganhou nada");
}