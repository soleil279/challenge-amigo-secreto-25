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

