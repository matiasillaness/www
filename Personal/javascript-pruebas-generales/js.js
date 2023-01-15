let figura = prompt("Introduce la figura: ");

switch (figura) {
    case "cuadrado","Cuadrado":
        let lado = prompt("Introduce el lado: ");
        let areaa = lado * lado;
        alert("El área del cuadrado es: " + area);
        break;
    case "triangulo" || "Triangulo":
        let base = prompt("Introduce la base: ");
        let altura = prompt("Introduce la altura: ");
        let areaaa = (base * altura) / 2;
        alert("El área del triángulo es: " + area);
        break;
    case "circulo" || "Circulo":
        let radio = prompt("Introduce el radio: ");
        let areaaaa = Math.PI * radio * radio;
        alert("El área del círculo es: " + area);
        break;
    default:
        alert("No se ha introducido una figura válida");
        break;
}
