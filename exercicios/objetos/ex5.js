const carrinho = {
    cliente: "Alice",

    itens: [
        {
            nome: "Smartphone",
            preco: 2200,
            quantidade: 1
        }
    ],

    cupons: ["MENOS10", "PROMO10", "10PORCENTO"],

    adicionarProduto: function (nome, preco, quantidade) {

        let encontrado = false;

        for (let i = 0; i < this.itens.length; i++) {

            if (this.itens[i].nome == nome) {

                this.itens[i].quantidade =
                    this.itens[i].quantidade + quantidade;

                encontrado = true;
            }
        }

        if (encontrado == false) {

            this.itens.push({
                nome: nome,
                preco: preco,
                quantidade: quantidade
            });
        }
    },

    calcularTotal: function () {

        let total = 0;

        for (let i = 0; i < this.itens.length; i++) {

            total = total +
                this.itens[i].preco * this.itens[i].quantidade;
        }

        this.total = total;
    },

    aplicarDesconto: function (cupom) {

        for (let i = 0; i < this.cupons.length; i++) {

            if (this.cupons[i] == cupom) {

                this.cupomAplicado = cupom;

                this.calcularTotal();

                this.total = this.total * 0.9;
            }
        }
    },

    exibirCupom: function () {

        console.log("Cliente:", this.cliente);

        for (let i = 0; i < this.itens.length; i++) {

            console.log("Produto:", this.itens[i].nome);
            console.log("Preço:", this.itens[i].preco);
            console.log("Quantidade:", this.itens[i].quantidade);
        }

        console.log("Preço total:", this.total);

        if (this.cupomAplicado) {
            console.log("Cupom:", this.cupomAplicado);
        } else {
            console.log("Cupom: nenhum");
        }
    }
};

carrinho.adicionarProduto("Mouse", 100, 2);

carrinho.adicionarProduto("Smartphone", 2200, 1);

carrinho.calcularTotal();

carrinho.aplicarDesconto("MENOS10");

carrinho.exibirCupom();

