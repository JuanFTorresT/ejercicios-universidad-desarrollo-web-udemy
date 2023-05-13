//manera clasica de trabajar con funciones
function miFuncion() {
    console.log("saludos desde mi funcion");
}

miFuncion();

//-------------------------------------------------------------
//console.log(flecha()); no aplica el concepto de hoisting porque se utiliza una variable

// const flecha = () =>  {
//     console.log("Saludos desde la funcion flecha");
// }
// flecha();


// const flecha = () => console.log("saludos desde la funcion flecha");
// flecha();

// const saludar = () => {
//     return "Saludar desde funcion flecha";
// }
// console.log(saludar());

const saludar =  () => "saludos desde funcion flecha";

console.log(saludar());


//al regresar objetos se debe usar entre parentesis
const regresaObjeto = () => ({nombre: "juan", apellido: "Torres"});
console.log(regresaObjeto());


//recibir parametros

//const funcionConParametros = (mensaje) => console.log(mensaje);

//recicbi parametros simplificada

//const funcionConParametros = mensaje => console.log(mensaje);

//funcion con varios parametros, deben ir entre parentesis los parametros

const funcionConParametros = (op1, op2) => {
   let resultado = op1 + op2;
   console.log(`Resultado = ${resultado}`);
}

funcionConParametros(2,5);



