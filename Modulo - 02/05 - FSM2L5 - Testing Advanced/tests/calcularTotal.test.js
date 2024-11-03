// // Calcular el total en una factura con un solo item
// calcular el total en una factura con varios items 
// manejar correcamente una lista vacia de item 

// [{ name: "Producto A", price: 10, qantity: 2}]
const { calcularTotal } = require("../index");

describe("a função calcularTotal", () => {
    it("deve calcular o total de um item", () => {
        expect(calcularTotal([{ name: "Produto A", price: 10, quantity: 2 }])).toEqual(20);
    });

    it("deve calcular o total em uma fatura com vários itens", () => {
        expect(calcularTotal([
            { name: "Produto A", price: 10, quantity: 2 },
            { name: "Produto B", price: 20, quantity: 3 },
            { name: "Produto C", price: 30, quantity: 4 }
        ])).toEqual(200);
    });

    it("deve arrojar um erro 'Factura Invalida!' em caso de receber um array vazio", () => {
        expect(() => calcularTotal([])).toThrowError("Factura Invalida!");
    });
});
