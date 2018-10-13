/**
 * uso de yargs para recibir parametros por consola
 */

const { crearTabla, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');
//otra forma de importar el objeto
//const argv = require('./config/yargs').argv;

//este muestra el argv del sistema sin yargs
//let argv2 = process.argv;

//el argv de yargs se definio como argv
//console.log(argv.base);
//console.log('Limite:',argv.limite);

// console.log(argv2);
// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(respuesta => {
            console.log(respuesta);
        }).catch(err => {
            console.log(err);
        })
        break;

    case 'crear':
        crearTabla(argv.base, argv.limite).then(respuesta => {
            console.log(`Archivo creado:`, `${ respuesta }`.green);
        }).catch(err => {
            console.log(err);
        })
        break;

    default:
        console.log('Comando desconocido...');
        break;
}