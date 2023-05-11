//una funcion es un codigo reutilizable

function miFuncion(a, b) {
    return a + b;
}

let suma3 = miFuncion(2,5)

console.log(suma3);

//funcion de tipo expresion
//se crea una variable a la que se le asigna una funcion

let suma = function (a, b) {
    console.log(arguments.length);
    return a+b;
};

let resultado = suma(2,3);
console.log(resultado);

//funciones de tipos self invoking, se mandan a llamar a si mismas, solo se puede utilizar una vez

(function (a,b) {
    console.log("Ejecutando la funcion: " + (a + b));
})(2,3);

//FUNCIONES COMO OBJETOS

console.log(typeof suma);

let miFuncionSuma = suma.toString();

console.log(miFuncionSuma);

//ARROW FUNCITONS, es como una funcion de tipo expresion pero simplificada, sin usar llaves ni la palablra functions, se debe usar normalmente con const en lugar de let

const sumarFuncionTipoFlecha = (a,b)=> a+b;

console.log(sumarFuncionTipoFlecha(2,3));

//PARAMETROS Y ARGUMENTOS - DIFERENCIAS

//parametros es la lista de valores que recibe una funcion

//argumentos son los valores  que se pasaron finalmente a la funcion, es decir los valores que se introducen al llamar a la funcion

//argumentos son los valores que pasamos a los parametros

let sumar2 = function (a = 3,b = 2) {
    //podemos observar que al no pasar valores al llamar a la funcion el valor de los argumentos es undefined aun así , la funcion toma los valores almacenados en los parametros  y lleva a cabo la operacion de a+b dando como resulado 5 al llamar a la funcion, los valores de los argumentos sobrescrimben los valores asignados por defalut en los parametros, por lo que si al llamar a la funcion ponemos a = 2 y b=2 el resultado será 4, sin tomar en cuenta los valores por deafult de los parametros.

    
    console.log(arguments[0]);
    console.log(arguments[1]);
    //ademas podemos acceder a mas argumentos aunque no lo hemos declarado en la funcion, pero como no hemos proporcionado ninguna informacion esta por default commo indefinido, al pasarle un valor en el llamado de la funcion, el valor del argumento cambia y poodemos operarlo dentro de la funcion.
    console.log(arguments[2]);
    return a + b + arguments[2];
}

let resultado2 = sumar2(2,2,2);
console.log(resultado2);

//----------------------------------------
//sumar los argumentos de una funcion
let resultado3 = sumarTodo(2, 5, 9, 13, 21);

function sumarTodo() {
    let total = 0;
    for (let index = 0; index < arguments.length; index++) {
        total += arguments[index];
    }
    return total
}

console.log(resultado3);

//-------------------------------------------
//PASO POR VALOR
let x = 10;

function cambiarValor(a) {
    a= 20;
}

cambiarValor(x);
console.log(x);
//-----------------------------
//PASO POR REFERENCIA
//objeto persona
const PERSONA = {
    nombre: "Felipe",
    apellido: "Torres"
}

function cambiarValorObjeto(p1) {
    p1.nombre = "Alberto";
    p1.apellido = "Trujillo"
}

//paso por referencia
cambiarValorObjeto(PERSONA);
console.log(PERSONA);






