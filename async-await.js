/**
 * Ejemplo Async - Await
 * un 'Await' siempre debe estar dentro de un 'Async'
 */

let getNombre = async(id) => { //Async vuelve a la funcion asincrona --> Promise

    if(!id)
    {
        throw new Error('Para que .catch atrape este error');
    }
    else{
        return 'El nombre solicitado';
    }

}

let getApellido = () => {
    return new Promise((resolve,reject) => {

        setTimeout(() => {
            resolve(`Alzate Rodriguez`);
        }, 3000);

    });
}

//El uso de async para ser asincrona en lugar de usar Promise
let obtenerData = async() => {

    //El uso del await para llamar a una funcion asincrona
    //Espera hasta que se ejecute para almacenar el dato que retorna
    let apellido = await getApellido();

    //await funciona con un return en lugar de resolve
    return `El apellido es ${ apellido }`;

}

obtenerData().then((data) => {
    console.log(data);
})

//Forma de llamar a una funcion async
/*
getNombre(1).then((resultado) => {
    console.log(resultado);
}).catch((err) => {
    console.log(err);
});
*/
