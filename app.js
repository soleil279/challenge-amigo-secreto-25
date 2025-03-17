let amigos = [];

function agregarAmigo() {
    let nuevoAmigui = document.getElementById('amigo');
    let nombre = nuevoAmigui.value.trim();

    if (nombreAmigui.lenght === "") {
            alert('Error. Por favor, inserte un nombre.');
            return;
        }
        
        amigos.push(nombreAmigui);

        actualizarLista();

        inputAmigui.value = "";
        inputAmigui.focus();

        }

function actualizarLista() {
    let listaAmiguis = document.getElementById("listaAmigos")
    listaAmiguis.innerHTML = "";

    amigos.forEach(amigo => {
    let li = document.createElement(li)
    li.textContent = amigo;
    listaAmiguis.appendChild(li);
    
});
}