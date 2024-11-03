// Função para somar dois números
const sumar = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') return null; 
    
    const suma = a + b;
    return suma;
};

// Função para calcular o total em uma fatura
const calcularTotal = (items) => {
    if (!items.length) {
        throw new Error("Factura Invalida!");
    }
    
    let total = 0;

    for (let item of items) {
        total += item.quantity * item.price; // Corrigido para multiplicar quantity por price
    }

    return total;
};

// Exportando as funções
module.exports = {
    sumar,
    calcularTotal,
}