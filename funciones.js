/*Funciones Declaradas*/ 

function saludar(){
    let nommbreIngrsado = prompt("Ingrese su nombre")
    alert("Hola " + nommbreIngrsado)
}

function siguiente (numero){
    console.log(numero + 1)
}
function saludarConParametro (nombre){
    console.log("Hola " + nombren )
}
function sumarDos(numero1, numero2){
    let resultado = numero1 + numero2
    return resultado 
}
function mostrar (visible){
    console.log(visible)
}
mostrar(sumarDos(1, 2))

function calculadra (numero1, numero2, operacion){
    if (operacion == "+"){
        return numero1 + numero2
    }
    else if (operacion == "-"){
        return numero1 - numero2
    }
    else if (operacion == "*"){
        return numero1 * numero2
    }
    else if (operacion == "/"){
        if (numero2 !== 0){
        return numero1 / numero2}
        else{
            return "No se puede dividir por 0"
        }
    }
    else{
        return "Ingrese una operación valida"
    }
}

let variableNombre = "Esteban"

function saludarALaVariable(){
    return "Hola " + variableNombre 
}

/*Funciones Anónimas o Expresadas*/ 
let suma = function (a,b){
    return a + b
}
let resta = function (a, b){
    return a - b
}
/*Declaradas vs Expresadas*/
function duplicarDeclarada (numero){
    return numero*2
}
let duplicarExpresada = function (numero){
    return numero*2 
}
/*Función Flecha*/
let multiplicar = (a,b) => {a*b}
let siguiente = numero => numero+1


/* Una funcion que: 

1.-Calcular costo total de productos y/o servicios seleccionados por el usuario.

2-Calcular pagos en cuotas sobre un monto determinado.

3-Calcular valor final de un producto seleccionado en función de impuestos y descuentos.

4-Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.

5-Calcular edad promedio de personas registradas.

6-Calcular nota final de alumnos ingresados. 

7-Nos indique si el numero es par o impar

*/
/*1*/
function calcularCosto (producto1, productoo2, producto3)
let costoTotal = 0;
producto1 = 50;
producto2 = 100;
producto3 = 150;
if (proucto1 == "madera" || producto2 == "madera" || producto3 == "madera"){
costoTtoal = costoTotal + 50
}
if (proucto1 == "metal" || producto2 == "metal" || producto3 == "metal"){
    costoTtoal = costoTotal + 100
}
if (proucto1 == "vidrio" || producto2 == "vidrio" || producto3 == "vidrio"){
    costoTtoal = costoTotal + 150
}
mostrar(calcularCosto("madera", "madera", "vidrio"))