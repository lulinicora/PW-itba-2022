console.log("soy externo")

let parrafo1 = document.getElementById("pConId")
console.log(parrafo1)

let parrafo2 = document.getElementsByClassName("pConClass")
console.log(parrafo2)

let parrafo3 = document.getElementsByTagName("p")
console.log(parrafo3)

function cambiarTitular(){
    let titular1 = document.getElementById("titular")
    titular1.innerText = "Otra cosa"
}

function hacerAparecer(){
    let contenedor = document.getElementById("vacio")
    contenedor.innerHTML = "<h2>BU!!</h2> <p>Apareció de la nada </p>"
    contenedor.className = "titularSecundario"
    let texto = "Hola"
    contenedor.append(texto)
}

function borrarPais(){
    let paises = document.getElementsByClassName("paises")
    paises[0].remove()
}

function sumar(valor){
    return parseInt(valor) + 1
}

function sumarEdad(){
    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value  
    document.body.append(" El nombre del usuario es: " + nombreUsuario + " y va a cumplir " + (parseInt(edadUsuario) + 1))
    let chequeado = document.getElementById("bases").checked
    if(chequeado != true){
        alert("Debe estar de acuerdo con las condiciones")
    }
    document.body.append(`El nombre de usuario es  ${nombreUsuario}, su edad es ${sumar(edadUsuario)} y va a cumplir  `)
}

let parrafos = document.querySelectorAll("p")

let seleccionarUno = document.querySelector("#titular")
let seleccionarClaseUnico = document.querySelector(".paises") //selecciona solo al 1ero
let seleccionarClase = document.querySelectorAll(".paises") //selecciona todos