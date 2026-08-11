
const aluno = {
    nome: "Rafael",
    idade: 17,
    curso: "Desenvolvimento de Sistemas",
    notas: [8, 7, 9, 6]
};

function calcularMedia(aluno) {
    let soma = 0;

    for (let i = 0; i < aluno.notas.length; i++) {
        soma = soma + aluno.notas[i];
    }

    aluno.media = soma / aluno.notas.length;

    console.log("Nome:", aluno.nome);
    console.log("Média:", aluno.media);
}

calcularMedia(aluno);
