let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya ha sido agregado.");
    return;
  }

  amigos.push(nombre);
  actualizarListaAmigos();
  input.value = "";
}

function actualizarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debe haber al menos dos personas para el sorteo.");
    return;
  }

  let mezclados = [...amigos].sort(() => Math.random() - 0.5);
  let resultado = {};
  for (let i = 0; i < amigos.length; i++) {
    resultado[mezclados[i]] = mezclados[(i + 1) % amigos.length];
  }

  mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
  let resultadoLista = document.getElementById("resultado");
  resultadoLista.innerHTML = "";

  for (let amigo in resultado) {
    let li = document.createElement("li");
    li.textContent = `${amigo} → ${resultado[amigo]}`;
    resultadoLista.appendChild(li);
  }
}
