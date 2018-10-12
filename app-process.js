const { crearTabla } = require('./multiplicar/multiplicar');
/**
 * Objeto process para interactura con Node
 */

//Objeto 'process' es un objeto global de node
//console.log(process);

//process.argv obtiene informacion del archivo actual
//console.log(process.argv);

let argv = process.argv;
let param = argv[2];
//separar hasta que encuentre '=' y convertir a array
let base = param.split('=')[1]; //muestra el segundo elemento del array

//console.log(base);
//Recibe lo que le mandan desde consola
crearTabla(base).then(respuesta => {
    console.log(`Archivo creado: ${ respuesta }`);
}).catch(err => {
    console.log(err);
})