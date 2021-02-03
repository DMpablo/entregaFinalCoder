//import agregarAlCarrito from './Functions';
//import borrarUnProducto from './Functions';
 
 let carrito = []; 

    if(localStorage.getItem('carrito') != null){
        console.log('entro en la validacion');
        let valoresDelCarrito = JSON.parse(localStorage.getItem('carrito'));
        carrito = valoresDelCarrito;
        document.getElementById("contador-carrito").innerHTML = carrito.length;
    }



 fetch("./baseDeDatos.json")
.then(response =>response.json())  
.then (baseDeDatos => {
  for(let i = 0; i<baseDeDatos.length; i++){
  let element = document.getElementById('galeria')
  element.innerHTML += `
  <div class="col-lg-4 col-md-4 mb-4 p-3">
  <div class="card-100">
  <img src="${baseDeDatos[i].imagen}" class="card-img-top" >
  <div class="card-body row">
  <h5 class="card-title">${baseDeDatos[i].nombre}</h5>
  <p class="card-text">${baseDeDatos[i].condimentos}</p>
  <button onclick='agregarAlCarrito(${JSON.stringify(baseDeDatos[i])})' href="#" class="btn btn-danger">$${baseDeDatos[i].precio}</button>           
  </div>
  </div>
  </div>
  `; 
  console.log(baseDeDatos);  
}})


   

    function agregarAlCarrito(producto){   
      //Esta funcion solo quiero que sume 
      carrito.push(producto);   
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito()
      console.log(carrito);
      document.getElementById("contador-carrito").innerHTML = carrito.length;
    } 
    

    
    function mostrarCarrito(){
      //esta funcion quiero que muestre el carrito con descripcion en html
      let aux = 0; 
      for (let i=0; i< carrito.length; i++){            
        aux+=carrito[i].precio;
        document.getElementById("lista-carrito").innerHTML += `
        <div> ${carrito[i].nombre} ${carrito[i].precio}
        <button onclick='borrarUnProducto()' href="#" class="btn btn-danger">-</button> 
        </br>
        </div>
        `;
      }
      document.getElementById("totalCarrito").innerHTML = "$" + aux; 
    }


    

    function borrarUnProducto(producto){
      //esta funcion quiero que muestre el carrito con descripcion en html
      console.log(carrito);
      carrito.splice(producto, 1);   
      localStorage.setItem("carrito", JSON.stringify(carrito));

      let aux = 0; 
      for (let i=0; i< carrito.length; i++){            
        aux-=carrito[i].precio;
        document.getElementById("lista-carrito").innerHTML += `
        <div> ${carrito[i].nombre} ${carrito[i].precio}
        <button onclick='borrarUnProducto()' href="#" class="btn btn-danger">-</button> 
        </br>
        </div>
        `;
      }
      document.getElementById("totalCarrito").innerHTML = "$" + aux; 
      document.getElementById("contador-carrito").innerHTML = carrito.length;
    }

    function clave(event){
      if (event.target.value.length < 5 ){
        alert('la clave contiene menos de 5 caracteres')
      }
    }






    /* function borrarUnProducto(producto){   
      console.log(carrito);
      carrito.splice(producto, 1);   
      localStorage.setItem("carrito", JSON.stringify(carrito));
      
      let aux = 0; 
      for (let i=0; i< carrito.length; i++){            
          aux+=carrito[i].precio;           
      }
      document.getElementById("totalCarrito").innerHTML = "$" + aux; 
  }  */

  /*  function borrarUnProducto(producto, contador){   
        //esta funcion quiero que elimine productos del carrito
        console.log(carrito);
        carrito.lenght = carrito.lenght -1;

        Number(contador) -= Number(producto.precio);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        var producto = carrito.pop();
        document.getElementById("totalCarrito").innerHTML = "$" + carrito;
        return producto;
    }  */
      


    

  