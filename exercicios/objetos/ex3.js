

const carro = {
    nome: "Civic",
    cor: "Preto",
    modelo: "Sedan",
    opcionais: {
        "ar condicionado": true,
        "direção elétrica": true,
        "multimídia": false
    }
};

function exibirCarro(carro) {
    console.log("Nome:", carro.nome);
    console.log("Cor:", carro.cor);
    console.log("Modelo:", carro.modelo);
    console.log("Opcionais:", carro.opcionais);
}

function alterarOpcional(carro, opcional, valor) {
    carro.opcionais[opcional] = valor;
}

exibirCarro(carro);

alterarOpcional(carro, "multimídia", true);

exibirCarro(carro);
