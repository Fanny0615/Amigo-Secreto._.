let nombres = [];

function agregarNombre() {
    const nombreInput = document.getElementById("nombreInput");
    const nombre = nombreInput.value.trim();
    if (nombre) {
        nombres.push(nombre);
        nombreInput.value = "";
        actualizarListaNombres();
    }
}

function actualizarListaNombres() {
    const listaNombres = document.getElementById("listaNombres");
    listaNombres.innerHTML = "";
    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Por favor, agrega nombres a la lista primero.");
        return;
    }
    if (nombres.length === 1) {
        alert("No se puede sortear con un solo nombre.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSorteado = nombres[indiceAleatorio];
    console.log("Índice sorteado:", indiceAleatorio);
    console.log("Amigo sorteado:", amigoSorteado);

    // Actualiza el elemento con el ID "resultado" en lugar de "amigoSorteado"
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = ""; // Limpia el contenido anterior
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultadoElement.appendChild(li);

}