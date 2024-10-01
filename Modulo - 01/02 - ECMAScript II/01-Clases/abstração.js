/*
    O que é?: A abstração é um conceito que oculta os 
    detalhes complexos de como algo funciona, mostrando apenas o que é importante para o usuário.

    
*/

class Coche {
    constructor() {
        this._motorEncendido = false // propriedad privad => Propriedade da instância
    }

    _encenderMotor() {
        // método privado: Detalle interno sobre como se enciende el motor
        this._encenderMotor = true; // Aqui, 'this' se refere a esta instância de Coche
        console.log("Motor encendido");
    }

    _apagarMotor() {
        // método privado: Detalle interno sobre como se apaga el motor
        this._motorEncendido = false;
        console.log("Motor apagado");
    }
}


const meuCoche = new Coche(); // new => cria novo obj: Ele cria uma nova instância do objeto da classe. // Aqui, criamos uma nova instância
meuCoche.encender(); // Motor encendido // Chama o método na instância 'meuCoche'

/*
    # Exemplo com Coche:

    A classe Coche tem um motor que pode ser ligado ou desligado.
    Os métodos _encenderMotor() e _apagarMotor() são detalhes que explicam como o motor funciona.
    O usuário só precisa usar os métodos públicos encender() e apagar(), sem se preocupar com o que acontece dentro da classe.
    
    # Por que usar?

    Simplicidade: Fica mais fácil usar o objeto.
    Manutenção: Você pode mudar como as coisas funcionam dentro da classe sem afetar quem a usa.
    
    # Resumo:
    Abstração = Mostrar apenas o que importa e esconder a complexidade. Isso torna o uso de objetos mais fácil e seguro!







*/


// sabías que utilizar el underscore (_) antes del nombre de un método 
// es una aplicación que permite identificar aquellos métodos que son privados en una clase.