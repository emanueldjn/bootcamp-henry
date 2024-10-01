// copia las props de un objeto existente y agrega a una nueva props

const obj = {
    nome: "Emanuel",
    idade: 25
  };
  
  // Criando um novo objeto com uma nova propriedade
  const novoObj = { ...obj, nuevaProp: 'valor' };
  
  console.log(novoObj);
  // Saída: { nome: 'Emanuel', idade: 25, nuevaProp: 'valor' }

/* ------------------------------- */

// agrega dos elementos al final de un arreglo existente usando el operador spread.

const arr = [1, 2, 3];

// Criando um novo array com o spread operator
const novoArr = [...arr, 4, 5];

console.log(novoArr); // Saída: [1, 2, 3, 4, 5]

/* ----------------------------- */

// suma una cantidad indefinida de numeros pasados como argumentos a la funcion.

function sumar(...numeros) {
    return numeros.reduce((a, b) => a + b);
}

/* ------------------------------ */

// mustra un arrelgo de los argumentos adicionales pasados a la funcion

function miFucion(a, b, ...otros){
    console.log(a, b,...otros);
}
