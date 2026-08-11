
const produtos_vendas = {
    cafes: [
        {
            sku: 7654,
            marca: "Povo Brasileiro",
            preco: 24.00,
            categoria: "Mercearia"
        },
        {
            sku: 8765,
            marca: "Soberano - Gourmet",
            preco: 29.00,
            categoria: "Mercearia"
        },
        {
            sku: 3467,
            marca: "Dose Certa",
            preco: 27.00,
            categoria: "Mercearia"
        }
    ]
};

const produtos_estoque = {
    cafes: [
        {
            sku: 3467,
            peso: 500.00,
            unidade: "mg",
            estoque: 101
        },
        {
            sku: 7654,
            peso: 250.00,
            unidade: "mg",
            estoque: 182
        },
        {
            sku: 8765,
            peso: 250.00,
            unidade: "mg",
            estoque: 46
        }
    ]
};

const produtos = [];

for (let i = 0; i < produtos_vendas.cafes.length; i++) {

    let venda = produtos_vendas.cafes[i];

    for (let j = 0; j < produtos_estoque.cafes.length; j++) {

        let estoque = produtos_estoque.cafes[j];

        if (venda.sku == estoque.sku) {

            let produto = {
                sku: venda.sku,
                marca: venda.marca,
                preco: venda.preco,
                categoria: venda.categoria,
                peso: estoque.peso,
                unidade: estoque.unidade,
                estoque: estoque.estoque
            };

            produtos.push(produto);
        }
    }
}

console.log(produtos);
