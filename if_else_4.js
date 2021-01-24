// esse é somente uma forma diferente de escrever a estrutura da aula passada usando else if juntos para definir as coisas ( ESSA É A FORMA PREFERIDA DOS DESENVOLVEDORES PARA TRABALHAR)

const hora = 11;
let saudacao;

if (hora < 12) {
    saudacao = "Bom Dia!";
} else if (hora < 18) {    
        saudacao = "Boa tarde!";
} else if (hora < 22) {
        saudacao = "Boa Noite!";
} else {
    saudacao = "Muito tarde, vá para a cama"
}


console.log(saudacao);
