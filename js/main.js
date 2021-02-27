$(async function () {
  
let carrito = []; 
let nombres = [];
//let suma = 0;

$('.productos-menu').hide();
$('.productos-titulo').hide();
$('.continnuarCompra').hide();
$('.continuar-compra').click(formCompra);
$(".descripcion-productos").click(menuNav); 
$('.limpiar-carrito').click(vaciarCarrito);


if(localStorage.getItem('carrito') != null){
  //console.log('entro en la validacion');
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
$('.agregado-carrito').hide()
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
  //carrito[posicionProducto].nombre

 /* if ( carrito.indexOf(producto) >= 0 ) {
  console.log(true);

}else if (carrito.indexOf(producto) == -1 ){
  carrito.push(producto);
  console.log(false);
} else{
  console.log('ninguna de las anteriores');
} */
  alertaAgregado()
  crearProductosEnNav(producto,posicionProducto);
  suma2()
  actualizarCarrito();
  //validacionFor(producto, posicionProducto);
  //validacionIndexOf(producto);

}   






function alertaAgregado() {
  $('.alertas').html('Producto agregado')
  $('.alertas').fadeIn(function () {
    $('.alertas').fadeOut(2000)
  })
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
$('.cantidad-input').on('keyup',function(){
  let cantidadInput = $(this).val();
  carrito[posicionProducto].cantidad = cantidadInput
  console.log(carrito[posicionProducto].cantidad );
 //console.log(carrito[posicionProducto].precio);
if(cantidadInput >= 1){
  //let nuevoPrecio = cantidadInput * carrito[posicionProducto].precio;
  

  suma2()
  actualizarCarrito()
  console.log('nuevo precui '+ nuevoPrecio); 
}else{
  console.log(false);

} 
})
}

function removeItemShoppingCart(event, posicionProducto){
  let botonClikeado = event.target
  botonClikeado.closest('.shoppingCartItem').remove();
  carrito.splice(posicionProducto,1);

  $('.alertas').html('Producto eliminado')
  $('.alertas').fadeIn(function () {
    $('.alertas').fadeOut(2000)
  })

  restarTotalCarrito()
  actualizarCarrito()
}

function menuNav(){
  $('.pedilo-aca').toggle();
  $('.productos-titulo').toggle();
  $(".productos-menu").slideToggle("fast");
}


function suma2(ns) {
  const suma = (ns) => {
  let acumulado = 0;
  for (let i = 0; i < ns.length; i++) {
    acumulado +=ns[i];
  }
  return acumulado
  }
const preciosCarrito = carrito.map(x => x.precio * x.cantidad)
const resultado = suma(preciosCarrito)
console.log(resultado);
actualizarCarrito(resultado)

}

function actualizarCarrito(resultado){
  localStorage.setItem("carrito", JSON.stringify(carrito));
  $('#contador-carrito').html(carrito.length);
  $('.total-carrito').html(resultado);
}

function vaciarCarrito(){
  carrito.length = 0;
  nombres.length = 0;
  suma = 0;
  $('.shoppingCartItem').remove();
  $('.continnuarCompra').hide(500);
  $('.alertas').html('Vaciado con exito')
  $('.alertas').fadeIn(function () {
    $('.alertas').fadeOut(2000)
  })
  actualizarCarrito()
}

function restarTotalCarrito(){
  const suma = (ns) => {
    let acumulado = 0;
    for (let i = 0; i < ns.length; i++) {
      acumulado +=ns[i];
    }
    return acumulado
    }
  const preciosCarrito = carrito.map(x => x.precio)
  const resultado = suma(preciosCarrito)
  console.log(resultado);
  actualizarCarrito(resultado)
}

function formCompra() {
 let precioTotal = Number($('#total-compra').text());
 if (precioTotal > 0) {
  $('.continnuarCompra').show()
 }else{
  $('.alertas').html('Carrito vacio')
  $('.alertas').fadeIn(function () {
    $('.alertas').fadeOut(2000)
  })
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


})
 