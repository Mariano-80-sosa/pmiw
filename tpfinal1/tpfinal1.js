let inicio, rain, logo, pixelfont, bit;
let escenaI, escenaII, escenaIII, escenaIV, escenaV, escenaVI;
let escenaVII, escenaVIII, escenaIX, escenaX, escenaXI, escenaXII, escenaXIII;
let posY; 
let posiY; 
let speed = 1; 

let pantalla = "menu";

let personajes = ["", "", "", "", "Michael", "Jane", "Jane", "Michael","Tú", "Michael", "Michaelscared", "Tú", "Michael","Michaelworried", "Tú", "Michael"];

let textos = 
[
  "Han llegado las vacaciones y estás pasando unos días en la nueva casa de tus primos Michael y Jane, en Connecticut.",
  "Poco después de tu llegada, te llevan a dar una vuelta por la vecindad, por calles sombreadas, con casas de agradable aspecto a ambos lados. Frente a cada casa hay un rectángulo de césped bien cortado. Desde la cima de un montículo adviertes una gran casa de piedra, distinta de todas las que jamás hayas visto.",
  "Tiene torrecillas, terrazas con paredes y una torre cuadrada que parece una chimenea gigante. Algunas ventanas están tapiadas con tablas y otras se hallan ocultas por enredaderas y arbustos.",
  "Hay un perro, de considerable tamaño, encadenado ante una casucha cercana. Preguntas a tus primos si vive alguien en la casa principal.",
  "¿En Chimney Rock? La gente de por aquí no viviría en esa casa ni por un millón de dólares.",
  "Se la considera una casa maldita.",
  "Se dice que quienes han entrado en ella nunca han vuelto a salir. Lo que les ha ocurrido continúa siendo un misterio.",
  "Verás, la señora Bigley vivió en Chimney Rock sola con su gato, durante muchos años. Cuando murió, ordenó en su testamento que el gato podía vivir allí por el resto de su vida. La gente dice que la mujer echó una maldición a la casa para que nadie molestara al gato.",
  "¿No ha investigado el lugar la policía?",
  "La policía jamás ha encontrado a nadie: sólo al gato.",
  "Pero hay quien afirma que la señora Bigley nunca murió... ¡y que todavía vive allí!",
  "¿Qué dice el vigilante?",
  "No dice nada.",
  "Algunos dicen que está loco, otros que sólo es un pobre diablo, pero apostaría a que él también tiene miedo a la maldición, porque he oído que no pone los pies en Chimney Rock.",
  "¿No estaréis bromeando?",
  "Si crees que estamos bromeando, ¿por qué no entras en la casa?"
];

let personajesEntrar = ["Tú", "Michael", "Michael", "Jane", "", ""];

let textosEntrar = [
  "Lo haré.",
  "Muy bien.",
  "¿Cuándo lo harás? Jane y yo te observaremos.",
  "Nos gustaría despedirnos de ti.",
  "Te tomas tiempo para coger una linterna de casa de tus primos, y luego los tres os dirigís hacia Chimney Rock. Estás un poco nervioso, pero hace un día espléndido y te dices a ti mismo que, en realidad, no hay nada que temer.",
  "A medida que os aproximáis a la casa, parece cada vez más inhóspita y siniestra, como si fuera una fortaleza medieval. Una nube negra pasa frente al sol. El viento te arroja polvo en los ojos. Desearías no haber accedido a entrar. Pero ahora es demasiado tarde para renunciar, de modo que, mientras Michael y Jane te observan a distancia, das la vuelta a la mansión y pruebas las puertas."
];

let personajesEntrar2 = ["", ""];

let textosEntrar2 = [
  "Todas están cerradas excepto una situada en la parte posterior del edificio. Haces un ademán con el brazo a tus primos y te adentras por un pasillo que lleva a una gran cocina, con hileras de estanterías llenas de cacharros y un enorme horno negro. El suelo está pavimentado con baldosas de un rojo oscuro, muchas de ellas rotas o faltan. Las ventanas se hallan cubiertas con cortinillas; levantas una para que entre más luz.",
  "A tu derecha hay un tramo de escalera que conduce arriba; a tu izquierda, una puerta de doble sentido, que supones lleva al comedor."
];

let personajesAfuera = [
  "Tú", "Michael", "Jane", "Jane"
];

let textosAfuera = [
  "No, gracias.",
  "Bueno, no te critico por tu decisión.",
  "Pues yo entraré en la casa, aunque los dos tengáis miedo.",
  "¡Pero con una condición! Que entréis a buscarme si no salgo al cabo de cinco minutos."
];

