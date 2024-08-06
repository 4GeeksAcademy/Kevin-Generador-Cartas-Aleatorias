window.onload = function() {
  let intervaloTiempo = 10; // tiempo en segundos
  let tiempoRestante = intervaloTiempo;

  // Referencias a los elementos del DOM
  let contadorElemento = document.getElementById("tiempoRestante");

  function generarCarta() {
    // Definiendo los valores de los arreglos
    let icono = ["♦", "♥", "♠", "♣"];
    let valor = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    let color = "";

    // Volver aleatorio tanto número como valor
    let iconorandom = Math.floor(Math.random() * icono.length);
    let valorrandom = Math.floor(Math.random() * valor.length);

    // Condición para los colores de los iconos
    if (icono[iconorandom] === "♦" || icono[iconorandom] === "♥") {
      color = "red";
    } else {
      color = "black";
    }

    // Actualizar los elementos del DOM con los valores generados
    let valoriconohead = document.getElementById("iconohead");
    valoriconohead.textContent = icono[iconorandom];
    valoriconohead.style.color = color;

    let valornumero = document.getElementById("numero");
    valornumero.innerHTML = valor[valorrandom];
    valornumero.style.color = color;

    let valoriconofoot = document.getElementById("iconofoot");
    valoriconofoot.textContent = icono[iconorandom];
    valoriconofoot.style.color = color;
  }

  function actualizarContador() {
    tiempoRestante--;
    contadorElemento.textContent = tiempoRestante;

    if (tiempoRestante <= 0) {
      generarCarta();
      tiempoRestante = intervaloTiempo; // Reinicia el contador
    }
  }

  // Generar una carta al cargar la página
  generarCarta();

  // Agregar evento de clic al botón para generar una nueva carta
  document.getElementById("newCardBtn").addEventListener("click", function() {
    generarCarta();
    tiempoRestante = intervaloTiempo; // Reinicia el contador si se genera una carta manualmente
  });

  // Iniciar el contador que actualiza cada segundo
  setInterval(actualizarContador, 1000);

  // Función para aplicar el tamaño de la carta según el input del usuario
  document
    .getElementById("applySizeBtn")
    .addEventListener("click", aplicarTamaño);
};

function aplicarTamaño() {
  let ancho = document.getElementById("cardWidth").value;
  let alto = document.getElementById("cardHeight").value;
  let tarjeta = document.getElementById("tarjeta");

  // Condicional para aplicar el ancho y alto de la carta en px
  if (ancho) {
    tarjeta.style.width = ancho + "px";
  }
  if (alto) {
    tarjeta.style.height = alto + "px";
  }
}
