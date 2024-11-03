const Repository = require('./models/Repo')

const repository = new Repository();

repository.createActivity("Salir a pasear", "bom pra saude!")
repository.createActivity("Jogar futebol", 'BBMP')
repository.createActivity("Ir a praça", 'Passear com cachorro')

console.log(repository.getAllActivities());

// fazer para as clases ir para outro modulo (outro arquivo nodejs)
// # TEMOS QUE TENER EN CUENTA QUE LOS MODULOS TENGAN UNA RESPONSABILIDAD BIEN DELIMITADA Y DEFINIDA (nao fique muito codigo em um modulo só)

/* 
    index: crear instancia e trabajar
*/