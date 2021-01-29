let carrito = [];

//  if ternario
//  (true) ? si es true pasa esto: sino pasa esto otro;



class Producto {
    constructor(nombreProdcto, precioProducto, condimentosProducto, imagenProducto, stockProductos ){ 
        this.nombre = nombreProdcto;
        this.precio = precioProducto;
        this.condimentos = condimentosProducto;
        this.imagen = imagenProducto;
        this.stock = stockProductos;
    }}


    //cambiar a un arvhvo JSON
    let productoUno = new Producto ('Combo WHOPPER', 550, 
    'Carne a la parrilla, pan, mayonesa, ketchup, cebolla, tomate, pepinos y lechuga, papas regulares y gaseosa 500ml.', 'https://images.deliveryhero.io/image/pedidosya/products/471535-7676e83e-b3d3-486e-b454-20b819a210e3.jpg?quality=80&width=200&height=150', 20);
    let productoDos = new Producto ('Combo BK Stacker Triple', 650, 
    'Tres carnes a la parrilla, queso cheddar, panceta y salsa especial. Acompañado con una bebida y una papas fritas regulares.', 'https://images.deliveryhero.io/image/pedidosya/products/471535-bfa46f92-8844-4c0b-bc9c-df76e2dc2dc4.jpg?quality=80&width=200&height=150', 13);
    let productoTres = new Producto ('Combo Doble Stacker Crispy', 560, 
    'Doble carne a la parrilla, pan, doble cheddar, panceta, cebolla crispy, salsa stacker, gaseosa 500 ml y papas regulares.','https://images.deliveryhero.io/image/pedidosya/products/471535-7676e83e-b3d3-486e-b454-20b819a210e3.jpg?quality=80&width=200&height=150', 10);
    
    let baseDeDatos = [productoUno, productoDos, productoTres];      
    let aux = ``;
    for(let i = 0; i<baseDeDatos.length; i++){
        if (baseDeDatos[i].stock > 0){
            aux += `
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
            `;}else{ aux += ` <h5 class="card-title">${baseDeDatos[i].nombre}</h5>  
            <h2 id="precio-Total">No tenemos stock</h2>`}
        }
    
    document.getElementById("galeria").innerHTML = aux;

        
    if(localStorage.getItem('carrito') != null){
        console.log('entro en la validacion');
        let valoresDelCarrito = JSON.parse(localStorage.getItem('carrito'));
        carrito = valoresDelCarrito;
    }
    function agregarAlCarrito(producto){   
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


    

    function borrarUnProducto(producto){   
        console.log(carrito);
        carrito.splice(producto, 1);   
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
        let aux = 0; 
        for (let i=0; i< carrito.length; i++){            
            aux+=carrito[i].precio;           
        }
        document.getElementById("totalCarrito").innerHTML = "$" + aux; 
    } 

