let carrito = []; 
$('.limpiar-carrito').click(vaciarCarrito);
$('.productos-menu').hide();
$('.productos-titulo').hide();
$(".descripcion-productos").click(menuNav); 
let suma = 0;


if(localStorage.getItem('carrito') != null){
  console.log('entro en la validacion');
  let carrito = localStorage.getItem('carrito');
  $('#contador-carrito').html(carrito.length);
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
              <h3 class="item-price text-danger ">${baseDeDatos[i].precio}</h3>
              <button class="btn btn-danger">Agregar al carrito</button>
            </div>
          </div>
         </div>`;
const addToShoppingCartBtn = document.querySelectorAll('.btn');
addToShoppingCartBtn.forEach((agregarConClick) => {
agregarConClick.addEventListener('click', crearProducto);

})}}})  


function menuNav(){
  $('.pedilo-aca').toggle();
  $('.productos-titulo').toggle();
  $(".productos-menu").slideToggle("fast");
};
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
  let posicionProducto = carrito.indexOf(producto);

 //validacionFor(producto);
  //validacioIndexOf(producto);
  actualizarCarrito();
  crearProductosEnHtml(producto.nombre, producto.precio, producto.imagen, posicionProducto);
  sumarTotalCarrito() 
}   
function validacionFor(producto){

  for (let i = 0; i < carrito.length; i++) {
    if(carrito[i].nombre == producto.nombre){
      console.log(producto.nombre + ' ya esta en carrito');
    }else {
      console.log(producto.nombre + ' se agrego al carrito');
      carrito.push(producto);
    }
  }
 
}
function validacionIndexOf(producto){
if(carrito.indexOf(producto.nombre) === -1){
  console.log(producto.nombre + ' se agrego al carrito');
  carrito.push(producto);
}else{
  console.log(producto.nombre + ' ya esta en carrito');
}

}
function actualizarCarrito(){
  localStorage.setItem("carrito", JSON.stringify(carrito));
  $('#contador-carrito').html(carrito.length);

}
function crearProductosEnHtml(nombre, precio, imagen, posicionProducto ){
//esta funcion quiero que muestre el carrito con descripcion en html
const shoppingCartRow = document.createElement('div');
const shoppingCartContent = `
<div class="row shoppingCartItem shopping-cart-quantity">
    <img src="${imagen}" class="col-2 shopping-cart-img" alt="">
    <p class="col-2 shopping-cart-item-title shoppingCartItemTitle">${nombre}</p>
    <p class="col-2 item-price mb-0 shoppingCartItemPrice">${precio}</p>    
      <input class="col-2 shopping-cart-quantity-input" type="number" value="1">
      <button class="col-2 btn btn-danger buttonDelete m-2">X</button>
</div>
`;
shoppingItemsContainer.append(shoppingCartRow);
shoppingCartRow.innerHTML = shoppingCartContent;
shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', (e) => removeItemShoppingCart(e, posicionProducto, precio));
}
function removeItemShoppingCart(event, posicionProducto, precio){
  let botonClikeado = event.target
  botonClikeado.closest('.shoppingCartItem').remove();
  carrito.splice(posicionProducto,1);
  //console.log(precio);
  restarTotalCarrito()
  actualizarCarrito()
}
function vaciarCarrito(){
  carrito.length = 0;
  suma = 0;
  $('.shoppingCartItem').remove();
  actualizarCarrito()
}
function sumarTotalCarrito(){
  /* esta funcion solo suma,no actualiza el valor total */
   
     for (let i = 0; i < carrito.length; i++) {
      suma += carrito[i].precio; 
    } 
    
} 

function restarTotalCarrito(){
  for (let i = 0; i < carrito.length; i++) {
   suma -= carrito[i].precio; 

  }
  console.log(suma);
} 


class Producto {
  constructor(nombreCombo, precioCombo, imagenProducto, cantidadSeleccionada) {
    this.nombre = nombreCombo;
    this.precio = precioCombo;
    this.imagen = imagenProducto;
    this.cantidad = cantidadSeleccionada;
  }
}

  