let personajesAfuera2 = [
  "Tú", "Michael", "Jane", "Jane", "", ""
];

let textosAfuera2 = [
  "No, gracias.",
  "Bueno, no te critico por tu decisión.",
  "Pues yo entraré en la casa, aunque los dos tengáis miedo.",
  "¡Pero con una condición! Que entréis a buscarme si no salgo al cabo de cinco minutos.",
  "Tú y Michael difícilmente podéis negaros, así que los tres emprendéis el camino que lleva a Chimney Rock. No hay señales del vigilante ni de nadie más. Dais la vuelta a la tétrica mansión, probáis todas las puertas.",
 " Tu prima encuentra una que no está cerrada. Mientras tú y Michael miráis, la joven la abre y entra en la casa."
];

let personajesRescate = [
  "", "", "Tú", "MichaelWorried", ""
];

let textosRescate = [
"Apenas Jane ha traspasado la puerta, sospechas que saldrá en cuanto hayan transcurrido los cinco minutos.",
"Sin embargo, pasan seis minutos, incluso siete. Intercambias miradas de preocupación con Michael.",
"Creo que será mejor que entremos a buscarla",
"Voy por ayuda. Quedate aquí y vigila",
"Antes de que puedas contestar, Michael marcha corriendo por el camino"
];

let personajesDerecha = [""];

let textosDerecha = [
  "Empiezas a subir por la escalera, tratas de hacer el menor ruido posible. La baranda se está cayendo a pedazos, y el polvo y las telarañas aumentan a cada escalón hasta que llegas al descansillo, escasamente iluminado por una luz amarillenta que entra por una sucia ventana circular."
];

let personajesEscalera = [""];

let textosEscalera = [
  "En el descansillo, la escalera se bifurca, pero al mismo nivel del primero hay un vestíbulo que conduce a una puerta ligeramente entreabierta, que terminas de abrir empujándola suavemente..."
];

let personajesCuarto = [""];

let textosCuarto = [
  "Da paso a un cuarto oscuro lleno de muebles viejos, baúles, una radio antigua, un gran reloj de péndulo, un caballo de juguete, algunos rollos de cuerda, montones de libros y, tendido en el polvoriento suelo, un ratón muerto; al fondo de la habitación, un gran armario."
];

let personajesArmario = ["", ""];

let textosArmario = [
  "Pasas por entre el mobiliario disperso por el cuarto y abres la puerta del armario. Huele a bolas de naftalina y está repleto de trajes, algunos muy viejos, otros más nuevos. Hay un uniforme de policía y un gran llavero con tres llaves que cuelgan de un clavo.",
  "De repente, oyes como un chirrido que te asusta. Sólo se trata de un ratón que se escurre por la habitación. Vuelves hacia la puerta. El ratón corre directamente hacia ti. Das un paso atrás, preparado para darle un puntapié, pero de improviso el animal rueda sobre un costado, muerto."
];

let personajesHuida = [""];

let textosHuida = [
  "Sales precipitadamente del cuarto para la escalera. Luego, mientras recuerdas lo que has visto, piensas en las llaves y te preguntas si pueden serte útiles."
];

let personajesCocina3 = ["", "", ""];

let textoCocina3 = [
  "Continúas bajando por la escalera. Cuando das el primer paso por la cocina, un hombre está curioseando por la ventana. Se trata de un individuo grande y pesado, de mandíbula cuadrada y ojos bizcos que le confieren un aspecto siniestro.",
  "Pasea la mirada por la habitación y acaba por fijarla en ti.",
  " Es Jervis, el vigilante. Aunque permaneces inmóvil en la sombra, estás seguro de que te ha visto. En un momento, desaparece de la ventana. Debe de dar la vuelta para alcanzar la puerta trasera"
  ];
  
  let personajesVestibulo = ["","","","","","",""];
  
  let textoVestibulo = 
  [
  "Corres a todo correr a lo largo del comedor, de la mohosa y gran biblioteca y llegas al enorme vestíbulo de la sala. ",
  "De pronto, oyes un ruido procedente del comedor.",
  "Subes de dos en dos los peldaños de la escalera principal, te paras en el zaguán del primer piso y escuchas: ¡Clap, clap, clap! Oyes pasos que se aproximan por la escalera.",
  "No obstante, cuando miras en dirección a ella, no ves a nadie subiendo.",
  "Adviertes que el corazón te late de prisa. Tal vez fue esto lo que oíste. ¿O quizá otra cosa?",
  "El espíritu del señor Bigley... Pero, ¡no existen los fantasmas!",
  "Luego oyes otra vez el ruido de pasos, que ahora viene del vestíbulo. Al otro lado, hay un gran armario de cedro. Más lejos, una puerta que se abre poco a poco..."
  ];
  
  let personajesdentroArmario = ["","","",""];
  
  let textodentroArmario =
  [
  "Te metes en el armario de cedro y cierras la puerta a medias, de modo que puedas ver a través de la rendija entre sus goznes. La puerta de la habitación se abre despacio, como si alguien saliera por ella. No ves a nadie, pero notas una fuerte corriente de aire. La puerta del armario se cierra de golpe.",
  "Te esfuerzas por abrirla; no lo consigues: has quedado encerrado.",
  "Gritas pidiendo auxilio, pero detrás de las gruesas paredes del mueble de cedro, tu voz suena como el gemido del viento.",
  "Es un armario grande, con aire suficiente para durar dos o tres horas..."
  ];
  

