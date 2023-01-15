var carrito = [];
let flag = true;
function IngresarProducto() {
  while (flag) {
    if (prompt("si desea ingresar prodcutos ponga si") === "si") {
      let producto = {
        nombre: prompt("ingrese el nombre del producto"),
        precio: Number(prompt("ingrese la cantidad del producto")),
        cantidad: Number(prompt("ingrese la cantidad del producto")),
      };
      carrito.push(producto);
      console.log(carrito);
    } else {
      alert(
        "A dejado de ingresar productos de manera exitosa presione aceptar"
      );
      sumarCarrito();
      flag = false;
    }
  }
}
function sumarCarrito() {
  let sumaTotal = 0;
  let sumaCantidad = 0;
  carrito.forEach((producto) => {
    sumaTotal += producto.precio;
    sumaCantidad += producto.cantidad;
  });
  alert(
    "El precio total de los precios es " +
      sumaTotal +
      " La cantidad de productos que va a llevar sera " +
      sumaCantidad
  );
}
IngresarProducto();
