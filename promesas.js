let empleados = [{
    id: 1,
    nombre: "Yilmar"
},{
    id: 2,
    nombre: "Yosef"
}
];

let salarios = [{
    id: 1,
    salario: 1000
}];

//Funcion getEmpleado --> Otra forma de declararla
let getEmpleado = (id) => {

    //Uso de promesas en las funciones
    //resolve --> se llama si es correcto
    //reject --> se llama si hubo errores
    return new Promise( (resolve, reject) => {
        
        let empleadoDB = empleados.find(empleado_iter => empleado_iter.id === id)
    
        if(!empleadoDB){
            reject(`No existe el empleado con ID ${ id }`) //Controlar el callback cuando err
        }
        else{
            resolve(empleadoDB) //Controlar el callback cuando no hay error
        }

    })
    
}

let getSalario = (empleado) => {

    return new Promise((resolve,reject) => {
        
        let result = salarios.find(salario_iter => salario_iter.id === empleado.id)
    
        if(!result){
            reject(`No se encuentra salario para el empleado con ID >> ${ empleado.id }`)
            //console.log(`No se encuentra salario para el empleado >> ${ empleado.nombre }`);
        }
        else{
            //Si hay result
            let resp = {
                nombre: empleado.nombre,
                salario: result.salario,
                id: empleado.id
            }
            resolve(resp) //Aqui termina el callback
            //return { id: empleado.nombre, salario: salario_iter.salario};
        }

    })

}

/*
getEmpleado(1).then(empleado => {
    console.log('Empleado de BD',empleado);
}, (err) => {
    console.log(err);
});
*/

//Otra forma usando el then..catch

getEmpleado(1).then((empleado) => {
    console.log('Empleado obtenido',empleado);

    getSalario(empleado).then((resultado) => {
    console.log('Encontrado',resultado);

    },(err) => {
        console.log(err);
    });
}).catch((err) => {
    console.log(err);
});



