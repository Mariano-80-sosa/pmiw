function CajaDialogo(Chara, showtext) {
  if (Chara !== "") {
    strokeWeight(3);
    stroke(230, 200, 150);
    fill(0, 0, 0, 230);
    rect(40, 260, 180, 40, 8, 8, 0, 0);
    
    noStroke();
    fill(225); 
    textFont(bit);
    textSize(15);
    textAlign(LEFT, CENTER);
    
    let Caja = Chara.includes("Michael") ? "Michael" : (Chara.includes("Jane") ? "Jane" : (Chara.includes("Lena") ? "Lena" : Chara));
    text(Caja, 55, 277);
  }

  strokeWeight(3);
  stroke(230, 200, 150);
  fill(0, 0, 0, 230);
  if (Chara === "") {
    rect(40, 300, 720, 120, 10, 10, 10, 10); 
  } else {
    rect(40, 300, 720, 120, 0, 10, 10, 10); 
  }
  
  noStroke();
  fill(225); 
  textFont(bit);
  textSize(8);
  textLeading(16);
  textAlign(LEFT, TOP);
  text(showtext, 60, 320, 680, 90);
}

function Option() {
  fill(0, 0, 0, 200);
  rect(150, 150, 500, 150, 10);
  
  strokeWeight(2);
  stroke(230, 200, 150);
  
  if (mouseX > 200 && mouseX < 600 && mouseY > 170 && mouseY < 210) fill(100);
  else fill(50);
  rect(200, 170, 400, 40);
  
  if (mouseX > 200 && mouseX < 600 && mouseY > 230 && mouseY < 270) fill(100);
  else fill(50);
  rect(200, 230, 400, 40);
  
  noStroke();
  fill(255);
  textFont(bit);
  textSize(10);
  textAlign(CENTER, CENTER);
  text("Entrar a la casa", 400, 190);
  text("Quedarse afuera", 400, 250);
}

function Option2() {
  fill(0, 0, 0, 200);
  rect(150, 150, 500, 150, 10);
  
  strokeWeight(2);
  stroke(230, 200, 150);
  
  if (mouseX > 200 && mouseX < 600 && mouseY > 170 && mouseY < 210) fill(100);
  else fill(50);
  rect(200, 170, 400, 40);
  
  if (mouseX > 200 && mouseX < 600 && mouseY > 230 && mouseY < 270) fill(100);
  else fill(50);
  rect(200, 230, 400, 40);
  
  noStroke();
  fill(255);
  textFont(bit);
  textSize(10);
  textAlign(CENTER, CENTER);
  text("Derecha", 400, 190);
  text("Izquierda", 400, 250);
}

function Option3() {
  fill(0, 0, 0, 200);
  rect(150, 150, 500, 150, 10);
  
  strokeWeight(2);
  stroke(230, 200, 150);
  
  if (mouseX > 200 && mouseX < 600 && mouseY > 170 && mouseY < 210) fill(100);
  else fill(50);
  rect(200, 170, 400, 40);
  
  if (mouseX > 200 && mouseX < 600 && mouseY > 230 && mouseY < 270) fill(100);
  else fill(50);
  rect(200, 230, 400, 40);
  
  noStroke();
  fill(255);
  textFont(bit);
  textSize(10);
  textAlign(CENTER, CENTER);
  text("Tomar las llaves", 400, 190);
  text("Bajar por las escaleras", 400, 250);
}

