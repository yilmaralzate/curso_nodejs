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
let getEmpleado = (id, callback) => {

    /*
    let empleadoDB = empleados.find(empleado_iter => {
        //Preguntar si el encontrado en el find() es igual
        //al que recibimos por parametro retorna true o false
        empleado_iter.id === id;
    })
    */
    
    //Otra forma de hacer el proceso
    let empleadoDB = empleados.find(empleado_iter => empleado_iter.id === id)

    if(!empleadoDB){
        callback(`No existe el empleado con ID ${ id }`) //Controlar el callback cuando err
    }
    else{
        callback(null, empleadoDB) //Controlar el callback cuando no hay error
    }
}

let getSalario = (empleado, callback) => {

    let result = salarios.find(salario_iter => salario_iter.id === empleado.id)

    if(!result){
        callback(`No se encuentra salario para el empleado >> ${ empleado.nombre }`)
        //console.log(`No se encuentra salario para el empleado >> ${ empleado.nombre }`);
    }
    else{
        //Si hay result
        let resp = {
            nombre: empleado.nombre,
            salario: result.salario
        }
        callback(null, resp) //Aqui termina el callback
        //return { id: empleado.nombre, salario: salario_iter.salario};
    }
}

//forma de llamar a la funcion

/*
getEmpleado(1, (err, empleado) => {

    //Manejo del callback desde el llamado
    if( err ){
        console.log(`Error en el Callback >> ${ err }`);
    }
    else{
        console.log(empleado);
    }

});
*/

let empleado1 = {
    id: 1,
    nombre: "Yilmar"
};

//Lamado estandar de una funcion con callback
getSalario(empleado1, (err, success) => {
    if(err){
        console.log(`Error en Callback >> ${ err }`);
    }
    else {
        console.log(success);
    }
});