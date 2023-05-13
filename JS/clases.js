//EN LAS CLASES NO APLICA EL CONCEPTO DE HOISTING
class Persona{
    //ATRIBUTO STATIC
    static contadoDeObjetosPersona = 0;// atributo de la clase

    email = "valor default de email";//atributo de los objetos

    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        Persona.contadoDeObjetosPersona++;
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
        return "Hola mi nombre es: " + this.nombre + " " + this.apellido
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

persona1.setnombre = "alberto"//set nombre("Alberto")

console.log(persona1.getnombre);//get nombre()

let persona2 = new Persona("Carlos", "Lara");



Persona.saludar2(persona1)

class Empleado extends Persona{
    //se agregan los parametros de la clase padre
    constructor (nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this.departamento = departamento;
    }

    get getDepartamento(){
        return this.departamento;
    }

    set setDepartamento(departamento){
        this.departamento = departamento;
    }

    //se sobreescribe el metodo creado en la clase persona
    presentarse(){

        return super.presentarse() +//con super llamamos al metodo de la clase padre para no tener que volver a escribirlo.
        " y pertenezco al area de " + this.departamento;
    }

    
}

let empleado1 = new Empleado("Juan", "Torres", "ingeniería");
console.log(empleado1);
//USO DEL METODO HERDADO DE LA CLASE PADRE + RESULTADO DE LA SOBREESCRITURA DEL METODO PRESENTARSE
console.log(empleado1.presentarse());
//TODAS LAS CLASES HEREDAN DE LA CLASE PREDEFINIDA OBJECT
console.log(empleado1.toString());


//persona1.saludar(); no es posible usar un metodo static llamandolo desde un objeto, se llama desde la clase.
Persona.saludar();
Persona.saludar2(persona1)

Empleado.saludar2(empleado1)


console.log(persona1.contadoDeObjetosPersona);//no se puede acceder a atributos staticos utilizando la referencia de un objeto, se usa el nombre de la clase
console.log(Persona.contadoDeObjetosPersona);
console.log(Empleado.contadoDeObjetosPersona);

//uso de atributo de clase no estaticos, se llaman con la referencia de los objetos.
console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);


