 //$(document).ready(function(){}

 
 
let carrito = []; 

if(localStorage.getItem('carrito') != null){
  console.log('entro en la validacion');
  let valoresDelCarrito = JSON.parse(localStorage.getItem('carrito'));
  carrito = valoresDelCarrito;
  $('#contador-carrito').html(carrito.length);
}


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


const shoppingItemsContainer = document.querySelector('.shoppingCartItemsContainer');



function agregarCartClicked(event){  

  localStorage.setItem("carrito", JSON.stringify(carrito)); 
  //const nombreItemCarrito = carrito[i];
  console.log(carrito[i].nombre);
  const button = event.target;
  const item = button.closest('.item');
  const itemTitle = item.querySelector('.item-title').textContent;
  let itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-imagen').src;


  //console.log(unItemTitle); 
  

  agregarAlCarrito(itemTitle, itemPrice);
  agregarItemAlShoppingCart(itemTitle,itemPrice,itemImage);
  agregarAlContadorCarrito();
} 

function agregarAlContadorCarrito(){
//document.getElementById("contador-carrito").innerHTML = carrito.length;
$('#contador-carrito').html(carrito.length);
}

function agregarAlCarrito(itemTitle, itemPrice){

let items = [itemTitle, itemPrice];
carrito.push(items);   
}
  
function agregarItemAlShoppingCart(itemTitle,itemPrice,itemImage){
//esta funcion quiero que muestre el carrito con descripcion en html
const shoppingCartRow = document.createElement('div');
const shoppingCartContent = `
<div class="row shoppingCartItem">
    <div class="col-6">
         <img src="${itemImage}" class="shopping-cart-img" alt="">
        <h6 class="shopping-cart-item-title shoppingCartItemTitle">${itemTitle}</h6>
    </div>
      <div class="col-2">
          <div class="shopping-cart-price d-flex align-items-center">
          <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
          </div>
      </div>
      <div class="col-4">
          <div class="shopping-cart-quantity d-flex justify-content-center">
          <input class="shopping-cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger buttonDelete">X</button>
          </div>
      </div>
    </div>
`;
shoppingCartRow.innerHTML = shoppingCartContent
shoppingItemsContainer.append(shoppingCartRow);


let padreBotonDelete = $('.shoppingCartItem');
shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', (e) => removeItemShoppingCart(e, padreBotonDelete));
//console.log(padreBotonDelete);
}

function removeItemShoppingCart(event, padreBotonDelete){
  for (let i = 0; i < carrito.length; i++) {
    
    const botonDelete = event.target;
    padreBotonDelete.remove();
    
    //console.log(botonDelete);
    console.log(padreBotonDelete);
    console.log('la funcion se esta ejecutando');
  }
}

  