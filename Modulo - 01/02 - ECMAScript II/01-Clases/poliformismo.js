/*
    O polimorfismo é um princípio da programação orientada a objetos que permite que classes diferentes implementem o mesmo método de maneiras diferentes. 
    Em termos simples, o polimorfismo permite que métodos com o mesmo nome tenham comportamentos distintos, dependendo da classe em que estão sendo usados.



*/

class Forma {
    dibujar() {
        console.log('Dibujando una forma generica');
    }
}

class Circulo extends Forma {
    dibujar() {
        console.log('Dibujando un circulo');
    }
}

class Cuadrado extends Forma {
    dibujar() {
        console.log('Dibujando un cuadrado');
    }
}

function dibujarForma(forma) {
    forma.dibujar(); // O método correto será chamado dependendo do objeto
    
} 

let circulo = new Circulo();
let cuadrado = new Cuadrado();

dibujarForma(circulo);  // Saída: "Dibujando un circulo"
dibujarForma(cuadrado); // Saída: "Dibujando un cuadrado"

/*
    Resumo:

    Polimorfismo permite que classes diferentes implementem o mesmo método de maneira diferente.
    No exemplo, tanto Circulo quanto Cuadrado possuem o método dibujar(), mas eles se comportam de maneira diferente quando chamados.
    Isso torna o código mais flexível e escalável, permitindo que a mesma função (dibujarForma) seja usada com diferentes tipos de formas 
    sem precisar saber exatamente qual é o tipo da forma.
*/