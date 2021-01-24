const nota = 2;
// conceito A (10, 9) B (8.9 7) C (6.9 5) D (4.9 4.5) E (< 4.5)

if (nota >= 9 && nota <= 10) {
    console.log("Seu conceito foi A, Parabéns!!");
} else if (nota >= 7 && nota < 9) {
    console.log("Seu conceito foi B, continue firme!");
} else if ( nota >= 5 && nota < 7) {
    console.log("Seu conceito foi C, precisa estudar mais!");
} else if (nota >= 4.5 && nota < 5) {
    console.log("Seu conceito foi D, você precisa de reforço!");
} else {
    console.log("Seu conceito esta extremamente baixo, aulas de reposição e refoço são EXTREMAMENTE necessárias, procure a supervisão.");
}

console.log("Fim do programa.");
