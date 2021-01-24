class Producto {
    constructor(nombreProdcto, precioProducto, condimentosProducto, imagenProducto, stockProductos ){ 
        this.nombre = nombreProdcto;
        this.precio = precioProducto;
        this.condimentos = condimentosProducto;
        this.imagen = imagenProducto;
        this.stock = stockProductos;
}}
    let baseDeDatos = [];      
    let productoUno = new Producto ("Combo WHOPPER", 550, "Carne a la parrilla, pan, mayonesa, ketchup, cebolla, tomate, pepinos y lechuga, papas regulares y gaseosa 500ml.", "https://images.deliveryhero.io/image/pedidosya/products/471535-7676e83e-b3d3-486e-b454-20b819a210e3.jpg?quality=80&width=200&height=150", 20);
    let productoDos = new Producto ("Combo BK Stacker", 650, "Tres carnes a la parrilla, queso cheddar, panceta y salsa especial. Acompañado con una bebida y una papas fritas regulares.", "https://images.deliveryhero.io/image/pedidosya/products/471535-7676e83e-b3d3-486e-b454-20b819a210e3.jpg?quality=80&width=200&height=150", 13);
    let productoTres = new Producto ("Combo Doble Stacker Crispy", 560, "Doble carne a la parrilla, pan, doble cheddar, panceta, cebolla crispy, salsa stacker, gaseosa 500 ml y papas regulares.","https://images.deliveryhero.io/image/pedidosya/products/471535-bfa46f92-8844-4c0b-bc9c-df76e2dc2dc4.jpg?quality=80&width=200&height=150", 10);
    baseDeDatos.push(productoUno);
    baseDeDatos.push(productoDos);
    baseDeDatos.push(productoTres);

    
    let aux = ``;
    for(let i = 0; i<baseDeDatos.length; i++){
        if (baseDeDatos[i].stock > 0){
            aux += `
            <div class="col-lg-4 col-md-4 mb-4">
            <div class="card-100">
            <img src="${baseDeDatos[i].imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${baseDeDatos[i].nombre}</h5>
            <p class="card-text">${baseDeDatos[i].condimentos}</p>
            <h3 class="card-text">$ ${baseDeDatos[i].precio}</h3>
            
            <button onclick="agregar(${baseDeDatos[i].precio})" href="#" class="btn btn-primary">Agregar </button>
            </div>
            </div>
             </div>
    `;}else{ aux += '<h2>No tenemos stock</h2>'}}
    //totalCarrito.push(productoUno.precio);   
    //totalCarrito.push(productoDos.precio);
    //totalCarrito.push(productoTres.precio);
    let totalCarrito = [];  
    let mostrarCarrito = ``; 
    for(let i = 0; i<totalCarrito.length; i++){
           mostrarCarrito +=`
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${totalCarrito[i].nombre}</h5>
            <h3 class="card-text">$${totalCarrito[i].precio}</h3>
            </div>
            </div>
            `;} 
    function agregar(precio){
            totalCarrito.push(precio);
            mostrarCarrito +=`
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h3 class="card-text">$${precio}</h3>
            </div>
            </div>
            `;
            document.getElementById("carrito").innerHTML = mostrarCarrito; 
            console.log(totalCarrito);
            }
    /* function sumarCarrito(){
        let resultado = totalCarrito.reduce((a, b) => a + b, 0);
         console.log(resultado) 
    } */
    document.getElementById("galeria").innerHTML = aux;