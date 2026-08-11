// exercicio 1


// const pessoas = ["joão", "pedro", "lucas"];

// pessoas.push("nicolas");

// for (let i = 0; i <= pessoas.length - 1; i++) {
//     console.log(pessoas[i]);

// }

// pessoas.shift()

// console.log("array atualizado: ")
// for (let i = 0; i <= pessoas.length - 1; i++) {
//     console.log(pessoas[i]);
// }


// Exercicio 2



// const getNumbers = (array) => {
//     const arrayUpdated = [];

//     for (let currentNumber of array) {
//         if (typeof currentNumber == 'number') {
//             arrayUpdated.push(currentNumber);
//         }
//     }
//     return arrayUpdated;

// }


// console.log(getNumbers([2, 3, 4]))




// Exercicio 3


// const pedidosFunction = (arrayPedidos, code) => {
//     if (arrayPedidos.length < 10) {
//         arrayPedidos.push(code);

//     }

//     else {
//         arrayPedidos.unshift(arrayPedidos);
//     }

//     return arrayPedidos;
// }



// console.log(pedidosFunction(["Celular", "TV", "Computador"], 1121))


// Exercicio 4


// const gerarTextoCompras = (stringArray) => {

//     let stringText = "";

//     stringArray.forEach(element => {
//         stringText += element + ', '
//     });

//     return stringText;
// }

// console.log(gerarTextoCompras(['açucar', 'trigo', 'leite', 'pão']))

// Exercicio 5 


const gerarTextoCompras = (stringArray, formato) => {

    let stringText = "";

    if (formato == "texto") {
        stringArray.forEach(element => {
            stringText += element + ', '
        });

    }

    else if (formato == "lista") {
        stringArray.forEach(element => {
            stringText += '• ' + element + '\n'
        });
    }


    return stringText;
}

console.log(gerarTextoCompras(['açucar', 'trigo', 'leite', 'pão'], 'lista'))
