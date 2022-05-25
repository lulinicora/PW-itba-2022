function sumar(valor){
    return parseInt(valor) + 1
}

function sumarEdad(){
    let nombreUsuario = document.getElementById("nombre").value
    let edadUsuario = document.getElementById("edad").value  
    let chequeado = document.getElementById("bases").checked
    if(parseInt(edadUsuario) < 18){
        alert("Debe ser mayor de edad para acceder a esta página")
    }
    if(chequeado != true){
        alert("Debe estar de acuerdo con las condiciones")
    }
    document.body.append(`El nombre de usuario es  ${nombreUsuario}, su edad es ${edadUsuario} y va a cumplir ${sumar(edadUsuario)} `)
}