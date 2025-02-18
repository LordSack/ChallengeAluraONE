let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }
    
    amigos.push(nombre);
    
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
    
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe ingresar al menos 2 nombres para realizar el sorteo.");
        return;
    }
    
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indice];
    
    mostrarResultado(amigoSeleccionado);
}

function mostrarResultado(amigoSeleccionado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `Amigo seleccionado: ${amigoSeleccionado}`;
    resultadoLista.appendChild(li);
}