let personajesIzquierda = [""];

let textosIzquierda = [
  "Empujas la puerta de doble sentido y entras en un elegante comedor."
];

let personajesComedor = [
  "", "", "", "Lena", "Lena", "", ""
];

let textosComedor = [
  "Una magnífica araña de luces de cristal cuelga del techo sobre una larga mesa de roble. Ventanas salientes dobles están parcialmente cubiertas por cortinas de raso de un verde oscuro. En el aparador, una botella de vino puesta encima de una bandeja de plata, junto a ella, un gato de brillante porcelana verde.",
  "Te sientas ante la mesa y examinas la situación. Tienes a tu alcance una campanilla de bronce y, en un impulso, la agitas.",
  "Al cabo de unos momentos se abre una puerta, que no habías visto antes, y una mujer joven y delgada entra en el comedor. Lleva un vestido negro y una pequeña cofia blanca al modo de una criada.",
  "¡Oh! No sabía que hoy la señora Bigley tuviera un invitado.",
  "Soy Lena. ¿Puedo servirle algo? Quizá queso y galletas. Debe de estar hambriento.",
  "Tienes realmente apetito y das las gracias a Lena por su ofrecimiento, pero le preguntas si tiene algo más, aparte de queso y galletas. La mujer se va con una sonrisa y vuelve un momento después con algunos pastelillos de manzana de aspecto delicioso.",
  "Tomas uno y lo pruebas. Sabe mejor de lo que aparenta y no puedes resistir comértelo todo."
];

let personajesDesmayo = [""];

let textosDesmayo = [
  "Al cabo de un instante se te nubla la vista. Te sientes como si te hubieran drogado. Agitas la campanilla, pero Lena no aparece. Te levantas y te diriges a la puerta, pero notas que te caes."
];

let personajesAtrapado = [""];

let textosAtrapado = [
  "Algún tiempo más tarde vuelves en ti, te sientes débil y aturdido. Todo está oscuro como boca de lobo. Vuelves a caer dormido."
];

let personajesDespertar = [""];

let textosDespertar = [
  "Cuando te despiertas, la casa está más oscura que el día anterior. Fuera llueve. Tienes prisa por salir al exterior."
];

let personajesCocina = [
  "", "Jervis", "Tú", "", "Jervis", "Tú", "Jervis",
  "Tú", "Jervis", "", "Tú", "Jervis"
];

let textosCocina = [
  "Corres hacia la puerta de la cocina. La abres de un tirón y la hallas bloqueada por la enorme figura de Jervis, el vigilante.",
  "Eres valiente, por haber entrado aquí.",
  "Me parece que alguien me ha drogado.",
  "Jervis lanza una risotada amenazadora.",
  "¿Drogado dices? Tendrías suerte si eso fuera todo...",
  "¿Qué quieres decir?",
  "No te han drogado, estás poseído... poseído por el gato demonio. Tu única oportunidad es mirar al gato de hito en hito hasta que ceda a tu mirada, o quedarás maldito para siempre.",
  "¿Por qué he de creerme esa historia?",
  "¿Acaso no te das cuenta?... (aproximándose hacia ti) Yo también estoy maldito. ¡La criada a la que viste... también está maldita!",
  "El hombretón habla con tanta seriedad que empiezas a pensar que tal vez haya algo de cierto en lo que dice.",
  "¿Tienes alguna idea de dónde está el gato?",
  "El gato vive en el ala norte de la casa. Ve a la cocina y sigue el pasillo que encontrarás a tu derecha, síguelo hasta el final y llegarás a una habitación. Allí es donde suele estar."
];

