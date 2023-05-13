class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    get getTipoEntrada (){
        return this.tipoEntrada;
    }

    set setTipoEntrada(tipoEntrada){
        this.tipoEntrada = tipoEntrada;
    }

    get getMarca(){
        return this.marca;
    }

    set setMarca(marca){
        this.marca = marca;
    }
}

//--------------------------------------------------------------------------------------------------------------------

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return `RATÓN:[ID RATON: ${this.idRaton}, TIPO ENTRADA: ${this.tipoEntrada}, MARCA: ${this.marca}]\n`;
    }
}

//PUREBA CLASE

//console.log(gamer.toString());

//--------------------------------------------------------------------------------------------------------------------

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados;
    }

    toString(){
        return `TECLADO:[ID TECLADO: ${this.idTeclado}, TIPO ENTRADA: ${this.tipoEntrada}, MARCA: ${this.marca}]\n`;
    }
}

//PUREBA CLASE

//console.log(gamerTeclado.toString());

//--------------------------------------------------------------------------------------------------------------------

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this.idMonitor = ++Monitor.contadorMonitores;
        this.marca = marca;
        this.tamaño = tamaño;
    }

    get getIdMonitor(){
        return this.idMonitor;
    }
    
    get getMarca(){
        return this.marca;
    }

    set setMarca(marca){
        this.marca = marca;
    }

    get getTamaño(){
        return this.tamaño;
    }

    set setTamaño(tamaño){
        this.tamaño = tamaño;
    }

    toString(){
        return `MONITOR:[ID MONITOR: ${this.idMonitor}, MARCA: ${this.marca}, TAMAÑO: ${this.tamaño}]\n`
    }
}

//PUREBA CLASE

//console.log(monitorgamer.toString());

//--------------------------------------------------------------------------------------------------------------------

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this.idComputadora = ++Computadora.contadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }

    get getIdComputadora(){
        return this.idComputadora;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getMonitor(){
        return this.monitor;
    }

    set setMonitor(monitor){
        this.monitor = monitor;
    }

    get getTeclado(){
        return this.teclado;
    }

    set setTeclado(teclado){
        this.teclado = teclado;
    }

    get getRaton(){
        return this.raton;
    }

    set setRaton(raton){
        this.raton = raton;
    }

    toString(){
        return `COMPUTADORA: ${this.idComputadora} - ${this.nombre}\n${this.monitor}${this.teclado}${this.raton} `
    }

}



//console.log(nuevopc.toString());

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadoras = [];
    }

    agregarComputadora(computadora){
        this.computadoras.push(computadora);
    }

    mostrarOrden(){
        let OrdenComputadora = "";
        for (let computadora of this.computadoras){
            OrdenComputadora += computadora.toString() + "\n";
        }
        console.log(OrdenComputadora);
    }
}

let gamer = new Raton("USB", "Genius");
let gamerTeclado = new Teclado("USB", "Genius");
let monitorgamer = new Monitor("Samsung",15);

let nuevopc = new Computadora("Genius gamer", monitorgamer, gamerTeclado, gamer);

let ratonRazer = new Raton("Bluetooth", "Razer");
let tecladoRazer = new Teclado("Bluetooth", "Razer");
let monitorSamsung = new Monitor("Samsung", 20);

let pcRazer = new Computadora("Razer Gamer", monitorSamsung, tecladoRazer, ratonRazer);

let ordenNueva = new Orden();
ordenNueva.agregarComputadora(nuevopc);
ordenNueva.agregarComputadora(pcRazer);
ordenNueva.mostrarOrden();