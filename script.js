//ECMA6
let totalCarrito = []; 

class Producto {
    constructor(nombreProdcto, precioProducto, condimentosProducto, imagenProducto, stockProductos ){ 
            this.nombre = nombreProdcto;
            this.precio = precioProducto;
            this.condimentos = condimentosProducto;
            this.imagen = imagenProducto;
            this.stock = stockProductos;
            }
}

let baseDeDatos = [];   

let productoUno = new Producto ("Combo WHOPPER", 550, "Carne a la parrilla, pan, mayonesa, ketchup, cebolla, tomate, pepinos y lechuga, papas regulares y gaseosa 500ml.", "https://images.deliveryhero.io/image/pedidosya/products/471535-7676e83e-b3d3-486e-b454-20b819a210e3.jpg?quality=80&width=200&height=150", 20);
let productoDos = new Producto ("Combo BK Stacker", 650, "Tres carnes a la parrilla, queso cheddar, panceta y salsa especial. Acompañado con una bebida y una papas fritas regulares.", "https://images.deliveryhero.io/image/pedidosya/products/471535-7676e83e-b3d3-486e-b454-20b819a210e3.jpg?quality=80&width=200&height=150", 13);
let productoTres = new Producto ("Combo Doble Stacker Crispy", 560, "Doble carne a la parrilla, pan, doble cheddar, panceta, cebolla crispy, salsa stacker, gaseosa 500 ml y papas regulares.","https://images.deliveryhero.io/image/pedidosya/products/471535-bfa46f92-8844-4c0b-bc9c-df76e2dc2dc4.jpg?quality=80&width=200&height=150", 10);
                       
baseDeDatos.push(productoUno);
baseDeDatos.push(productoDos);
baseDeDatos.push(productoTres);

let aux = ``;
for(let i = 0; i<baseDeDatos.length; i++){
  if (baseDeDatos[i].stock > 0){
  aux += `
    <div class="card" style="width: 18rem;">
    <img src="${baseDeDatos[i].imagen}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${baseDeDatos[i].nombre}</h5>
    <p class="card-text">${baseDeDatos[i].condimentos}</p>
    <h3 class="card-text">$${baseDeDatos[i].precio}</h3>
    <button onclick="totalCarrito()" href="#" class="btn btn-primary">cargar al carrito</button>
    </div>
    </div>
  `;}else{
      aux += '<h2>No tenemos stock</h2>'
  }}

  document.getElementById("galeria").innerHTML = aux;

  console.log(aux);