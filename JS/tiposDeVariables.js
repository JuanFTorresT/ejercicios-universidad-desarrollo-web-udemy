//Ya no se recomienda var se recomienda let y const

let nombre = "Juan";
console.log(nombre);


const APELLIDO = "Torres";
console.log(APELLIDO);
//si trato de cambiar el valor a una constante no es posible
//APELLIDO = "Trujillo";  ¡ERROR!

//para los nombres de variables se utiliza la notacion lower camel case donde la segunda palabra empieza con mayuscula y no se dejan guiones ni guiones bajos

let nombreCompleto = "Felipe Torres";
console.log(nombreCompleto);

//REGLAS PARA DEFINIR VARIABLES 
// javascript es case sensitive por lo que hay que prestar atencion a como se establecen las variables. Las variables no pueden empezar con numeros ni caracteres especiales ej: .,-´ excepto el signo pesos y el guin bajo $ o _, tampoco estan permitidas las palabras reservadas ej break .

let nombreNuevo;
let _nombreNuevo;
let $nombreNuevo

