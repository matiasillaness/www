console.log("Bienvenido al calculador de promedios")

let suma = 0
let notas = 0

function promedio_final (a){
    if (a >=6 )
console.log("Aprobaste")
    else
console.log("Desaprobaste")
}

let notas_total = parseInt(prompt("Ingrese la cantidad de notas"))

for(i=0; i< notas_total; i++){
    let notas = parseInt(prompt("Ingrese la nota " + i))
    suma = suma + notas
}

promedio = suma / notas_total
if (isNaN (promedio)){
    console.log("Los valores ingresados estan mal")
}
else{
    console.log("el resultado del promedio es " + promedio)
    promedio_final(promedio)
}