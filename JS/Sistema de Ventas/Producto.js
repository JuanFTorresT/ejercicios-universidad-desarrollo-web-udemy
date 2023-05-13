// class Producto{
//     static contadorProductos = 0;
//     constructor (nombre, precio){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.idProducto = ++Producto.contadorProductos;
//     }

//     get getIdProducto(){
//         return this.idProducto;
//     }

//     get getNombre(){
//         return this.nombre;
//     }

//     set setNombre(nombre){
//         this.nombre = nombre;
//     }

//     get getPrecio(){
//         return this.precio;
//     }

//     set setPrecio(precio){
//         this.precio = precio;
//     }

//     toString(){
//         return `idProducto: ${this.idProducto}, nombre: ${this.getNombre}, precio: $${this.getPrecio}`;
//     }
// }



// class Orden{
//     static contadorOrdenes = 0;

//     static get MAX_PRODUCTOS(){
//         return 5
//     }

//     constructor(){
//         this.idOrden = ++Orden.contadorOrdenes;
//         this.productos = [];
//     }

//     agregarProducto(producto){
//         if (this.productos.length < Orden.MAX_PRODUCTOS) {
//             this.productos.push(producto);
//         }else{
//             console.log("No se pueden agregar más productos");
//         }
//     }

//     calcularTotal(){
//         let totalVenta = 0;
//         for (let producto of this.productos){
//             totalVenta += producto.precio
//         }
//         return totalVenta;
//     }

//     mostrarOrden(){
//         let productosOrden = "";
//         for (let producto of this.productos){
//             productosOrden += "\n" + producto.toString() + " ";
//         }
//         console.log(`Orden: ${this.idOrden} | \nTOTAL: $${this.calcularTotal()} \nProductos: ${productosOrden}`);
//     }
// }

// let papa = new Producto("yuca", 200);
// let yuca = new Producto("papa", 200);
// let arrachaca = new Producto("Arrachacha", 5000)

// let orden1 = new Orden();
// orden1.agregarProducto(papa);
// orden1.agregarProducto(yuca);
// orden1.agregarProducto(arrachaca);

// orden1.mostrarOrden()

class Producto {
    static contadorProductos = 0;
    constructor(nombre, precio){
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
    }
    get getIdProducto(){
        return this.idProducto;
    }
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }
    
    get getPrecio(){
        return this.precio;
    }

    set setPrecio(precio){
        this.precio = precio;
    }

    toString(){
        return `ID: ${this.idProducto}, NOMBRE: ${this.nombre}, PRECIO: $${this.precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
    }

    agregarProducto(producto){
        if (this.productos.length < Orden.MAX_PRODUCTOS) {
            this.productos.push(producto);
        }else{
            console.log("Se ha alcanzado el maximo de productos en la orden");
        }
    }

    calcularTotal(){
        let total = 0;

        for (let producto of this.productos){
            total += producto.precio;
        }

        return total;
    }

    mostrarOrden(){
        let productosOrden = "";
        for (let producto of this.productos){
            productosOrden += (`${producto.toString()}\n`); 
        }
        return console.log(`ORDEN #${this.idOrden}\nTOTAL:${this.calcularTotal()}\nPRODUCTOS \n${productosOrden}`)
    }
}

let perro = new Producto("perro caliente", 5000);
let hamburguesa = new Producto("hamburguesa", 5000);

let orden1 = new Orden();

orden1.agregarProducto(perro);
orden1.agregarProducto(hamburguesa);
console.log(orden1.calcularTotal());
orden1.mostrarOrden()