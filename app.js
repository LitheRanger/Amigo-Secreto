 let amigos = [];

    // Mostrar todos los amigos en la lista
    function mostrarAmigos() {
      let lista = document.getElementById("listaAmigos");
      lista.innerHTML = "";

      for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
      }
    }

    // Agregar un nuevo amigo
    function agregarAmigo() {
      let input = document.getElementById("amigo");
      let nombre = input.value.trim();

      if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
      }

      amigos.push(nombre);
      mostrarAmigos();
      input.value = "";
    }

    // Sortear un amigo al azar
    function sortearAmigo() {
      // 1. Validar que haya amigos
      if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
      }

      // 2. Generar índice aleatorio
      let indiceAleatorio = Math.floor(Math.random() * amigos.length);

      // 3. Obtener el nombre sorteado
      let amigoSorteado = amigos[indiceAleatorio];

      // 4. Mostrar resultado
      document.getElementById("resultado").innerHTML = 
        "🎉 El amigo sorteado es: <b>" + amigoSorteado + "</b>";
    }