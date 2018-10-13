/**
 * Importar funciones y usarlas para creacion de archivos
 */

const BASE = 2;

//const MULTIPLIC = require('./multiplicar/multiplicar');
//Se cambia por destructuracion de objeto o arreglo y se llama a la funcion
//en lugar de crear un metodo
const { crearTabla } = require('./multiplicar/multiplicar');


//MODULE es un objeto global disponible en toda la app
//console.log(module);

//MULTIPLIC ahora tiene un acceso global
//console.log(MULTIPLIC);

//Llamado a la funcion
/*
crearTabla(BASE).then(respuesta => {
    console.log(`Archivo creado: ${ respuesta }`);
}).catch(err => {
    console.log(err);
})
*/