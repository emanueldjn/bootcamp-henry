const persona = {
    nome: 'Emanuel',
    amigos: ["Esteffany", "Juan"],

    // metodo salluldar 
    saludar: function () { // this entende o contexto quando tem 'function'
        console.log(`Olá, meu nome é ${this.nome}!`); // Olá, meu nome é Emanuel!
    },

    despedirse: () => { // this nao entende o contexto com '() =>' pois nao está definido
        console.log(`Adeus, meu nome é ${this.nome}!`); // Adeus, meu nome é undefined!
    }
};

persona.saludar();
persona.despedirse();

// Ao invocar o método saludar(), o contexto é a instância do objeto 'persona', portanto, o nome é 'Emanuel'.
// Ao invocar o método despedirse(), o contexto é o objeto global, portanto  
// o nome é undefined pois 'this' não está definido dentro de uma função anônima.
// O método despedirse() não precisa de 'this' para funcionar corretamente, pois não está relacionado com o contexto de um objeto.
// A função anônima é uma função que não possui um nome, portanto, não é possível acessar 'this' dentro dela.

// THIS
// ni necesitas mantener el valor de this del ambito cicudante, las funciones flecha heredan el valor de this del contexto lexio en que el furn creadas.

// callbacks 
// en funciones donde concision y la captura del cntexto son beneficiosas, las funciones flecha son utiles al trabajar on metodos como 
// map, filter, reduce. Reducen la necesidad de funciones anomimas adicionales y brindan un codigo más limpio. 


// Herencia
// cuando se desea evitar problemas relacionados con el binding de this, las funciones tradicionales puede tener problemas cuando utilizan 
//en situaciones donde el valor de this cambia(por ejempo, en eventos de DOM)
// las funciones flecha eliminan este problema al heredar this del cambito circundante.