//---> al hacer click
function mousePressed() {
  if (pantalla === "menu" && posY >= posiY) {
    if (mouseX > 300 && mouseX < 500 && mouseY > 295 && mouseY < 345) {
      pantalla = "escena1";
    }
  } 
  else if (pantalla === "escena1" && posicion >= dialogos.length) {
    if (mouseX > 200 && mouseX < 600 && mouseY > 170 && mouseY < 210) {
      pantalla = "escena2_entrar";
      dialogos = dialogosEntrar; 
      posicion = 0; 
      indice = 0; 
      Final = false;
    }
    else if (mouseX > 200 && mouseX < 600 && mouseY > 230 && mouseY < 270) {
      pantalla = "escena2_afuera";
      dialogos = dialogosAfuera; 
      posicion = 0; 
      indice = 0; 
      Final = false;
    }

  }
     else if (pantalla === "escena3" && posicion >= dialogos.length){
       if (mouseX > 200 && mouseX < 600 && mouseY > 170 && mouseY < 210) {
      pantalla = "escena4_escalera"; 
      dialogos = dialogosderecha;   
      posicion = 0; 
      indice = 0; 
      Final = false;
       }
      
       else if (mouseX > 200 && mouseX < 600 && mouseY > 230 && mouseY < 270) {
      pantalla = "escena4_pasillo";
      dialogos = dialogosizquierda; 
      posicion = 0; 
      indice = 0; 
      Final = false;
    }
  }
  
    else if (pantalla === "escena4_escalera" && posicion >= dialogos.length){
       if (mouseX > 200 && mouseX < 600 && mouseY > 170 && mouseY < 210) {
      pantalla = "escena5_escalera"; 
      dialogos = dialogosescalera;   
      posicion = 0; 
      indice = 0; 
      Final = false;
       }
      }
      
      else if (pantalla === "final_bueno") {
    if (mouseX > 300 && mouseX < 500 && mouseY > 280 && mouseY < 330) {
      pantalla = "menu";  
      dialogos = [
        { personaje: "", texto: "Han llegado las vacaciones y estás pasando unos días en la nueva casa de tus primos Michael y Jane, en Connecticut." },
        { personaje: "", texto: "Poco después de tu llegada, te llevan a dar una vuelta por la vecindad, por calles sombreadas, con casas de agradable aspecto a ambos lados. Frente a cada casa hay un rectángulo de césped bien cortado. Desde la cima de un montículo adviertes una gran casa de piedra, distinta de todas las que jamás hayas visto." },
        { personaje: "", texto: "Tiene torrecillas, terrazas con paredes y una torre cuadrada que parece una chimenea gigante. Algunas ventanas están tapiadas con tablas y otras se hallan ocultas por enredaderas y arbustos." },
        { personaje: "", texto: "Hay un perro, de considerable tamaño, encadenado ante una casucha cercana. Preguntas a tus primos si vive alguien en la casa principal." },
        { personaje: "Michael", texto: "¿En Chimney Rock? La gente de por aquí no viviría en esa casa ni por un millón de dólares." },
        { personaje: "Jane", texto: "Se la considera una casa maldita." },
        { personaje: "Jane", texto: "Se dice que quienes han entrado en ella nunca han vuelto a salir. Lo que les ha ocurrido continúa siendo un misterio." },
        { personaje: "Michael", texto: "Verás, la señora Bigley vivió en Chimney Rock sola con su gato, durante muchos años. Cuando murió, ordenó en su testamento que el gato podía vivir allí por el resto de su vida. La gente dice que la mujer echó una maldición a la casa para que nadie molestara al gato" },
        { personaje: "Tú", texto: "¿No ha investigado el lugar la policía?." },
        { personaje: "Michael", texto: "La policía jamás ha encontrado a nadie: sólo al gato" },
        { personaje: "Michaelscared", texto: "pero hay quien afirma que la señora Bigley nunca murió... ¡y que todavía vive allí!" },
        { personaje: "Tú", texto: "¿Qué dice el vigilante?" },
        { personaje: "Michael", texto: "No dice nada" },
        { personaje: "Michaelworried", texto: "Algunos dicen que está loco, otros que sólo es un pobre diablo, pero apostaría a que él también tiene miedo a la maldición, porque he oído que no pone los pies en Chimney Rock." },
        { personaje: "Tú", texto: "¿No estaréis bromeando?" },
        { personaje: "Michael", texto: "Si crees que estamos bromeando ¿por qué no entras en la casa?" }
      ];
      posicion = 0;
      indice = 0;
      Final = false;
      posY = -250; 
      
      memoriaM = "";
      memoriaJ = "";
      memoriaL = "";
      memoriaJr = "";
    }
  }
}

