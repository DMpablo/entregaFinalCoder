
class Producto {
    constructor(nombreProdcto, precioProducto, stockProducto){ 
            this.nombre = nombreProdcto;
            this.precio = precioProducto;
            this.stock = stockProducto;
            this.mostrarProducto = function (){
            document.getElementById('carrito').innerHTML = `
                    <div>
                    <h2>${this.nombre}</h2>
                    <p>${this.precio}</p>
                    <p>${this.stock}</p>
                    </div>
                    `;
                
                }}

    get obtenerNombre(){
        return this.nombre;
    }            
    set cambiarNombre(){
        this.nombre = nuevoNombre;
    }   
    get obtienePreco (){
    return this.precio;
    }
    set cambiarTipo(){
        this.tipo = nuevoTipo;
    }
    get obtenerStock(){
        return this.stock;
    }
    set cambiarStock(){
        this.stock = cambiarStock;
    }

    sumarValores(){

    }
}
class claseHijo extends clasePadre(){

} 
    
        let productoUno = new Producto ("BurguerCompleta", 600, 70);
        let productoDos = new Producto ("bebida", 150, 60);
        let productoTres = new Producto ("postre", 200, 50);


