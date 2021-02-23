let carrito = []; 
$('.limpiar-carrito').click(vaciarCarrito);
$('.productos-menu').hide();
$('.productos-titulo').hide();
$(".descripcion-productos").click(menuNav); 
//$('body').scrollspy({ target: '#scroll' })
let suma = 0;
let nombres = [];

if(localStorage.getItem('carrito') != null){
  console.log('entro en la validacion');
  let carrito = localStorage.getItem('carrito');
  $('#contador-carrito').html(carrito.length);
}
class Producto {
  constructor(nombreCombo, precioCombo, imagenProducto, cantidadSeleccionada) {
    this.nombre = nombreCombo;
    this.precio = precioCombo;
    this.imagen = imagenProducto;
    this.cantidad = cantidadSeleccionada;
  }
}

const shoppingItemsContainer = document.querySelector('.shoppingCartItemsContainer');

fetch("./baseDeDatos.json")
.then(response => response.json())  
.then(baseDeDatos => {
 for(let i = 0; i<baseDeDatos.length; i++){
     if($(".galeria") != null){
         $(".galeria").innerHTML;        
         let element = document.getElementById('galeria')
         element.innerHTML += `
         <div class="col-lg-3 col-md-4 m-4 p-3">
          <div class="item card-100">
            <h3 class="item-title card-title">${baseDeDatos[i].nombre}</h3>
            <img src="${baseDeDatos[i].imagen}" class="item-imagen card-img-top">
            <div class="card-body row">
              <h4 class="card-text">${baseDeDatos[i].condimentos}</h4>
              <h3 class="item-price text-danger">${baseDeDatos[i].precio}</h3>
              <button class="btn btn-danger">Agregar al carrito
              <img class="img-carrito " src="./assets/carrito.svg" alt=""></button>
            </div>
          </div>
         </div>`;
const addToShoppingCartBtn = document.querySelectorAll('.btn');
addToShoppingCartBtn.forEach((agregarConClick) => {
agregarConClick.addEventListener('click', crearProducto);

})}}})  

function crearProducto(event){   
  const button = event.target;
  const item = button.closest('.item');
  const itemTitle = item.querySelector('.item-title').textContent;
  let itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-imagen').src;
  let producto = new Producto(
      itemTitle,
      Number(itemPrice),
      itemImage,
      1
  )  
  carrito.push(producto);

  posicionProducto = carrito.indexOf(producto);
  
  crearProductosEnNav(producto,posicionProducto);
  //sumarTotalCarrito();
  actualizarCarrito();
  //validacionFor(producto, posicionProducto);
  //validacionIndexOf(producto);
}   




function crearProductosEnNav(producto, posicionProducto ){
const shoppingCartRow = document.createElement('div');
const shoppingCartContent = `
<div class="shoppingCartItem shopping-cart-quantity">
    <img src="${producto.imagen}" class="shopping-cart-img m-2" alt="">
    <p class="shopping-cart-item-title shoppingCartItemTitle m-2">${producto.nombre}</p>
    <p class="item-price mb-0 shoppingCartItemPrice m-2">${producto.precio}</p>    
      <input class="cantidad-input m-2" type="number" value="1" min="0">
      <button class="btn btn-danger buttonDelete m-2">X</button>
</div>
`;
$(shoppingItemsContainer).append(shoppingCartRow);
$(shoppingCartRow).html(shoppingCartContent);
$('.buttonDelete').click( (e) => removeItemShoppingCart(e, posicionProducto, producto));
 //falta cambiar la cantidad del obbjeto
$('.cantidad-input').on('keyup',function(){
  let cantidadInput = $(this).val();
  carrito[posicionProducto].cantidad = cantidadInput

 console.log(carrito[posicionProducto].precio);

 let actualCantidad = cantidadInput * carrito[posicionProducto].precio;
 
 carrito[posicionProducto].precio = actualCantidad;
 
 console.log(carrito[posicionProducto].precio); 
 
  //sumarTotalCarrito(actualCantidad)
 actualizarCarrito()
})
}

function removeItemShoppingCart(event, posicionProducto){
  let botonClikeado = event.target
  botonClikeado.closest('.shoppingCartItem').remove();
  carrito.splice(posicionProducto,1);
  
  restarTotalCarrito()
  actualizarCarrito()
}


function menuNav(){
  $('.pedilo-aca').toggle();
  $('.productos-titulo').toggle();
  $(".productos-menu").slideToggle("fast");
}

function actualizarCarrito(){
  localStorage.setItem("carrito", JSON.stringify(carrito));
  $('#contador-carrito').html(carrito.length);
  $('.total-carrito').html(suma);
}

function vaciarCarrito(){
  carrito.length = 0;
  nombres.length = 0;
  suma = 0;
  $('.shoppingCartItem').remove();
  actualizarCarrito()
}

function restarTotalCarrito(){
  for (let i = 0; i < carrito.length; i++) {
   suma -= carrito[i].precio; 
   return
  }
}
function sumarTotalCarrito(actualCantidad){
  /* esta funcion solo suma,no actualiza el valor total */
     for (let i = 0; i < carrito.length; i++) {
      suma = actualCantidad  
      console.log ( 'total '+suma);
      actualizarCarrito();
      return
} 
}






function multiplicarIput(cantidad, precio){
    suma += cantidad * precio;
    console.log('total hasta ahora '+ suma);
    actualizarCarrito()
}
function validacionFor(producto, posicionProducto){
  console.log('validacion For');
  ;
 for (let i = 0; i < nombres.length; i++) {
  if (producto.nombre == nombres[i]){
     console.log('true');
 
   }else{
     console.log('false');
     //nombres.push(producto.nombre)
 
   }
   
 }
 
 }
 
 function validacionIndexOf(producto){
   
   if(carrito.indexOf(producto) == -1){
     console.log(' se agrego al carrito');
   }else if(carrito.indexOf(producto) >= 0) {
     console.log(' ya esta en carrito');
   }else{
     console.log('ni uno ni otro');
   }
   
   console.log(carrito.indexOf(producto))
 }
 