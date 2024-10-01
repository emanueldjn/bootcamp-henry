// Usada para declarar variables que pueden ser reasignadas a lo largo del código.
// Tiene un alcance de bloque (es decir, la variable solo es accesible dentro del bloque {} en el que fue declarada).
// Puede ser inicializada sin valor y se le puede asignar un valor posteriormente.

let edad = 25;
edad = 26; // Asignación válida

if (true) {
let nombre = "Emanuel"; // Alcance limitado al bloque
console.log(nombre); // Emanuel
}
console.log(nombre); // Error, nombre no es accesible fuera del bloque

// CONST:

/* Usada para declarar constantes, es decir, variables que no pueden ser reasignadas después de ser inicializadas.
Al igual que let, tiene un alcance de bloque.
Debe ser inicializada en el momento de la declaración */

const PI = 3.14;
PI = 3.1415; // Error, porque PI no puede ser reasignada 

const persona = { nombre: "Emanuel", edad: 25 };
persona.edad = 26; // Permitido modificar las propiedades de los objetos

console.log(persona); // { nombre: 'Emanuel', edad: 26 }

// RESUMEN:

// Usa let cuando esperas que el valor de la variable cambie
// Usa const cuando quieres garantizar que la variable no sea reasignada (reatribuida)