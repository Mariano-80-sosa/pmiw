function Play(imgActual) {
  image(imgActual, 0, 0, 800, 450);

  if (posicion < dialogos.length) {
    let currentChara = dialogos[posicion].personaje;
    Personajes(currentChara);

    let textoActual = dialogos[posicion].texto;
    if (indice < textoActual.length) {
      indice += escritura;
      if (indice >= textoActual.length) {
        indice = textoActual.length;
        Final = true;
      }
    }
    let showtext = textoActual.substring(0, indice);
    CajaDialogo(currentChara, showtext);
  }
}

function Menu() {
  if (posY < posiY) posY += speed; 
  
  image(inicio, 0, 0, 800, 450);
  image(logo, 150, posY, 500, 200);

  if (posY >= posiY) {
    fill(255);
    textSize(25);
    textAlign(CENTER, CENTER);
    textFont(pixelfont);
    text("Comenzar", 400, 320);
    
    textSize(15);
    text("Edward Packard", 400, 380);
  }
}
