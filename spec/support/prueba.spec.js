const sumar = (a, b) => a + b;

describe("La funcion sumar", () => {
    it("Deve estar definida", () => {
        expect(sumar).toBeDefined()
    })

    it("debe sumar dos numeros enviados como argumentos", () => {
        expect(sumar(2, 3)).toBe(5)
        expect(sumar(10, -5)).toBe(5)
        expect(sumar(0, 0)).toBe(0)
    })
})