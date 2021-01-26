//break 
// Nessa estrutura ele vai fazendo o processo até o if ser verdadeiro, quando o if é === 3 ele para o bloco, sai dele e executa o próximo.

for(let i = 1; i <= 5; i++ ) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// continue
// Já o continue ele vai fazer o processo até o if ser verdadeiro e quando o if for === 3 ele para a execução do 3, mas não vai sair do bloco e sim continuar 4, 5.... ele só irá pular o 3.

for(let i = 1; i <= 5; i++ ) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

