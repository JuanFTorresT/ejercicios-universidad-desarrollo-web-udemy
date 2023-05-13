class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, Sueldo: ${this.sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} Dpto: ${this.departamento}`
    }
}
function determinarTipo(tipo) {
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente) {
        console.log("es un objeto de tipo Gerente");
    }else if(tipo instanceof Empleado){
        console.log("Es un objeto de timpo Empleado");
    }else if (tipo instanceof Object){
        console.log("es un objeto");
    }
}



let gerente1 = new Gerente("Felipe", 5000000, "Front-End");
let empleado1 = new Empleado("Diego", 1000000);
console.log(empleado1.obtenerDetalles());
console.log(gerente1.obtenerDetalles());

determinarTipo(gerente1);
determinarTipo(empleado1)