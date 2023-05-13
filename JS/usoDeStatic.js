class Persona{
    //ATRIBUTO STATIC
    static contadorPersonas = 0;// atributo de la clase

    //CONSTANTES ESTATICAS
    static get GET_MAXIMO_OBJETOS(){
        return 2
    }

    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        if (Persona.contadorPersonas < Persona.GET_MAXIMO_OBJETOS) {
            
            this.idPersona = ++Persona.contadorPersonas;
        }else{
            console.log("Se han superado el maximo de objetos permitidos");
        }
    }

    get getnombre(){
        return this.nombre;
    }

    set setnombre(nombre){
        this.nombre = nombre;
    }

    get getApellido(){
        return this.apellido;
    }

    set setApellido(apellido){
        this.apellido = apellido;
    }
    //METODO A HEREDAR POR LA CLASE EMPLEADO
    presentarse(){
        return this.idPersona + " Hola mi nombre es: " + this.nombre + " " + this.apellido
    }

    //se aplica polimorfismo
    //el metodo que se ejectua depende de si es lamado desde una referencia de tipo padre o tipo hijo
    toString(){
        return this.presentarse();
    }

    //USO DE STATIC
    static saludar(){
        console.log("saludos desde el metodo static");
    }

    static saludar2(persona){
        console.log(persona.nombre);
    }
}

let persona1 = new Persona("Jorge", "Torres");
console.log(persona1.toString());

let persona2 = new Persona("Camila", "Jimenez");

console.log(persona2.toString());

let persona3 = new Persona("natasha", "Jimenez");
console.log(persona3.toString());

let persona4 = new Persona("nicolas", "arias");
console.log(persona4.toString());

console.log(Persona.GET_MAXIMO_OBJETOS);

Persona.GET_MAXIMO_OBJETOS = 10;

console.log(Persona.GET_MAXIMO_OBJETOS);


