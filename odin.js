function juegoPiedraPapelTijeras(userChoice) {
  const choices = ["piedra", "papel", "tijeras"];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  console.log(`Tu elección: ${userChoice}`);
  console.log(`Elección de la computadora: ${computerChoice}`);

  if (userChoice === computerChoice) {
    console.log("¡Es un empate!");
  } else if (
    (userChoice === "piedra" && computerChoice === "tijeras") ||
    (userChoice === "papel" && computerChoice === "piedra") ||
    (userChoice === "tijeras" && computerChoice === "papel")
  ) {
    console.log("¡Ganaste!");
  } else {
    console.log("¡Perdiste!");
  }
}

/* Para jugar tienes que cambiar el contenido de la variable de userSelection por piedra, papel 
o tijeras (SIEMPRE TODO EN MINUSCULAS)*/

const userSelection = "papel"; // Cambia esto por "piedra", "papel" o "tijeras" para jugar
juegoPiedraPapelTijeras(userSelection);