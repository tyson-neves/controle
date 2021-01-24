const hora = 23;
let saudacao;

if (hora < 12) {
    saudacao = "Bom Dia!";
} else {
    if (hora < 18) {     // podemos colocar outra estrutura de controle dentro de uma estrutura de controle.
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa Noite!";
    }
}

console.log(saudacao);
