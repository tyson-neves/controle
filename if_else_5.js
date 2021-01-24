// Estrutura de um bloco dentro do outro. O exemplo e o resultado é o mesmo das aulas passadas, mas a forma de organizar é diferente (NÃO É UMA FORMA MUITO USUAL DE SE FAZER O CÓDIGO)

const hora = 21;
let saudacao;

if (hora < 12) {
    saudacao = "Bom Dia!";
} else { 
    if (hora < 18) {    
        saudacao = "Boa tarde!";

    } else {
        if (hora < 22) {
            saudacao = "Boa Noite!";
    } else {
        saudacao = "Muito tarde, vá para a cama"
    }
    }
}

console.log(saudacao);