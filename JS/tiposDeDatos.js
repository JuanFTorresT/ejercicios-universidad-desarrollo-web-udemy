// Ejemplos de tipos de datos en javascript

// Tipo de dato String

let nombre = "Carlos";
console.log("Hola ",typeof nombre)

// tipo de dato numerico
let numero = 500;
console.log(typeof numero)

//tipo de dato objeto

let objeto = {
    nombre : "Juan",
    apellido: "Torres",
    edad: 23
}

console.log(typeof objeto)

//tipo de dato boolean

let respuesta = false;
//respuesta = true;
console.log(typeof respuesta);

//tipo de dato funcion

function miFuncion(){

}

console.log(typeof miFuncion);

//tipo de dato symbol

let simbolo = Symbol("mi simbolo");

console.log(typeof simbolo)

//tipo clase es una funcion

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido=apellido;
    }
}

console.log(typeof Persona)

//tipo undefined
let x;

console.log(typeof x);

//tipo de dato null = ausencia de valor


var y = null;
console.log(typeof y);

//arreglos son de tipo object

let autos = ["audi", "bmw", "acura", "kia", "honda"]
console.log(typeof autos);

let z = "";
console.log(z);
console.log(typeof z);