function keyPressed() {
  if (pantalla !== "menu" && posicion < dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      let textoActual = dialogos[posicion].texto;
      
      
      if (indice < textoActual.length) {
        indice = textoActual.length;
        Final = true;
      } 
      
      else if (Final) {
        posicion++;
        indice = 0;
        Final = false;
      }
    }
  }
  
  else if (pantalla === "escena2_entrar" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena3";
      dialogos = dialogosEntrar2;
      posicion = 0;
      indice = 0;
      Final = false;
      
      memoriaM = "";
      memoriaJ = "";
    }
  }
  
  else if (pantalla === "escena4_pasillo" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena5_comedor";
      dialogos = dialogoscomedor;
      posicion = 0;
      indice = 0;
      Final = false;
    }
  }
  
   else if (pantalla === "escena5_comedor" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena6_comedorborroso";
      dialogos = dialogosdesmayo;
      posicion = 0;
      indice = 0;
      Final = false;
      
      memoriaL = "";
    }
  }
  
   else if (pantalla === "escena6_comedorborroso" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena7_oscuro";
      dialogos = dialogosatrapado;
      posicion = 0;
      indice = 0;
      Final = false;
    }
  }
  
  else if (pantalla === "escena7_oscuro" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena8_dark";
      dialogos = dialogosdespertar;
      posicion = 0;
      indice = 0;
      Final = false;
    }
  }
  
  else if (pantalla === "escena8_dark" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena9_cocina";
      dialogos = dialogoscocina;
      posicion = 0;
      indice = 0;
      Final = false;
      
    }
  }
  
  else if (pantalla === "escena9_cocina" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena10_cocina";
      dialogos = dialogoscocina2;
      posicion = 0;
      indice = 0;
      Final = false;
      
      memoriaJr = "";
    }
  }
  
  else if (pantalla === "escena10_cocina" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena11_carbonera";
      dialogos = dialogoscarbon;
      posicion = 0;
      indice = 0;
      Final = false;
      
    }
  }
  
   else if (pantalla === "escena11_carbonera" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena12_carbonera";
      dialogos = dialogosalida;
      posicion = 0;
      indice = 0;
      Final = false;
      
    }
  }
  
  else if (pantalla === "escena12_carbonera" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena13_salida1";
      dialogos = dialogosfinal1;
      posicion = 0;
      indice = 0;
      Final = false;
    }
  }
  
  else if (pantalla === "escena13_salida1" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "final_bueno"; 
      posicion = 0;
      indice = 0;
      Final = false;
      memoriaM = "";
    }
  }
  
   else if (pantalla === "escena4_escalera" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena5_escalera";
      dialogos = dialogosescalera;
      posicion = 0;
      indice = 0;
      Final = false;
    }
  }
  
    else if (pantalla === "escena4_escalera" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena5_escalera";
      dialogos = dialogosescalera;
      posicion = 0;
      indice = 0;
      Final = false;
    }
  }
  
    else if (pantalla === "escena5_escalera" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena6_armario";
      dialogos = dialogoscuarto;
      posicion = 0;
      indice = 0;
      Final = false;
    }
  }
  
   else if (pantalla === "escena6_armario" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena7_armario";
      dialogos = dialogosarmario;
      posicion = 0;
      indice = 0;
      Final = false;
    }
  }
  
  else if (pantalla === "escena7_armario" && posicion >= dialogos.length) {
    if (keyCode === 32 || keyCode === ENTER) {
      pantalla = "escena8_huida";
      dialogos = dialogoshuida;
      posicion = 0;
      indice = 0;
      Final = false;
    }
   }
  }