let personajesCocina2 = [""];

let textosCocina2 = [
  "Cumples las instrucciones del guardián, pero, cuando avanzas por el pasillo, pisas una tabla del suelo que cede. Tratas de agarrarte a algo, pero notas que caes en el vacío."
];

let personajesCarbon = ["", "", "", ""];

let textosCarbon = [
  "Un segundo después, das, con un golpe seco, contra una superficie dura y combada. Te has lastimado y estás magullado, y cubierto de hollín. ¡Has caído en una carbonera! Oyes cómo a lo lejos Jervis se ríe a carcajadas.",
  "Permaneces quieto en la carbonera; tratas de pensar en algún modo de salir de ella.",
  "De vez en cuando das gritos de socorro.",
  "Finalmente, escuchas una voz de respuesta que casi suena junto a ti y, al mismo tiempo, muy distante."
];

let personajesSalida = ["", "Tú", ""];

let textosSalida = [
  "Andas a tientas y tocas una superficie metálica: es el extremo de un conducto para el carbón.",
  "¡Socorro!",
  "Al momento te contesta una voz. ¡Es tu primo Michael! Te agarras bien al tubo para el carbón y te introduces en él; puedes subir."
];

let personajesFinal1 = [
  "", "MichaelNoSprite", "Tú", "Tú"
];

let textosFinal1 = [
  "Al final de éste hay una delgada puerta de madera. La abres de un empujón y sales a un camino fuera de la mansión.",
  "¡Me alegro de que no seas un fantasma!",
  "Yo también me alegro...",
  "Aparte de eso, no tengo la intención de volver a Chimney Rock... ¡Nunca jamás!"
];


let posicion = 0;
let indice = 0;
let escritura = 2; 
let nextText = "";
let Final = false;

let sprites = {};
let memoriaM = ""; 
let memoriaJ = "";
let memoriaL = "";
let memoriaJr = "";

function preload() {
  logo = loadImage("./imag/logo.png");
  inicio = loadImage("./imag/creditos.png");
  pixelfont = loadFont("./imag/pixeled/Pixeled.ttf");
  bit = loadFont("./imag/dogica.ttf");
  escenaI = loadImage ("./imag/patio.png");
  escenaII = loadImage ("./imag/interiorcasa.png");
  escenaIII = loadImage ("./imag/escaleras2.png");
  escenaIV = loadImage ("./imag/cuarto.png");
  escenaV = loadImage ("./imag/armario.png");
  escenaVI = loadImage ("./imag/comedor.png");
  escenaVII = loadImage ("./imag/comedorborroso.png");
  escenaVIII = loadImage ("./imag/oscuro.png");
  escenaIX = loadImage ("./imag/dark.png");
  escenaX = loadImage ("./imag/cocina.png");
  escenaXI = loadImage ("./imag/caidacarbonera.png");
  escenaXII = loadImage ("./imag/salidacarbonera.png");
  escenaXIII = loadImage ("./imag/final1.png");
  escenaXIV = loadImage ("./imag/pasillo.png");
  
  sprites["Michael"] = loadImage("./imag/michaelhapi.png");
  sprites["Michaelworried"] = loadImage("./imag/michaelpreo.png");
  sprites["Michaelscared"] = loadImage("./imag/michaelasus.png");
  sprites["Jane"] = loadImage("./imag/janefeli.png");
  sprites["Janescared"] = loadImage("./imag/janeasus.png");
  sprites["Lena"] = loadImage("./imag/lena.png");
  sprites["Jervis"] = loadImage("./imag/Jervis.png");
}

