// Scope Global:
// Una variable declarada fuera de cualquier función o bloque tiene alcance global.
// Las variables globales pueden ser accedidas desde cualquier parte del código.


let globalVar = "Soy global";

function mostrarGlobal() {
  console.log(globalVar); // Accede a la variable global
}

mostrarGlobal(); // Soy global


// Scope de Función:
// Las variables declaradas dentro de una función solo pueden ser accedidas dentro de esa función.
// No son accesibles fuera de la función

function saludar() {
    let mensaje = "Hola"; // Scope de función
    console.log(mensaje);  // Accesible dentro de la función
  }
  
  saludar(); // Hola
  console.log(mensaje); // Error, 'mensaje' no está definido fuera de la función
  

// Scope de Bloque:
// Introducido con let y const, las variables declaradas dentro de un bloque (dentro de {}) tienen un alcance limitado al bloque.
// Esto aplica a estructuras como if, for, while, etc

if (true) {
    let nombre = "Emanuel"; // Scope de bloque
    console.log(nombre); // Emanuel, accesible dentro del bloque
  }
  
  console.log(nombre); // Error, 'nombre' no está definido fuera del bloque

  /* Resumen:
  Global: Accesible desde cualquier parte del programa.
  Función: Solo accesible dentro de la función en que fue declarada.
  Bloque: Solo accesible dentro del bloque {} en que fue declarada.
  Entender el scope es clave para evitar problemas de accesibilidad de variables y para controlar mejor el comportamiento del código. */