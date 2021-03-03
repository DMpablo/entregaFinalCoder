$(async function () {
  
let carrito = []; 
let nombres = [];
$('.productos-menu').hide();
$('.productos-titulo').hide();
//$('.continnuarCompra').hide();
$('.continuar-compra').click(formCompra);
$(".descripcion-productos").click(menuNav); 
$('.limpiar-carrito').click(vaciarCarrito);
//if (localStorage.getItem('carrito') != null) {}




class Producto {
  constructor(nombreCombo, precioCombo, imagenProducto, cantidadSeleccionada) {
    this.nombre = nombreCombo;
    this.precio = precioCombo;
    this.imagen = imagenProducto;
    this.cantidad = cantidadSeleccionada;
  }
}


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
         <h3 class="item-title card-title">${baseDeDatos[i].title}</h3>
         <img src="${baseDeDatos[i].imagen}" class="item-imagen card-img-top">
         <div class="card-body row">
         <h4 class="card-text">${baseDeDatos[i].description}</h4>
         <h3 class="item-price text-danger">${baseDeDatos[i].unit_price}</h3>
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
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-imagen').src;
  let producto = new Producto(
    itemTitle,
    Number(itemPrice),
    itemImage,
    1
    )  
    carrito.push(producto)
    posicionProducto = carrito.indexOf(producto);
    alertaAgregado()
    actualizarCarrito()
    crearProductosEnNavLS(posicionProducto, producto)
                
}   
/* if(localStorage.getItem('carrito') != null){    
  carrito = JSON.parse( localStorage.getItem('carrito') );
  for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].nombre == producto.nombre){
        console.log(true);
        actualizarCarrito()
        carrito[i].cantidad = carrito[i].cantidad+1
      }else if(carrito[i].nombre != producto.nombre ){
        console.log(false);
        carrito.push(producto)
        alertaAgregado()
        actualizarCarrito()
      }
    }
  }else{
    carrito.push(producto)
    alertaAgregado()
    actualizarCarrito()
  }   */
  //carrito[posicionProducto].nombre
  //actualizarCarrito();
  // suma2()
  //crearProductosEnNav(producto,posicionProducto);
  
  
  function crearProductosEnNavLS(posicionProducto, producto){
    carrito = JSON.parse ( localStorage.getItem( "carrito" ) );
    let productosNav
    //let counter = 0;
    for (let i = 0; i < carrito.length; i++) {
      //counter += carrito[i].precio
      productosNav +=  `
      <div class="shoppingCartItem shopping-cart-quantity">
      <img src="${carrito[i].imagen}" class="shopping-cart-img m-2" alt="">
      <p class="shopping-cart-item-title shoppingCartItemTitle m-2">${carrito[i].nombre}</p>
      <p class="item-price mb-0 shoppingCartItemPrice m-2">${carrito[i].precio}</p>  
      
      <button class="btn btn-danger button-suma m-2">+</button>
      <p class="cantidad-producto m-2 text-center" type="number" value="1" min="0">1</p>
      <button class="btn btn-danger button-resta m-2">-</button>

      <button class="btn btn-danger buttonDelete m-2">X</button>
      </div>
      `
    }    
    $('.localStorage-nav').html(productosNav)
    let cantidadProducto = Number($('.cantidad-producto').text());
    
    $('.button-suma').click(()=> { 
        cantidadProducto += 1;
        $('.cantidad-producto').html(cantidadProducto); 
        carrito[posicionProducto].cantidad += 1;
        suma2()
      })
    $('.button-resta').click(()=> { 
        cantidadProducto -= 1;
        $('.cantidad-producto').html(cantidadProducto); 
        carrito[posicionProducto].cantidad -= 1;
        suma2()
      })
      
      $('.buttonDelete').click( (e) => removeItemShoppingCart(e, posicionProducto));

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

function alertaAgregado() {
  $('.alertas').html('Producto agregado')
  $('.alertas').fadeIn(function () {
    $('.alertas').fadeOut(2000)
  })
}

function actualizarCarrito(resultado){
  localStorage.setItem("carrito", JSON.stringify(carrito));
  $('#contador-carrito').html(carrito.length);
  $('.total-carrito').html(resultado);
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
//console.log(resultado);
actualizarCarrito(resultado)

}
function vaciarCarrito(){
 
  nombres.length = 0;
  suma = 0;
  carrito.length = 0;
  localStorage.clear()
  
  $('.shoppingCartItem').remove();
  //$('.continnuarCompra').hide(500);
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
      acumulado += ns[i];
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




// Implementar mercadopago para generar un link de pago
$('.finalizar-compra').click(() => {
  console.log('algo intenta, pero no anda');
$.ajax({
  url: 'https://api.mercadopago.com/checkout/preferences',
  type: 'POST',
  data: {
    "items": [
      {
      "title": "Combo WHOPPER",
      "description": "Carne a la parrilla, pan, mayonesa, ketchup, cebolla, tomate, pepinos y lechuga, papas regulares y gaseosa 500ml.",
      "quantity": 1,
      "currency_id": "$ARS",
      "unit_price": 550
      }
  ]
  },
  headers: {
    'content-type':'application/json',   
    'Authorization': 'Bearer APP_USR-5900238552408376-022601-c1d39df394012a8a75043de92a56ec45-27112546' 
  },
  success: function (data, status) {
      console.info(data);
      console.log(status);
  }
});
})










})
 