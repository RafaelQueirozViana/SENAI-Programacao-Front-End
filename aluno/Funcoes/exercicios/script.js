// Exercicio 1

/*
function isEven(n) {
  if (n < 0) {
    return isEven(-n); // transforma número negativo em positivo
  }

  if (n === 0) {
    return true;
  }

  if (n === 1) {
    return false;
  }

  return isEven(n - 2);
}

console.log(isEven(50));


console.log(isEven(75));


console.log(isEven(-1));


*/

// Exercicio 2

/*


function isEven(n) {
  if (n < 0) {
    return isEven(-n);
  }

  if (n === 0) {
    return true;
  }

  if (n === 1) {
    return false;
  }

  return isEven(n - 2);
}

console.log(isEven(50));


console.log(isEven(75));


console.log(isEven(-1));


*/


// Exercicio 3

function countChar(texto, caractere) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === caractere) {
      contador++;
    }
  }

  return contador;
}

function countBs(texto) {
  return countChar(texto, "B");
}

console.log(countBs("BOB"));


console.log(countChar("kakkerlak", "k"));
