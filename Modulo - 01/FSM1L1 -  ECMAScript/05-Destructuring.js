
function mostrarNombre(persona) {
    const { nombre, apellido, } = persona
    
    console.log(`Hola, mi nombre es ${nombre} y su apellido es ${apellido}`);
}

const persona = {
    nombre: "Emanuel",
    apellido: "Nascimento",
    edad: 25,
    email: "emanuelnas29@gmail.com",
    direcction: "calle falsa 123",
    ciudad: "caba",
    pais: "argentina",
};


mostrarNombre(persona);


// ARRAYS

const miArray = [1, 2, 3, 4];
const [num1, num2, num3, num4] = miArray


const palabras = ["hola", "emanuel", "ey@gmail.com", "calle 1234"]
const saludo = [saludo, nombre, email, direccion] = palabras