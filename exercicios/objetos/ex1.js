
const produto1 = {
    nome: "Leite",
    preco: 6.50,
    categoria: "Laticínios"
};

const produto2 = {
    nome: "Café",
    preco: 18.90,
    categoria: "Bebidas"
};

function produtoMaisCaro(produto1, produto2) {
    if (produto1.preco > produto2.preco) {
        console.log("Nome:", produto1.nome);
        console.log("Categoria:", produto1.categoria);
        console.log("Preço:", produto1.preco);
    } else {
        console.log("Nome:", produto2.nome);
        console.log("Categoria:", produto2.categoria);
        console.log("Preço:", produto2.preco);
    }
}

produtoMaisCaro(produto1, produto2);



