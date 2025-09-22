// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
    let nombres = [];

function agregarNombre() {
  const input = document.getElementById("nombre");
  const nombre = input.value.trim();

  if (nombre && !nombres.includes(nombre)) {
    nombres.push(nombre);
    actualizarLista();
    input.value = "";
  } else {
    alert("Nombre vacío o repetido");
  }
}

function actualizarLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  nombres.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    lista.appendChild(li);
  });
}

function sortear() {
  if (nombres.length < 2) {
    alert("Se necesitan al menos 2 nombres para jugar");
    return;
  }

  let copia = [...nombres];
  let resultado = {};

  nombres.forEach(n => {
    let posibles = copia.filter(x => x !== n);
    if (posibles.length === 0) {
      alert("No se pudo asignar correctamente, intenta de nuevo");
      resultado = {};
      return;
    }
    let amigo = posibles[Math.floor(Math.random() * posibles.length)];
    resultado[n] = amigo;
    copia = copia.filter(x => x !== amigo);
  });

  mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
  const div = document.getElementById("resultado");
  div.innerHTML = "<h3>Resultados:</h3>";
  for (let [persona, amigo] of Object.entries(resultado)) {
    div.innerHTML += `<p>${persona} ➝ ${amigo}</p>`;
  }
}
