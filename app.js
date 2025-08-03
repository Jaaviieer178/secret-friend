let amigos = [];

function agregarAmigo() {
    // omamos el valor del input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // eliminamos espacios extra(al inicio y al final del nombre)

    //  Validamos si el campo esta vacio y lanzamos un mensaje de alerta si es así
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    //Agregamos el nombre al array
    amigos.push(nombre);
    console.log(amigos);

    // Limpiamos el campo para que el usuario pueda ingresar otro nombre
    input.value = "";
}