function random(inferior = 0, superior = 1, tipo = 'float') {
    if (superior < inferior) {
        console
            .error("Numero superior deve ser maior que o numero");
        return;
    }

    switch (tipo) {
        case 'float':
            return Math.random()
                * (superior + 1 - inferior) + (inferior);
        case 'int':
            return Math.floor(Math.random()
                * (superior + 1 - inferior)) + (inferior);
    }
}
function validaCPF(cpf) {
    let soma = 0;
    for (let i = 0; i < pesos.length; i++) {
        soma += parseInt(cpf[i]) * pesos[i];
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
    cpf = cpf.replace(/[^\d]/g, '');
}

// Função para validar email e telefone
// Retorna um objeto com os resultados da validação

// Regex básico para email (formato geral: algo@dominio.com)
function validaEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
}

// Regex para telefone (formato simples: aceita dígitos, espaços, hífens, parênteses, opcional + no início)
// Ajuste conforme o país/região necessário; este é genérico
function validaNumero(numero) {
    const neumroRegex = /^\+?[\d\s\-\(\)]+$/;
    const isnumeroValid = numeroRegex.test(numero) && numero.replace(/[^\d]/g, '').length >= 10; // Pelo menos 10 dígitos
}


// Saída: { emailValid: false, phoneValid: false, bothValid: false }

module.exports = {
    random, validaCPF, validaEmail, validaNumero
}