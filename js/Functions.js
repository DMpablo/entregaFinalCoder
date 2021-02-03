fetch("./baseDeDatos.json")
.then(response =>response.json())  
.then (baseDeDatos => {
  for(let i = 0; i<baseDeDatos.length; i++){
  /* let  element = document.getElementById('galeria')
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
  `; */
  console.log(baseDeDatos);  
}})

/* export default function agregarAlCarrito(producto, contador ){   
    carrito.push(producto);   
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    let aux = 0; 
    for (let i=0; i< carrito.length; i++){            
        aux+=carrito[i].precio;
        document.getElementById("lista-carrito").innerHTML += JSON.stringify(carrito[i].nombre)+' $'+JSON.stringify(carrito[i].precio) +` <button onclick='borrarUnProducto(${JSON.stringify(carrito[i])})' href="#" class="btn btn-danger">-</button> </br>`; 
    }
    document.getElementById("totalCarrito").innerHTML = "$" + aux; 
} 


export function borrarUnProducto(producto, contador){   
    console.log(carrito);
    carrito.lenght = carrito.lenght -1;
    contador -= producto.precio; document.getElementById("totalCarrito").innerHTML = "$" + aux; 
} */



export function agregarAlCarrito(baseDeDatos){   
    //carrito.push(producto);   
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    carrito.lenght = carrito.lenght +1;
    carrito += JSON.parse(baseDeDatos.precio); 
    document.getElementById("lista-carrito").innerHTML = "$" + baseDeDatos.precio;  
    /* let aux = 0; 
    for (let i=0; i< carrito.length; i++){            
        aux+=carrito[i].precio;
        document.getElementById("lista-carrito").innerHTML += JSON.stringify(carrito[i].nombre)+' $'+JSON.stringify(carrito[i].precio) +` <button onclick='borrarUnProducto(${JSON.stringify(carrito[i])})' href="#" class="btn btn-danger">-</button> </br>`; 
    }
    document.getElementById("totalCarrito").innerHTML = "$" + aux;  */
    
} 


function mostrarCarrito(){
    
}
/*  function borrarUnProducto(producto, contador){   
    console.log(carrito);
    carrito.lenght = carrito.lenght -1;
    contador -= producto.precio; document.getElementById("totalCarrito").innerHTML = "$" + element; 
}*/ 


export function borrarUnProducto(producto){   
    console.log(carrito);
    carrito.splice(producto, 1);   
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    let aux = 0; 
    for (let i=0; i< carrito.length; i++){            
        aux+=carrito[i].precio;           
    }
    document.getElementById("totalCarrito").innerHTML = "$" + aux; 
} 



