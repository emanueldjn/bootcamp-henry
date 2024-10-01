// estrutura de dados
// - valores e metodos
// disparam funciones
// constructor 

class Weapon {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // metodos/ações que os objetos vao fazer
    shot() {
        console.log("Bang!! (atirou)")
    }
    info() {
        console.log(`Nome: ${this.name}, Color: ${this.color}`)
    }
}

// gerando a arma
const weapon = new Weapon("AK-47", "Black");
console.log(weapon)

// usando a arma
weapon.shot();
weapon.info();

// criando outra arma
const weapon2 = new Weapon("M4A1", "Red");

// usando a segunda arma
weapon2.shot();
weapon2.info();


