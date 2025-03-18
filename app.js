let amiguis = [];

function agregarAmigo() {
    const inputAmigui = document.getElementById('amigo');
    const nombreAmigui = inputAmigui.value.trim();

    if (nombreAmigui === "") {
            alert('Error. Por favor, inserte un nombre.');
            return;
        }

        amiguis.push(nombreAmigui);

        actualizarLista();

        inputAmigui.value = "";
        inputAmigui.focus();
        //este metodo enfoca el elemento para volver a él inmediatamente

        }


function actualizarLista() {
    const listaAmiguis = document.getElementById("listaAmigos")
    listaAmiguis.innerHTML = "";

    amiguis.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmiguis.appendChild(li);

});
}

function sortearAmigui() {
    if(amiguis.length === 0) {
        alert("No hay amiguis en la lista. Agrega nombres en la lista.")
        return;

    }

    const indiceAleatorio = Math.floor(Math.random() * amiguis.length);

    const amiguiSorteado = amiguis[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amiguiSorteado}</li>`;

}