$(async function () {
  
let carrito = []; 

$('.productos-menu').hide();
$('.productos-titulo').hide();
$('.continnuarCompra').hide();
$('.continuar-compra').click(formCompra);
$(".descripcion-productos").click(menuNav); 
$('.limpiar-carrito').click(vaciarCarrito);

if (localStorage.getItem('carrito') != null) { 
  carrito = JSON.parse ( localStorage.getItem( "carrito" ) 
 
  );}

// constructor de productos
class Producto {
  constructor(id, nombreCombo, precioCombo, imagenProducto, cantidadSeleccionada) {
    this.id = id;
    this.nombre = nombreCombo;
    this.precio = precioCombo;
    this.imagen = imagenProducto;
    this.cantidad = cantidadSeleccionada;
  }
}


//Traigo JSON para hacer las cards 
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
         <p class="id-producto">${baseDeDatos[i].id}</p>
         <h3 class="item-title card-title">${baseDeDatos[i].title}</h3>
         <img src="${baseDeDatos[i].imagen}" class="item-imagen card-img-top">
         <div class="card-body row">
         <h4 class="card-text">${baseDeDatos[i].description}</h4>
         <h3 class="item-price text-danger">${baseDeDatos[i].unit_price}</h3>
         <button class="btn-creador btn btn-danger">Agregar al carrito
         <img class="img-carrito " src="./assets/carrito.svg" alt=""></button>
         </div>
         </div>
         </div>`;
         const addToShoppingCartBtn = document.querySelectorAll('.btn-creador');
         addToShoppingCartBtn.forEach((agregarConClick) => {
           agregarConClick.addEventListener('click', crearProducto);
              $('.agregado-carrito').hide()  
            }) 
          }
        }
      })  
      
      
function crearProducto(event){   
  const button = event.target;
  const item = button.closest('.item');
  const itemId = item.querySelector('.id-producto').textContent; 
  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-imagen').src;
  
  let producto = new Producto( itemId, itemTitle, Number(itemPrice), itemImage, 1 ) 
  let posicionProducto = carrito.indexOf(producto); 

  if (localStorage.getItem('carrito') == null) {
    carrito.push(producto)
    alertaAgregado()
    actualizarCarrito()
    crearProductosEnNavLS(producto)
  }  else if (carrito.find(elemento => elemento.id == producto.id )) {
    
    $('.alertas').html('producto existente en carrito')
    $('.alertas').fadeIn(function () {
    $('.alertas').fadeOut(2000)})

    carrito.cantidad += 1;
    actualizarCarrito()
    $('.cantidad-producto').text(producto.cantidad);
    
  } else if(carrito.find(elemento => elemento.id != producto.id )) {
    carrito.push(producto)
    alertaAgregado()
    actualizarCarrito()
    crearProductosEnNavLS(producto)
  }
  


}     

function crearProductosEnNavLS(producto){
  let productosNav = []
  let posicionProducto = carrito.indexOf(producto); 
    //carrito.length
    productosNav +=  `
    <div class="shoppingCartItem shopping-cart-quantity">
      <p class="id-producto"> ${producto.id}</p>
      <img src="${producto.imagen}" class="shopping-cart-img m-2" alt="">
      <p class="shopping-cart-item-title shoppingCartItemTitle m-2">${producto.nombre}</p>
      <p class="item-price mb-0 shoppingCartItemPrice m-2">${producto.precio}</p>  
      
      <button class="btn btn-danger button-suma m-2">+</button>
      <p class="cantidad-producto m-2 text-center" type="number" value="1" min="0">${carrito[posicionProducto].cantidad}</p>
      <button class="btn btn-danger button-resta m-2">-</button>
      
      <button class="btn btn-danger buttonDelete m-2">X</button>
      </div>
      `  
      $('.localStorage-nav').append(productosNav)    

      //resta
      $('.button-resta').click((event)=> { 
        let button = event.target
        let idProducto = button.parentNode.firstChild.nextSibling.textContent;
        let nProducto = carrito.find(function(idProducto) {
          return producto == idProducto; });
        let parrafoCantidad = button.previousElementSibling;

        parrafoCantidad.textContent = nProducto.cantidad -= 1; 
        suma2()
      })
      //agrega
      $('.button-suma').click((event) => {
        let button = event.target
        let idProducto = button.parentNode.firstChild.nextSibling.textContent;
        let nProducto = carrito.find(function(idProducto) {
          return producto == idProducto; });
        let parrafoCantidad = button.nextElementSibling;

        parrafoCantidad.textContent = nProducto.cantidad += 1; 
        suma2()
      });
      //elimina producto
      $('.buttonDelete').click( (e) => removeItemShoppingCart(e, posicionProducto));
      
      suma2()
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
  suma2()
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
      acumulado += ns[i];
    }
    return acumulado
  }
  const preciosCarrito = carrito.map(x => x.precio * x.cantidad)
  const resultado = suma(preciosCarrito)
  actualizarCarrito(resultado)
}

function vaciarCarrito(){ 
  suma = 0;
  carrito.length = 0;
  localStorage.removeItem("carrito"); 
  $('#contador-carrito').html(carrito.length);
  $('.total-carrito').html(0);

  $('.shoppingCartItem').remove();
  //$('.continnuarCompra').hide(500);
  $('.alertas').html('Vaciado con exito')
  $('.alertas').fadeIn(function () {
    $('.alertas').fadeOut(2000)
  })
 
 
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




// access_token=TEST-5900238552408376-022601-a2734d086c07642a6cc29ce88a11e16b-27112546
// access_token=APP_USR-5900238552408376-022601-c1d39df394012a8a75043de92a56ec45-27112546
$('.finalizar-compra').click(() => {
  $('.alertas').html('compra exitosa!')
  $('.alertas').fadeIn(function () {
  $('.alertas').fadeOut(2000)
  })
 $.ajax({
  url: 'https://api.mercadopago.com/checkout/preferences?access_token=APP_USR-5900238552408376-022601-c1d39df394012a8a75043de92a56ec45-27112546',
  type: 'POST',
  data: JSON.stringify({
      "items": [
          {
            "title": "Combo WHOPPER",
            "description": "Carne a la parrilla, pan, mayonesa, ketchup, cebolla, tomate, pepinos y lechuga, papas regulares y gaseosa 500ml.",
            "quantity": 1,
            "currency_id": "ARS",
            "unit_price": 10.0 
          }
      ]
  }),
  headers: {
      'Content-Type': 'application/json',
      'Authorization': ''
  },
  success : function(data){
      console.info(data);
  }
});

})


}) 
    