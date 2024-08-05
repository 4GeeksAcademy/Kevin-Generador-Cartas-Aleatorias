window.onload = function() {
  //write your code here
  //funcion para generar una carta mediante el button
  function generarCarta() {
    //definiendo los valores de los arreglos
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
    //Volver aleatorio tanto numero como valor
    let iconorandom = Math.floor(Math.random() * icono.length);
    let valorrandom = Math.floor(Math.random() * valor.length);
    //condicion para los colores de los iconos
    if (icono[iconorandom] === "♦" || icono[iconorandom] === "♥") {
      color = "red";
    } else {
      color = "black";
    }
    //doom para cambiar el color del icono de arriba
    let valoriconohead = document.getElementById("iconohead");
    valoriconohead.textContent = icono[iconorandom];
    valoriconohead.style.color = color;
    //doom para cambiar el numero y el color
    let valornumero = document.getElementById("numero");
    valornumero.innerHTML = valor[valorrandom];
    valornumero.style.color = color;
    //doom para cambiar el color del icono de abajo
    let valoriconofoot = document.getElementById("iconofood");
    valoriconofoot.textContent = icono[iconorandom];
    valoriconofoot.style.color = color;
  }
  //Generar una carta al cargar la página
  generarCarta();

  //Agregar evento de clic al botón para generar una nueva carta
  document.getElementById("newCardBtn").addEventListener("click", generarCarta);

  //Temporizador para generar una nueva carta cada 5 segundos
  setInterval(generarCarta, 5000);

  //Asignar la función de aplicar tamaño al botón
  document
    .getElementById("applySizeBtn")
    .addEventListener("click", aplicarTamaño);
};

//Función para aplicar el tamaño de la carta según el input del usuario
function aplicarTamaño() {
  let ancho = document.getElementById("cardWidth").value;
  let alto = document.getElementById("cardHeight").value;
  let tarjeta = document.getElementById("tarjeta");
  //Condicional para traer el ancho y alto de la carta en px
  if (ancho) {
    tarjeta.style.width = ancho + "px";
  }
  if (alto) {
    tarjeta.style.height = alto + "px";
  }
}
