const fs = require('fs');


//module.exports.multiplicar = (base) => { //Otra forma de exportar la funcion
let crearTabla = (base) => {
    
    return new Promise((resolve,reject) => {
        
        if(!Number(base)){
            reject(`La base ingresada ${ base } no es un numero`);
            return;
        }

        let data = '';
        for(let i=1; i<11 ; i++)
        {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }
        
        fs.writeFile(`tablas/Tabla-${ base }.txt`, data, (err) => {
        if (err) reject(err)
        else
            resolve(`Tabla-${ base }.txt`);
        //console.log(`El archivo Tabla-${ base }.txt se ha creado`);
        });

    }); //Promesa se debe cerrar
}

module.exports = {
    crearTabla
}
