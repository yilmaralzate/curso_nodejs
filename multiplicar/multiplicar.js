const fs = require('fs');
const colors = require('colors');

//module.exports.multiplicar = (base) => { //Otra forma de exportar la funcion
let crearTabla = (base,limite = 10) => {
    
    return new Promise((resolve,reject) => {
        
        if(!Number(base) || !Number(limite)){
            reject(`La base y el limite ingresados { ${ base },${ limite } } deben ser un numero`);
            return;
        }
        
        let data = '';
        for(let i=1; i<=limite ; i++)
        {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }
        
        fs.writeFile(`tablas/Tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err)
            else
            resolve(`Tabla-${ base }.txt`);
            //console.log(`El archivo Tabla-${ base }.txt se ha creado`);
        });
        
    }) //Promesa se debe cerrar
}

let listarTabla = (base, limite = 10) => { //Aqui se usa un valor por defecto para el parametro

    return new Promise((resolve, reject) => {
        if(Number(base) && Number(limite))
        {
            let data = '';
            for(let i=1; i<=limite; i++)
            {
                data += `${ base } * ${ i } = ${ base * i } \n`;
            }
            
            console.log('*******************************'.red);
            console.log(`La tabla del ${ base }`.red);
            console.log('*******************************'.red);
            resolve(`${ data }`);
        }
        else
        {
            reject(`La base o el limite deben ser numeros`);
        }
    })

}

module.exports = {
    crearTabla,
    listarTabla
}
