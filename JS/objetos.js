let x = 10;
console.log(x.length);


//FORMA #1 DE DEFINIR UN OBJETO
let persona = {
    nombre: "juan",
    apellido: "Torres",
    email: "jtorres@email.com",
    edad: 23,
    presentarse: function () {
        return "mi nombre es: " + this.nombre + " " + this.apellido + " Y tengo " + this.edad + " años"      
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona.presentarse());

//FORMA #2 DE DEFINIR UN OBJETO
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "carrera 22";
persona2.telefono = "1234567891";

console.log(persona2.telefono);

//-----------------------------------------------------------------------
//ACCEDER A LAS PORPIEDADES DE UN OBJETO
console.log(persona.nombre);
console.log(persona["nombre"]);


//For in

for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}
//---------------------------------------------------------------
//AGREGAR Y ELIMINAR PROPIEDADES A LOS OBJETOS

//agregar una propiedad
persona.telefono = "123456789";

console.log(persona);

//eliminar una propiedad
delete persona.telefono;

console.log(persona);
//--------------------------------------------------------------
//FORMAS DE IMPRIMIR UN OBJETO

//concatenar cada valor de cada propiedad
console.log(persona.nombre, persona.apellido, persona.edad, persona.email);

//con un for in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//sintaxis de object.values
let personaArray = Object.values(persona);
console.log(personaArray);

//usar una cadena con el metodo json stringify
let personaString = JSON.stringify(persona);
console.log(personaString);
//-------------------------------------------------------------------------------------------------------------S
//METODO GET Y SET EN OBJETOS, MEJORES PRACTICAS PARA ACCEDER Y MODIFICAR LAS PROPIEDADES DE LOS OBJETOS.

let persona3 = {
    nombre: "camila",
    apellido: "jimenez",
    edad: 24,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    //metodo GET
    get presentarse() {
        return "hola soy " + this.nombre;
    }
}


console.log(persona3.presentarse);
console.log(persona3.lang);
persona3.lang = "us";
console.log(persona3.lang);
console.log(persona3.idioma);
//------------------------------------------------------------------
//METODO CONSTRUCTOR.
function Persona4(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    //Metodo en el constructor
    this.presentarse = function () {
        return "mi nombre es: " + this.nombre
    }

}

padre = new Persona4("Jorge", "torres", 50);
console.log(padre);

madre = new Persona4("Natasha", "Trujillo", 43)
console.log(madre);
console.log(padre.presentarse());
//-------------------------------------------------
//MÁS FORMAS DE CREAR UN OBJETO

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String("hola");
let miCadena2 = "hola"

let number = new Number(2);
let number2 = 2;

let miboolean = new Boolean(true);
let miboolean2 = true;


let miArreglo = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function () {};
//--------------------------------------------------
//USO DE PROTOTYPE
//propiedad que permite agregar atributos o metodos al constructor sin hacerlo directamente en el
Persona4.prototype.telefono = "315014741";

console.log(padre.telefono);
console.log(madre.telefono);

//para cambiar el valor se utiliza la referencia del objeto al que se quiere modificar el valor, ejemplo para padre:

padre.telefono = "123456789";
console.log(padre.telefono);
//------------------------------------------------
//USO DEL METODO CALL
//PERMITE LLAMAR UN METODO QUE ESTÁ DEFINIDO EN UN OBJETO DESDE OTRO OBJETO
let persona5 = {
    nombre: "juan",
    apellido: "perez",
    presentarse: function (){
        return "Hola mi nombre es " + this.nombre  + " " + this.apellido;
    }
}

let persona6 = {
    nombre: "clara",
    apellido: "chia"
}

//uso de call para usar el metodo presentarse que pertenece al objeto persona 5 con los datos del objeto persona6
console.log(persona5.presentarse());

console.log(persona5.presentarse.call(persona6));

//----------------------------------------------
//PASO DE ARGUMENTOS A CALL
let persona7 = {
    nombre: "juan",
    apellido: "perez",
    //titulo es el parametro que va a recibir el argumento que se enviará en el metodo call
    presentarse: function (titulo){
        return "Hola mi nombre es " + this.nombre  + " " + this.apellido + " y soy " + titulo;
    }
}

let persona8 = {
    nombre: "clara",
    apellido: "chia"
}
//despues de llamar a la persona8 se pasa el valor del titulo
console.log(persona7.presentarse("fisico"));
console.log(persona7.presentarse.call(persona8,"Ingeniera de Software"));

//------------------------------------
//METODO APPLY EN JAVASCRIPT
//funciona de manera similar al metodo con, con una pequeña diferencial momento de pasar los parametros
//permite mandar a llamar un metodoen un objeto que no tiene definico cierto metodo

let persona9 = {
    nombre: "juan",
    apellido: "perez",
    presentarse: function (titulo){
        return "Hola mi nombre es " + this.nombre  + " " + this.apellido + " y soy " + titulo;
    }
}

let persona10 = {
    nombre: "clara",
    apellido: "chia"
}

//uso de apply


console.log(persona9.presentarse("fisico"));
//los argumentos se pasan dentro de un arreglo
let arreglo = ["Ingeniera de software"]
console.log(persona9.presentarse.apply(persona10, arreglo));