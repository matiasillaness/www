
const arrayShop = [
 {
    id: "1",
    nombre: "Remera",
    precio: 30,
    img:"https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_960_720.jpg",
    cantidad: 1
 },
 {
    id: "2",
    nombre: "Short",
    precio: 30,
    img:"https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_960_720.jpg",
    cantidad: 1
 },
 {
    id: "3",
    nombre: "Camisa",
    precio: 30,
    img: "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_960_720.jpg",
    cantidad: 1
   
 }
 ,
 {
    id: "4",
    nombre: "Camisa",
    precio: 30,
    img: "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_960_720.jpg",
    cantidad: 1
   
 }
 ,
 {
    id: "5",
    nombre: "Camisa",
    precio: 30,
    img: "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_960_720.jpg",
    cantidad: 1
   
 }
 ,
 {
    id: "6",
    nombre: "Camisa",
    precio: 30,
    img: "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_960_720.jpg",
    cantidad: 1
   
 }
 ,
 {
    id: "7",
    nombre: "Camisa",
    precio: 30,
    img: "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_960_720.jpg",
    cantidad: 1
 }
]




const visualShop = document.querySelector("#div-card-shop")
arrayShop.forEach(producto => {
    visualShop.innerHTML += `
    <div id="lol">
  <h1> Nombre : ${producto.nombre} </h1>
  <h2>Precio: ${producto.precio}</h2>
  <img id="imagen-lol" src="${producto.img}"></img>
  <button id="${producto.id}" class="button-lol">Agregar</button>
  </div>
  `
});


const arrayCarrito = []
const button = document.querySelectorAll(".button-lol")
button.forEach(boton => {
    boton.addEventListener("click", () => {
        if(!existeProducto(boton.id)){
            const id = boton.id
            const producto = arrayShop.find(producto => producto.id === id)
            arrayCarrito.push(producto)
           
            
        }
        else{
            const producto = existeProducto(boton.id)
            producto.cantidad ++;
                     
        }
        console.log(arrayCarrito)
        mostrarCarrito()
    })
})


function existeProducto(id){
   const producto = arrayCarrito.find(producto => producto.id === id)
   return producto
}

const visualCarrito = document.querySelector(".div-card-carrito")
const buttonCarrito = document.querySelector("#button-carrito") 

function mostrarCarrito(){ 
    visualCarrito.innerHTML = `<button id="button-carrito__in">Cerrar</button>` 
    arrayCarrito.forEach(producto => {
        
        visualCarrito.innerHTML += `
        <div id="lol">
            <h1> Nombre : ${producto.nombre} </h1>
            <h2>Precio: ${producto.precio}</h2>
            <h2>Cantidad: ${producto.cantidad}</h2>
            <button id="${producto.id}">Eliminar</button>
        </div>
        `
    })
}	

const carrito = document.querySelector(".div-card-carrito")
const cerrarCarrito = document.querySelector("#button-carrito__in")
carrito.addEventListener("click",cambiarEstado)

const openCarrito = document.querySelector("#button-carrito")
openCarrito.addEventListener("click",cambiarEstado)
   
function cambiarEstado(){
    carrito.classList.toggle("carrito__close")
}

