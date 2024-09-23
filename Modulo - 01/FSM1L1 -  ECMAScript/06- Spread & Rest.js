const perro = {
    raza: "salchicha",
    nombre: "pancho",
    edad: 3,
    color: "marron",
};

// copia de perro 
const perro2 = {...perro}

// agregrando props
perro.collar = true;
console.log(perro2) // esta copiado pero no tiene el collar pois no esta en la misma memoria


// agregar elementos a arreglos

const miArreglo = [ true, "palabra", { a: 5 } ]
miArreglo.push("nuevo elemento")