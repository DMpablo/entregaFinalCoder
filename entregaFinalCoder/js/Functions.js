

  function agregarCartClicked(event){   
    const button = event.target;
    const item = button.closest('.item');
    const itemTitle = item.querySelector('.item-title').textContent;
    let itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-imagen').src;
    localStorage.setItem("carrito", JSON.stringify(carrito)); 
  
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
  </div>`;
  shoppingCartRow.innerHTML = shoppingCartContent
  shoppingItemsContainer.append(shoppingCartRow);
  
  let padreBotonDelete = $('.botonDelete').closest();
  shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', (e) => removeItemShoppingCart(e, padreBotonDelete));
  }
  
  function removeItemShoppingCart(event, padreBotonDelete){
    console.log('la funcion esta andadndo');
    const botonDelete = event.target;
    console.log(botonDelete);
    console.log(padreBotonDelete);
    //botonDelete.closest('.shoppingCartItem').remove();
  }




$('.class').click(function(){
  
  hide

  show
})