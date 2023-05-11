//let autos = new Array("BMW","Volvo";"Mecedes Benz");

const AUTOS = ["BMW","Volvo","Mecedes Benz"];
console.log(AUTOS);

console.log(AUTOS[0]);
console.log(AUTOS[1]);
console.log(AUTOS[2]);


//recorrec un arreglo con foreach
AUTOS.forEach(element => {
    console.log(element);
});

//recorrer un arreglo con un for
for (let index = 0; index < AUTOS.length; index++) {
    console.log(AUTOS[index] + index); 
    
}

AUTOS[0] = "Acura";
console.log(AUTOS[0]);

//preguntar si es un arreglo

console.log(Array.isArray(AUTOS));

console.log(AUTOS instanceof Array);