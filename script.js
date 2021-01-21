

//ECMA6

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
                    `;}}
                        
                }

 let productoUno = new Producto ("BurguerCompleta", 600, 70);
 let productoDos = new Producto ("bebida", 150, 60);
 let productoTres = new Producto ("postre", 200, 50);
 //const baseDeDatos = [productoUno, productoDos, productoTres];
 

document.getElementById('primerProducto').innerHTML = `
<div class="card" style="width: 18rem;">
  <img src="https://sifu.unileversolutions.com/image/es-MX/recipe-topvisual/2/1260-709/hamburguesa-clasica-50425188.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${productoUno.nombre}</h5>
    <p class="card-text">${productoUno.precio}</p>
    <button onclick="productoUno.mostrarProducto()" href="#" class="btn btn-primary">cargar al carrito</button>
  </div>
</div>

`; 



document.getElementById('segundoProducto').innerHTML = `
<div class="card" style="width: 18rem;">
  <img src="https://www.prensalibre.com/wp-content/uploads/2018/12/7e81ce29-02ce-4dc7-b646-8c59fd5a291f.jpg?quality=82&w=760&h=430&crop=1" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${productoDos.nombre}</h5>
    <p class="card-text">${productoDos.precio}</p>
    <button onclick="productoDos.mostrarProducto()" href="#" class="btn btn-primary">cargar al carrito</button>
  </div>
</div>
`; 
document.getElementById('tercerProducto').innerHTML = `
<div class="card" style="width: 18rem;">
  <img src="https://gastronomiaycia.republica.com/wp-content/photos/postre_turron_chischoco1.jpg
 " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${productoTres.nombre}</h5>
    <p class="card-text">${productoTres.precio}</p>
    <button onclick="productoTres.mostrarProducto()" href="#" class="btn btn-primary">cargar al carrito</button>
  </div>
</div>
`; 



