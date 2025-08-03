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

    // Comprobamos si el nombre ya existe (sin distinguir mayúsculas/minúsculas)
    const existe = amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase());

    if (existe) {
        alert(`El nombre "${nombre}" ya fue ingresado.`);
    } else {
        amigos.push(nombre);
        console.log(amigos);

        const lista = document.getElementById("listaAmigos");
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = nombre;
        lista.appendChild(nuevoItem);
    }

    //Agregamos el nombre al array
    amigos.push(nombre);
    console.log(amigos);

    // Limpiamos el campo para que el usuario pueda ingresar otro nombre
    input.value = "";
}

    //Utilizo const para que no se pueda modificar el valor de la variable
function sortearAmigo() {
    //  Verificamos que haya al menos un nombre en el array de amigos
    if (amigos.length === 0) {
        alert("No hay nombres para sortear. Por favor, añade al menos uno.");
        return;
    }

    const resultado = document.getElementById("resultado");

    // Spinner que simula la carga
    const spinner = document.getElementById("spinner");

    //  Mostramos un mensaje de “sorteando...” y activamos el spinner
    resultado.innerHTML = `<li>⏳ Sorteando el amigo secreto...</li>`;
    spinner.style.display = "block";

    //  Usamos setTimeout para simular una espera de 3 segundos antes de mostrar el resultado
    setTimeout(() => {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        const nombreSorteado = amigos[indiceAleatorio];
        
        spinner.style.display = "none";
        
        resultado.innerHTML = `<li> El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;

        document.getElementById("btnReiniciar").style.display = "block";
    }, 3000); // Tiempo de espera en milisegundos (3000 = 3 segundos)
}


function reiniciarLista() {
    amigos = []; // Reiniciamos el array
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    // Ocultamos el botón de reinicio
    document.getElementById("btnReiniciar").style.display = "none";
}