function setup() {
  createCanvas(800, 450);
  posY = -250; 
  posiY = -5; 
}

 function draw() {
  background(0);

  if (pantalla === "menu") {
    Menu();

  } else if (pantalla === "escena1") {
   image(escenaI, 0, 0, 800, 450);

if (personajes[posicion] === "Michaelscared") {
  
  image(sprites["Michaelscared"], 500, 50, 250, 500);
  
} else if (personajes[posicion] === "Michaelworried") {
  image(sprites["Michaelworried"], 500, 50, 250, 500);
  
} else { image(sprites["Michael"], 500, 50, 250, 500);
}

image(sprites["Jane"], 50, 50, 250, 500);

  if (posicion < textos.length) {
    let personajeActual = personajes[posicion];
    let textoActual = textos[posicion];

    if (indice < textoActual.length) {
      indice += escritura;

      if (indice >= textoActual.length) {
        indice = textoActual.length;
        Final = true;
      }
    }

    CajaDialogo(personajeActual, textoActual.substring(0, indice));
  }

  if (posicion >= textos.length) {
    Option();
  }


  } else if (pantalla === "escena2_entrar") {
    image(escenaI, 0, 0, 800, 450);
    
   image(sprites["Michael"], 500, 50, 250, 500);
   image(sprites["Jane"], 50, 50, 250, 500);

    if (posicion < textosEntrar.length) {
      let personajeActual = personajesEntrar[posicion];
      let textoActual = textosEntrar[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena2_afuera") {
    image(escenaI, 0, 0, 800, 450);
    
    image(sprites["Michael"], 500, 50, 250, 500);
    image(sprites["Jane"], 50, 50, 250, 500);

    if (posicion < textosAfuera.length) {
      let personajeActual = personajesAfuera[posicion];
      let textoActual = textosAfuera[posicion];
      
      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

 } else if (pantalla === "escena3") {
  // Cocina: elegir dirección
  image(escenaII, 0, 0, 800, 450);

  if (posicion < textosEntrar2.length) {
    let personajeActual = personajesEntrar2[posicion];
    let textoActual = textosEntrar2[posicion];

    if (indice < textoActual.length) {
      indice += escritura;

      if (indice >= textoActual.length) {
        indice = textoActual.length;
        Final = true;
      }
    }

    CajaDialogo(
      personajeActual,
      textoActual.substring(0, indice)
    );
  }

  if (posicion >= textosEntrar2.length) {
    Option2();
  }

} else if (pantalla === "escena4_escalera") {
  // Subiendo por la escalera
  image(escenaIII, 0, 0, 800, 450);

  if (posicion < textosDerecha.length) {
    let personajeActual = personajesDerecha[posicion];
    let textoActual = textosDerecha[posicion];

    if (indice < textoActual.length) {
      indice += escritura;

      if (indice >= textoActual.length) {
        indice = textoActual.length;
        Final = true;
      }
    }

    CajaDialogo(
      personajeActual,
      textoActual.substring(0, indice)
    );
  }

} else if (pantalla === "escena5_escalera") {
  // Llegada al descansillo y puerta entreabierta
  image(escenaIII, 0, 0, 800, 450);

  if (posicion < textosEscalera.length) {
    let personajeActual = personajesEscalera[posicion];
    let textoActual = textosEscalera[posicion];

    if (indice < textoActual.length) {
      indice += escritura;

      if (indice >= textoActual.length) {
        indice = textoActual.length;
        Final = true;
      }
    }

   CajaDialogo(
      personajeActual,
      textoActual.substring(0, indice)
    );
  }

} else if (pantalla === "escena4_pasillo") {
    image(escenaII, 0, 0, 800, 450);

    if (posicion < textosIzquierda.length) {
      let personajeActual = personajesIzquierda[posicion];
      let textoActual = textosIzquierda[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena5_comedor") {
    image(escenaVI, 0, 0, 800, 450);

    if (posicion < textosComedor.length) {
      let personajeActual = personajesComedor[posicion];
      let textoActual = textosComedor[posicion];

      if (personajeActual === "Lena") {
        image(sprites["Lena"], 500, 50, 310, 500);
      }

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena6_comedorborroso") {
    image(escenaVII, 0, 0, 800, 450);

    if (posicion < textosDesmayo.length) {
      let personajeActual = personajesDesmayo[posicion];
      let textoActual = textosDesmayo[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena7_oscuro") {
    image(escenaVIII, 0, 0, 800, 450);

    if (posicion < textosAtrapado.length) {
      let personajeActual = personajesAtrapado[posicion];
      let textoActual = textosAtrapado[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena8_dark") {
    image(escenaIX, 0, 0, 800, 450);

    if (posicion < textosDespertar.length) {
      let personajeActual = personajesDespertar[posicion];
      let textoActual = textosDespertar[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena9_cocina") {
    image(escenaX, 0, 0, 800, 450);
     image(sprites["Jervis"], 300, 50, 310, 500);

    if (posicion < textosCocina.length) {
      let personajeActual = personajesCocina[posicion];
      let textoActual = textosCocina[posicion];


      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena10_cocina") {
    image(escenaX, 0, 0, 800, 450);

    if (posicion < textosCocina2.length) {
      let personajeActual = personajesCocina2[posicion];
      let textoActual = textosCocina2[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena11_carbonera") {
    image(escenaXI, 0, 0, 800, 450);

    if (posicion < textosCarbon.length) {
      let personajeActual = personajesCarbon[posicion];
      let textoActual = textosCarbon[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena12_carbonera") {
    image(escenaXII, 0, 0, 800, 450);

    if (posicion < textosSalida.length) {
      let personajeActual = personajesSalida[posicion];
      let textoActual = textosSalida[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena13_salida1") {
    image(escenaXIII, 0, 0, 800, 450);

    if (posicion < textosFinal1.length) {
      let personajeActual = personajesFinal1[posicion];
      let textoActual = textosFinal1[posicion];

      if (personajeActual === "MichaelNoSprite") {

      } else if (personajeActual === "Tú") {
      }

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

    if (posicion >= textosFinal1.length) {
      pantalla = "final_bueno";
    }

  } else if (pantalla === "escena5_escalera") {
    image(escenaIII, 0, 0, 800, 450);

    if (posicion < textosEscalera.length) {
      let personajeActual = personajesEscalera[posicion];
      let textoActual = textosEscalera[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena6_armario") {
    image(escenaIV, 0, 0, 800, 450);

    if (posicion < textosCuarto.length) {
      let personajeActual = personajesCuarto[posicion];
      let textoActual = textosCuarto[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena7_armario") {
    image(escenaV, 0, 0, 800, 450);

    if (posicion < textosArmario.length) {
      let personajeActual = personajesArmario[posicion];
      let textoActual = textosArmario[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }

  } else if (pantalla === "escena8_huida") {
    image(escenaIV, 0, 0, 800, 450);

    if (posicion < textosHuida.length) {
      let personajeActual = personajesHuida[posicion];
      let textoActual = textosHuida[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }
    
     } else if (pantalla === "escena9_Cocinaabajo") {
     image(escenaX, 0, 0, 800, 450);

    if (posicion < textoCocina3.length) {
      let personajeActual = personajesCocina3[posicion];
      let textoActual = textoCocina3[posicion];

      if (indice < textoActual.length) {
        indice += escritura;
        if (indice >= textoActual.length) {
          indice = textoActual.length;
          Final = true;
        }
      }

      CajaDialogo(personajeActual, textoActual.substring(0, indice));
    }
    
   } else if (pantalla === "escena10_vestibulo") {
  image(escenaXIV, 0, 0, 800, 450);

  if (posicion < textoVestibulo.length) {
    let personajeActual = personajesVestibulo[posicion];
    let textoActual = textoVestibulo[posicion];

    if (indice < textoActual.length) {
      indice += escritura;

      if (indice >= textoActual.length) {
        indice = textoActual.length;
        Final = true;
      }
    }

    CajaDialogo(
      personajeActual,
      textoActual.substring(0, indice)
    );
  }


  if (posicion >= textoVestibulo.length) {
    Option3();
  }

  
      } else if (pantalla === "escena11_armariocedro") {

  if (posicion < textodentroArmario.length) {
    let personajeActual = personajesdentroArmario[posicion];
    let textoActual = textodentroArmario[posicion];

    if (indice < textoActual.length) {
      indice += escritura;

      if (indice >= textoActual.length) {
        indice = textoActual.length;
        Final = true;
      }
    }

    CajaDialogo(
      personajeActual,
      textoActual.substring(0, indice)
    );
  }

  if (posicion >= textodentroArmario.length) {

  }

} else if (pantalla === "final_armario") {
  background(0);

  fill(255, 215, 0);
  textSize(30);
  textAlign(CENTER, CENTER);
  textFont(pixelfont);
  text("Fin", 400, 150);

  fill(255);
  textSize(14);
  textFont(bit);
  text(
    "Te quedas encerrado en el armario. No sabes por cuánto tiempo.",
    400, 210
  );

  strokeWeight(2);
  stroke(230, 200, 150);

  if (mouseX > 300 && mouseX < 500 &&
      mouseY > 280 && mouseY < 330) {
    fill(100);
  } else {
    fill(50);
  }

  rect(300, 280, 200, 50, 8);

  noStroke();
  fill(255);
  textSize(12);
  text("Volver al inicio", 400, 305);

} else if (pantalla === "final_bueno") {
  image(escenaXIII, 0, 0, 800, 450);

  fill(255, 215, 0);
  textSize(30);
  textAlign(CENTER, CENTER);
  textFont(pixelfont);
  text("¡Final Bueno!", 400, 150);

  fill(255);
  textSize(14);
  textFont(bit);
  text("Saliste de Chimney Rock", 400, 210);

  strokeWeight(2);
  stroke(230, 200, 150);

  if (mouseX > 300 && mouseX < 500 &&
      mouseY > 280 && mouseY < 330) {
    fill(100);
  } else {
    fill(50);
  }

  rect(300, 280, 200, 50, 8);

  noStroke();
  fill(255);
  textSize(12);
  text("Volver al inicio", 400, 305);
}
}

 function Menu() {
  if (posY < posiY) {
    posY += speed;
  }

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

    let Caja = Chara.includes("Michael") ? "Michael" : Chara.includes("Jane") ? "Jane" : Chara.includes("Lena") ? "Lena" : Chara.includes("Jervis") ? "Jervis" : Chara;

    text(Caja, 55, 277);
  }

  strokeWeight(3);
  stroke(230, 200, 150);
  fill(0, 0, 0, 230);

  if (Chara === "") {
    rect(40, 300, 720, 120, 10);
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

  fill(mouseX > 200 && mouseX < 600 && mouseY > 170 && mouseY < 210 ? 100 : 50);
  rect(200, 170, 400, 40);

  fill(mouseX > 200 && mouseX < 600 && mouseY > 230 && mouseY < 270 ? 100 : 50);
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

  fill(mouseX > 200 && mouseX < 600 && mouseY > 170 && mouseY < 210 ? 100 : 50);
  rect(200, 170, 400, 40);

  fill(mouseX > 200 && mouseX < 600 && mouseY > 230 && mouseY < 270 ? 100 : 50);
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

  fill(mouseX > 200 && mouseX < 600 && mouseY > 170 && mouseY < 210 ? 100 : 50);
  rect(200, 170, 400, 40);

  fill(mouseX > 200 && mouseX < 600 && mouseY > 230 && mouseY < 270 ? 100 : 50);
  rect(200, 230, 400, 40);

  noStroke();
  fill(255);
  textFont(bit);
  textSize(10);
  textAlign(CENTER, CENTER);
  text("Ir al armario de cedro", 400, 190);
  text("Ir hacia la puerta", 400, 250);
}

//---> al hacer click

function mousePressed() {
  if (pantalla === "menu") {
    if (
      posY >= posiY &&
      mouseX > 300 && mouseX < 500 &&
      mouseY > 295 && mouseY < 345
    ) {
      pantalla = "escena1";
      posicion = 0;
      indice = 0;
      Final = false;
    }
    return;
  }

  if (
    pantalla === "escena1" &&
    posicion >= textos.length
  ) {
    if (mouseX > 200 && mouseX < 600 &&
        mouseY > 170 && mouseY < 210) {
      pantalla = "escena2_entrar";
    } else if (mouseX > 200 && mouseX < 600 &&
               mouseY > 230 && mouseY < 270) {
      pantalla = "escena2_afuera";
    } else {
      return;
    }
  } else if (
    pantalla === "escena3" &&
    posicion >= textosEntrar2.length
  ) {
    if (mouseX > 200 && mouseX < 600 &&
        mouseY > 170 && mouseY < 210) {
      pantalla = "escena4_escalera";
    } else if (mouseX > 200 && mouseX < 600 &&
               mouseY > 230 && mouseY < 270) {
      pantalla = "escena4_pasillo";
    } else {
      return;
    }
  } else if (
    pantalla === "escena8_huida" &&
    posicion >= textosHuida.length
  ) {
    if (mouseX > 200 && mouseX < 600 &&
        mouseY > 170 && mouseY < 210) {
      pantalla = "escena9_cocina";
    } else if (mouseX > 200 && mouseX < 600 &&
               mouseY > 230 && mouseY < 270) {
      pantalla = "escena9_cocina";
    } else {
      return;
    }
  } else if (
    pantalla === "escena10_vestibulo" &&
    posicion >= textoVestibulo.length
  ) {
    if (mouseX > 200 && mouseX < 600 &&
        mouseY > 170 && mouseY < 210) {
      pantalla = "escena11_armariocedro";
    } else if (mouseX > 200 && mouseX < 600 &&
               mouseY > 230 && mouseY < 270) {
      pantalla = "final_bueno";
    } else {
      return;
    }
  } else if (
    pantalla === "final_bueno" ||
    pantalla === "final_armario"
  ) {
    if (mouseX > 300 && mouseX < 500 &&
        mouseY > 280 && mouseY < 330) {
      pantalla = "menu";
      posicion = 0;
      indice = 0;
      Final = false;
      posY = -250;
    }
    return;
  } else {
    return;
  }

  posicion = 0;
  indice = 0;
  Final = false;
}


function keyPressed() {
  if (keyCode !== 32 && keyCode !== ENTER) {
    return;
  }

  if (pantalla === "menu" || pantalla === "final_bueno") {
    return;
  }
  
   let textosActuales = [];

  if (pantalla === "escena1") {
    textosActuales = textos;
  } else if (pantalla === "escena2_entrar") {
    textosActuales = textosEntrar;
  } else if (pantalla === "escena2_afuera") {
    textosActuales = textosAfuera;
  } else if (pantalla === "escena3") {
    textosActuales = textosEntrar2;
  } else if (pantalla === "escena4_escalera") {
    textosActuales = textosDerecha;
  } else if (pantalla === "escena4_pasillo") {
    textosActuales = textosIzquierda;
  } else if (pantalla === "escena5_comedor") {
    textosActuales = textosComedor;
  } else if (pantalla === "escena6_comedorborroso") {
    textosActuales = textosDesmayo;
  } else if (pantalla === "escena7_oscuro") {
    textosActuales = textosAtrapado;
  } else if (pantalla === "escena8_dark") {
    textosActuales = textosDespertar;
  } else if (pantalla === "escena9_cocina") {
    textosActuales = textosCocina;
  } else if (pantalla === "escena10_cocina") {
    textosActuales = textosCocina2;
  } else if (pantalla === "escena11_carbonera") {
    textosActuales = textosCarbon;
  } else if (pantalla === "escena12_carbonera") {
    textosActuales = textosSalida;
  } else if (pantalla === "escena13_salida1") {
    textosActuales = textosFinal1;
  } else if (pantalla === "escena5_escalera") {
    textosActuales = textosEscalera;
  } else if (pantalla === "escena6_armario") {
    textosActuales = textosCuarto;
  } else if (pantalla === "escena7_armario") {
    textosActuales = textosArmario;
  } else if (pantalla === "escena8_huida") {
    textosActuales = textosHuida;
 } else if (pantalla === "escena9_Cocinaabajo") {
  textosActuales = textoCocina3;
  } else if (pantalla === "escena10_vestibulo") {
  textosActuales = textoVestibulo;
  } else if (pantalla === "escena11_armariocedro") {
 textosActuales = textodentroArmario;

}

  if (posicion < textosActuales.length) {
    let textoActual = textosActuales[posicion];

    if (indice < textoActual.length) {
      indice = textoActual.length;
      Final = true;
    } else {
      posicion++;
      indice = 0;
      Final = false;
    }

    return;
  }
  
if (pantalla === "escena2_entrar" ||
    pantalla === "escena2_afuera") {
  pantalla = "escena3";

} else if (pantalla === "escena4_escalera") {
  pantalla = "escena5_escalera";

} else if (pantalla === "escena4_pasillo") {
  pantalla = "escena5_comedor";

} else if (pantalla === "escena5_escalera") {
  pantalla = "escena6_armario";

} else if (pantalla === "escena5_comedor") {
  pantalla = "escena6_comedorborroso";

} else if (pantalla === "escena6_comedorborroso") {
  pantalla = "escena7_oscuro";

} else if (pantalla === "escena7_oscuro") {
  pantalla = "escena8_dark";

} else if (pantalla === "escena8_dark") {
  pantalla = "escena9_cocina";

} else if (pantalla === "escena9_cocina") {
  pantalla = "escena10_cocina";

} else if (pantalla === "escena10_cocina") {
  pantalla = "escena11_carbonera";

} else if (pantalla === "escena11_carbonera") {
  pantalla = "escena12_carbonera";

} else if (pantalla === "escena12_carbonera") {
  pantalla = "escena13_salida1";

} else if (pantalla === "escena6_armario") {
  pantalla = "escena7_armario";

} else if (pantalla === "escena7_armario") {
  pantalla = "escena8_huida";
  
} else if (pantalla === "escena8_huida") {
  pantalla = "escena9_Cocinaabajo";  
  
} else if (pantalla === "escena9_Cocinaabajo") {
  pantalla = "escena10_vestibulo";
  
} else if (pantalla === "escena10_vestibulo") {
  return;
  
  } else if (pantalla === "escena11_armariocedro") {
  pantalla = "final_armario";
  posicion = 0;
}

posicion = 0;
indice = 0;
Final = false;

}
