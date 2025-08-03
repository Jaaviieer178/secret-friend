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

    //Utilizo const para que no se pueda modificar el valor de la variable
function sortearAmigo() {
    //  Validamos que el array no esté vacío
    if (amigos.length === 0) {
        alert("No hay nombres para sortear. Por favor, añade al menos uno.");
        return;
    }

    // Generamos un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //  Obtenemos el nombre sorteado
    const nombreSorteado = amigos[indiceAleatorio];

    // Mostramos el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎁 El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}