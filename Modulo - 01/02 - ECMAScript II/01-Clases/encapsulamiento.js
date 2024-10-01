// Imagina que tienes una cuenta bancaria en la que guardas dinero. Solo puedes acceder a ella mediante tus credenciales (contraseña). 
// De esta forma puedes mantener tu dinero seguro. Esta cuenta es un sistema (clase) que ofrece algunos métodos, como por ejemplo, 
// depositar o retirar información, pero en la cual no conoceremos el funcionamiento o los detalles internos.

class CajaFuerte {
    constructor() {
        this._dinero = 0; // detalle interno oculto
    }

    depositar(cantidad) {
        this._dinero += cantidad
    }
    
    retirar(cantidad) {
        if(cantidad <= this._dinero) {
            this._dinero -= cantidad;
            return cantidad;
        }
        return 0; // retorna 0 si no hay suficiente dinero
    }
}


// El encapsulamiento  en es el principio de ocultar los detalles internos de la implementación de un objeto, exponiendo solo las interfaces necesarias para interactuar con él. 
// Esto asegura la integridad de los datos y la seguridad de la implementación.