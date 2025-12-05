function calcularDigito(cpf, pesos){
    let soma = 0;
    for (let i = 0; i < pesos.length; i++) {
        soma += parseInt(cpf[i]) * pesos[i];
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}
function validaCPF(cpf){
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');
    // Verifica se tem exatamente 11 dígitos e não é sequência repetida
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    // Calcula e verifica o primeiro dígito verificador
    const digito1 = calcularDigito(cpf, [10, 9, 8, 7, 6, 5, 4, 3, 2]);
    if (digito1 !== parseInt(cpf[9])) {
        return false;
    }

    // Calcula e verifica o segundo dígito verificador
    const digito2 = calcularDigito(cpf, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
    return digito2 === parseInt(cpf[10]);
}

console.log(validaCPF("517.743.888.04"));
module.exports = {
    random, validaCPF
}