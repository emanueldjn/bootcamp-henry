class Padre {
    caminar() {
        console.log('Padre caminha');
    }
}

class Hijo extends Padre {
    // Hijo hereda la capacidad de caminar de padre
}

class Hijo extends Padre {
    correr() {
        console.log('Hijo corre');
    }
}


let hijo = new Hijo();
hijo.caminar(); // console.log("padre Caminha")
hijo.correr(); // console.log("Hijo corre")



/*

    A classe Padre define o método caminar(), que imprime "Padre caminha" no console. 
    Qualquer objeto criado diretamente a partir de Padre pode usar esse método.

    A classe Hijo utiliza extends Padre, o que significa que ela herda tudo o que foi definido na classe Padre. 
    Como resultado, Hijo automaticamente tem o método caminar() disponível.


    Reutilização de código: Permite que o código comum seja definido em uma classe pai e utilizado por várias subclasses, 
    facilitando a manutenção e evitando a duplicação de código.

*/