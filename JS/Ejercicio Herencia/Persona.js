class Persona{
    
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this.idPersona = ++Persona.contadorPersonas;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    get getIdPersona(){
        return this.idPersona;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getApellido(){
        return this.apellido;
    }

    set setApellido(apellido){
        this.apellido = apellido;
    }

    get getEdad(){
        return this.edad;
    }

    set setEdad(edad){
        this.edad = edad;
    }

    toString(){
        return "ID Persona: " + this.idPersona + " | Nombre: " + this.nombre + " | Apellido: " + this.apellido + " | Edad: " + this.edad;
    }
}

let camila = new Persona("camila", "Jimenez", 24);

console.log(camila.toString());

//----------------------------------------
//-------------CLASE EMPLEADO-------------

class Empleado extends Persona{

    static idEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
        this.idEmpleado = ++Empleado.idEmpleado
    }

    get getSueldo(){
        return this.sueldo;
    }

    set setSueldo(sueldo){
        this.sueldo = sueldo;
    }

    toString(){
        return  "ID Empleado: " + this.idEmpleado + " | " +  super.toString() + " | Sueldo: " + this.sueldo;
    }
}

let felipe = new Empleado("felipe", "Torres",23, 1200000);

console.log(felipe.toString());

//----------------------------------------
//-------------CLASE CLIENTE--------------

class Cliente extends Persona{

    static fecha = Date.now();
    static idCliente = 0;

    constructor (nombre, apellido, edad){
        super(nombre, apellido, edad);
        this.fechaRegistro = Cliente.fecha;
        this.idCliente = ++Cliente.idCliente;
    }

    get getFechaRegistro(){
        const fecha  = new Date(this.fechaRegistro);
        const opciones = { year: 'numeric', month: 'long', day: 'numeric'};
        return " | Fecha de registro: " + fecha.toLocaleDateString('es-ES', opciones);
    }

    toString(){
        return  "ID Cliente: " + this.idCliente + " | " +  super.toString() + this.getFechaRegistro;
    }
}

let clientenuevo = new Cliente("Santiago", "Escobar",22);

console.log(clientenuevo.toString());


