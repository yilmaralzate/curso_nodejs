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
let getEmpleado = async (id) => {

    let empleadoDB = empleados.find(empleado_iter => empleado_iter.id === id)

    if(!empleadoDB){
        //Async usa throw new Error('') en lugar de reject
        throw new Error(`No existe el empleado con ID ${ id }`); //Controlar el error en async
    }
    else{
        //Async usa return en lugar de resolve
        return empleadoDB;
    }
    
}

let getSalario = async (empleado) => {
    
    let result = salarios.find(salario_iter => salario_iter.id === empleado.id)

    if(!result){
        //throw new Error en lugar de reject
        throw new Error(`No se encuentra salario para el empleado con ID >> ${ empleado.id }`);
    }
    else{
        //Si hay result
        let resp = {
            nombre: empleado.nombre,
            salario: result.salario,
            id: empleado.id
        }
        //return en lugar de resolve
        return resp;
    }
}

let getInfo = async (id) => {

    let empl = await getEmpleado(id);
    let salar = await getSalario(empl);

    return salar;
}

getInfo(2)
    .then(resultado => {
    console.log(`El empleado ${ resultado.nombre } con id ${ resultado.id } tiene un salario de ${ resultado.salario }`);
    })
    .catch(err => {
        console.log(err);
    });
