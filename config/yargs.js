const datos = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs').command('listar','Mostrar por pantalla la tabla de multiplicar a partir de la base y un limite', datos)
.command('crear','Crear la tabla de multiplicar a partir de la base y un limite', datos)
.help()
.argv;

module.exports = {
    argv
}