


$('button').click( () => {
  if( $('.edad').val() >= 18 ){
    $('.validar').html('se aprobo')
  }else{
    $('.validar').html('No se aprobo')
  }
});

  
fetch("./baseDeDatos.json")
.then(response =>response.json())  
.then (baseDeDatos => {
  
 for(let i = 0; i<baseDeDatos.length; i++){
     if($(".galeria") != null){
 
         $(".galeria").innerHTML;        
         let element = document.getElementById('galeria')

         element.innerHTML += `
         <div class="col-lg-4 col-md-4 mb-4 p-3">
         <div class="item card-100">
         <h3 class="item-title card-title">${baseDeDatos[i].nombre}</h3>
         <img src="${baseDeDatos[i].imagen}" class="item-imagen card-img-top">
         <div class="card-body row">
         <h4 class="card-text">${baseDeDatos[i].condimentos}</h4>
         <h5 class="item-price">$${baseDeDatos[i].precio}</h5>
         <button class="btn btn-danger">Agregar al carrito</button>
         </div>
         </div>
         </div>`;
const addToShoppingCartBtn = document.querySelectorAll('.btn');
addToShoppingCartBtn.forEach((agregarConClick) => {
agregarConClick.addEventListener('click', agregarCartClicked);
})}
//console.log(baseDeDatos);  
}})  




class Producto {
  constructor(nombreCombo, precioCombo, condimentosCombo, imagenProducto, stockProducto, cantidadSeleccionada) {
    this.nombre = nombreCombo;
    this.precio = precioCombo;
    this.condimentos = condimentosCombo;
    this.imagen = imagenProducto;
    this.stock = stockProducto;
    this.cantidad = cantidadSeleccionada;
  }
}
let productoUno = new Producto(
   "Combo WHOPPER", 
   550,
   "Carne a la parrilla, pan, mayonesa, ketchup, cebolla, tomate, pepinos y lechuga, papas regulares y gaseosa 500ml.",
   "https://images.deliveryhero.io/image/pedidosya/products/471535-7676e83e-b3d3-486e-b454-20b819a210e3.jpg?quality=80&width=200&height=150" ,
    20,
    0
  )
let productoDos= new Producto(
  "Combo BK Stacker Triple",
  650,
  "Tres carnes a la parrilla, queso cheddar, panceta y salsa especial. Acompañado con una bebida y una papas fritas regulares.",
  "https://images.deliveryhero.io/image/pedidosya/products/471535-bfa46f92-8844-4c0b-bc9c-df76e2dc2dc4.jpg?quality=80&width=200&height=150",
  13,
  0
) 
let productoTres = new Producto (
  "Combo Doble Stacker Crispy",
  560,
  "Doble carne a la parrilla, pan, doble cheddar, panceta, cebolla crispy, salsa stacker, gaseosa 500 ml y papas regulares.",
  "https://images.deliveryhero.io/image/pedidosya/products/471535-7676e83e-b3d3-486e-b454-20b819a210e3.jpg?quality=80&width=200&height=150",
  10,
  0
)
let baseDeDatos = [productoUno,productoDos,productoTres];
let aux = ``; 
 for(let i = 0; i < baseDeDatos.length; i++){
     if($(".galeria") != null){
         $(".galeria").innerHTML;        
         aux += `
         <div class="col-lg-4 col-md-4 mb-4 p-3">
         <div class="item card-100">
         <h3 class="item-title card-title">${baseDeDatos[i].nombre}</h3>
         <img src="${baseDeDatos[i].imagen}" class="item-imagen card-img-top">
         <div class="card-body row">
         <h4 class="card-text">${baseDeDatos[i].condimentos}</h4>
         <h5 class="item-price">$${baseDeDatos[i].precio}</h5>
         <button class="btn btn-danger">Agregar al carrito</button>
         </div>
         </div>
         </div>`; 
         //ddEventListener('click', console.log('algo'));
         const addToShoppingCartBtn = document.querySelectorAll('.btn');
         addToShoppingCartBtn.forEach((agregarConClick) => {
           agregarConClick.addEventListener('click', agregarCartClicked); 
          })
          let botonClikeado = document.querySelector('.btn');
        } // document.addEventListener('.btn', console.log('btn'))
document.getElementById("galeria").innerHTML = aux
console.log(carrito);  
}