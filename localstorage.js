window.onload = document.getElementById("nombreIngresado").value = localStorage.getItem("nameUser")

function guardarData(){
    let value =document.getElementById("nombreIngresado").value
    
    localStorage.setItem("nameUser", value)
}

function borrarData(){
    localStorage.clear()
}

function borrarUnDato(){
    localStorage.removeItem("nameUser")
}

function guardarDataConSession(){
    let value =document.getElementById("nombreIngresado").value
    
    sessionStorage.setItem("nameUser", value)
}

let profesor ={
    nombre: "Esteban",
    edad: 26
}
console.log(profesor)
console.log(profesor.nombre)

let alumnos = [
    {nombre: "Ivan", estado: "cursando"},
    {nombre: "Juan", estado: "libre"},
]

profesorJSON = JSON.stringify(profesor)
alumnosJSON = JSON.stringify(alumnos)

let objetoMarcos = {"nombre":"marcos", "edad": 20}

 objetoMarcos = JSON.stringify()