"use strict";

// try{
//     //x = 10;
//     //miFuncion();
//     //Enviar mis propios errores.
//     throw "miError"
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("Termina la revision de errores");
// }

// console.log("continuamos...");

//poner en practica throw

let resultado = -3;

try{
    //x=10;
    if(isNaN(resultado)) throw "no es un numero";
    else if (resultado === "") throw "Tenemos una cadena Vacia"
    else if (resultado >= 0 ) throw "Valor positivo"
    else if (resultado < 0 ) throw "Valor Negativo"
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log("terminamos revision de errores");
}