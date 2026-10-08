let inicio, rain, logo, pixelfont, escenaI, escenaII, escenaIII, escenaIV, escenaV, escenaVI, escenaVII,escenaVIII, escenaIX, escenaX;
let posY; 
let posiY; 
let speed = 1; 

let pantalla = "menu";

let dialogos = 
[
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
  
let dialogosEntrar = [
  { personaje: "Tú", texto: "Lo haré" },
  { personaje: "Michael", texto: "Muy bien" },
  { personaje: "Michael", texto: "¿Cuando lo haras? Jane y yo te observaremos" },
  { personaje: "Jane", texto: "Nos gustaria despedirnos de tí" },
  { personaje: "", texto: "Te tomas tiempo para coger una linterna de casa de tus primos, y luego los tres os dirigis hacia Chimney Rock. Estas un poco nervioso, pero hace un dia esplendido y te dices a ti mismo que, en realidad, no hay nada que temer" },
  { personaje: "", texto: "A medida que os aproximáis a la casa, parececada vez más inhóspita y siniestra, como si fuerauna fortaleza medieval. Una nube negra pasafrente al sol. El viento te arroja polvo en los ojos. Desearías no haber accedido a entrar. Pero ahora es demasiado tarde para renunciar,de modo que, mientras Michael y Jane te observan van a distancia, das la vuelta a la mansion y pruebas las puertas."}
];

let dialogosEntrar2 = [
  { personaje: "", texto: "Todas están cerradas excepto una situada en la parte posterior del edificio. Haces un ademán con el brazo a tus primos y te adentras por un pasillo que lleva a una gran cocina, con hileras de estanterías llenas de cacharros y un enorme horno negro. El suelo está pavimentado con baldosas de un rojo oscuro, muchas de ellas rotas o faltan. Las ventanas se hallan cubiertas con cortinillas; levantas una para que entre más luz."},
  { personaje: "", texto: "A tu derecha hay un tramo de escalera que conduce arriba; a tu izquierda, una puerta de doble sentido, que supones lleva al comedor."}
];

let dialogosAfuera = [
  { personaje: "Tú", texto: "No, gracias." },
  { personaje: "Michael", texto: "Bueno, no te critico por tu decisión." },
  { personaje: "Jane", texto: "Pues yo entraré en la casa, aunque los dos tengáis miedo." },
  { personaje: "Jane", texto: "¡pero con una condición! Que entréis a buscarme si no salgo al cabo de cinco minutos." }
];

let dialogosderecha = [
  { personaje: "", texto: "Empiezas a subir por la escalera, tratas de hacer el menor ruido posible. La baranda se está cayendo a pedazos, y el polvo y las telarañas Aumentan a cada escalón hasta que llegas al descansillo, escasamente iluminado por una luz amarillenta que entra por una sucia ventana circular" }
  
  ];

let dialogosescalera = [
  { personaje: "", texto: "En el descansillo, la escalera se bifurca, pero al mismo nivel del primero hay un vestíbulo que conduce a una puerta ligeramente entreabierta, que terminas de abrir empujándola suavemente..." }
];

let dialogoscuarto = 
[
  { personaje: "", texto: "Da paso a un cuarto oscuro lleno de muebles viejos, baúles, una radio antigua, un gran reloj de péndulo, un caballo de juguete, algunos rollos de cuerda, montones de libros y, tendido en el polvoriento suelo, un ratón muerto; al fondo de la habitación, un gran armario."}
];

let dialogosarmario =
[
  { personaje: "", texto: "Pasas por entre el mobiliario disperso por el cuarto y abres la puerta del armario. Huele a bolas de naftalina y está repleto de trajes, algunos muy viejos, otros más nuevos. Hay un uniforme de policía y un gran llavero con tres llaves que cuelgan de un clavo."},
  { personaje: "", texto: "De repente, oyes como un chirrido que te asusta. Sólo se trata de un ratón que se escurre por la habitación. Vuelves hacia la puerta. El ratón corre directamente hacia ti. Das un paso atrás, preparado para darle un puntapié, pero de improviso el animal rueda sobre un costado, muerto."}
];

let dialogoshuida =
[
{ personaje: "", texto: "Sales precipitadamente del cuarto para la escalera. Luego, mientras recuerdas lo que has visto, piensas en las llaves y te preguntas si pueden serte útiles."}
];

let dialogosizquierda = [
  { personaje: "", texto: "Empujas la puerta de doble sentido y entras en un elegante comedor" }
];

let dialogoscomedor = [
  { personaje: "", texto: "Una magnífica araña de luces de cristal cuelga del techo sobre una larga mesa de roble. Ventanas salientes dobles están parcialmente cubiertas por cortinas de raso de un verde oscuro. En el aparador, una botella de vino puesta encima de una bandeja de plata, junto a ella, un gato de brillante porcelana verde." },
  { personaje: "", texto: "Te sientas ante la mesa y examinas la situación. Tienes a tu alcance una campanilla de bronce y, en un impulso, la agitas." },
  { personaje: "", texto: "Al cabo de unos momentos se abre una puerta, que no habías visto antes, y una mujer joven y delgada entra en el comedor. Lleva un vestido negro y una pequeña cofia blanca al modo de una criada" },
  { personaje: "Lena", texto: "Oh! no sabia que hoy la señora Bigley tuviera un invitado." },
  { personaje: "Lena", texto: "Soy Lena. ¿Puedo servirle algo? Quizá queso y galletas. Debe de estar hambriento." },
  { personaje: "", texto: "Tienes realmente apetito y das las gracias a Lena por su ofrecimiento, pero le preguntas si tiene algo más, aparte queso y galletas. La mujer se va con una sonrisa y vuelve un momento después con algunos pastelillos de manzana de aspecto delicioso." },
  { personaje: "", texto: "Tomas uno y lo pruebas. Sabe mejor de lo que aparenta y no puedes resistir comértelo todo." }
];

let dialogosdesmayo =
[
  { personaje: "", texto: "Al cabo de un instante se te nubla la vista. Te sientes como si te hubieran drogado. Agitas la campanilla, pero Lena no aparece. Te levantas y te diriges a la puerta, pero notas que te caes" }
];

let dialogosatrapado =
[
  { personaje: "", texto: "Algún tiempo más tarde vuelves en ti, te sientes débil y aturdido. Todo está oscuro como boca de lobo. Vuelves a caer dormido." }
];

let dialogosdespertar =
[
  { personaje: "", texto: "Cuando te despiertas, la casa está más oscura que el día anterior. Fuera llueve. Tienes prisa por salir al exterior." }
];

let dialogoscocina =
[
  { personaje: "", texto: "Corres hacia la puerta de la cocina. La abres de un tirón y la hallas bloqueada por la enorme figura de Jervis, el vigilante" },
  { personaje: "Jervis", texto: "Eres valiente, por haber entrado aqui" },
  { personaje: "Tú", texto: "Me parece que alguien me ha drogado"},
  { personaje: "", texto: "Jervis lanza una risotada amenazadora" },
  { personaje: "Jervis", texto: "¿Drogrado dices? tendrias suerte si eso fuera todo..." },
  { personaje: "Tú", texto: "¿Qué quieres decir?"},
  { personaje: "Jervis", texto: "No te han drogado, estas poseido...poseido por el gato demonio. Tu única oportunidad es mirar al gato de hito en hito hasta que ceda a tu mirada, o quedaras maldito para siempre." },
  { personaje: "Tú", texto: "¿Por qué he de creerme esa historia?"},
  { personaje: "Jervis", texto: "¿Acaso no te das cuenta?...(aproximandose hacia a ti) Yo también estoy maldito.La criada a la que viste...¡también esta maldita!" },
  { personaje: "", texto: "El hombretón habla con tanta seriedad que empiezas a pensar que talvez haya algo de cierto en lo que dice" },
  { personaje: "Tú", texto: "¿Tienes alguna idea de donde esta el gato?"},
  { personaje: "Jervis", texto: "El gato vive en el ala norte de la casa. Ve a la cocina y sigue el pasillo que encontrarás a tu derecha, siguelo hasta el final y llegaras a una habitación. Allí es donde suele estar." }
];

let dialogoscocina2 =
[
{ personaje: "", texto: "Cumples las instrucciones del guardián, pero, cuando avanzas por el pasillo, pisas una tabla del suelo que cede. Tratas de agarrarte a algo, pero notas que caes en el vacío."} 
];

let dialogoscarbon =
[
{ personaje: "", texto: "Un segundo después, das, con un golpe seco, contra una superficie dura y combada. Te has lastimado y estás magullado, y cubierto de hollín. ¡Has caído en una carbonera! Oyes cómo a lo lejos Jervis se ríe a carcajadas" },
{ personaje: "", texto: "Permaneces quieto en la carbonera; tratas de pensar en algún modo de salir de ella." },
{ personaje: "", texto: "De vez en cuando das gritos de socorro." },
{ personaje: "", texto: "Finalmente, escuchas una voz de respuesta que casi suena junto a ti y, al mismo tiempo, muy distante." }
];

let dialogosalida =
[
{ personaje: "", texto: "Andas a tientas y tocas una superficie metálica: es el extremo de un conducto para el carbón." },
{ personaje: "Tú", texto: "¡Socorro!"},
{ personaje: "", texto: "Al momento te contesta una voz.¡Es tu primo Michael! Te agarras bien al tubo para el carbón y te introduces en él; puedes subir."}
];

let dialogosfinal1 =
[
{ personaje: "", texto: "Al final de éste hay una delgada puerta de madera. La abres de un empujón y sales a un camino fuera de la mansión."},
{ personaje: "MichaelNoSprite", texto: "¡Me alegro de que no seas un fantasma!"},
{ personaje: "Tú", texto: "Yo también me alegro..."},
{ personaje: "Tú", texto: "Aparte de eso, no tengo la intención de volver a Chimney Rock...¡Nunca jamas!"}
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
    Play(escenaI); 
    
    if (posicion >= dialogos.length) {
      Option();
    } 
    
   } else if (pantalla === "escena2_entrar") {
   Play(escenaI); 
   } else if (pantalla === "escena2_afuera") {
   Play(escenaI);
   } else if (pantalla === "escena3") {
    Play(escenaII); 
    if (posicion >= dialogos.length) {
      Option2(); 
      }
    } else if (pantalla === "escena4_escalera") {
    Play(escenaII); 
    } else if (pantalla === "escena4_pasillo") {
    Play(escenaII);
     } else if (pantalla === "escena5_comedor") {
    Play(escenaVI); 
    } else if (pantalla === "escena6_comedorborroso") {
    Play(escenaVII); 
    } else if (pantalla === "escena7_oscuro") {
     Play(escenaVIII);
    } else if (pantalla === "escena8_dark") {
    Play(escenaIX);
     } else if (pantalla === "escena9_cocina") {
    Play(escenaX);
    } else if (pantalla === "escena10_cocina") {
    Play(escenaX);
    } else if (pantalla === "escena11_carbonera") {
    Play(escenaXI);
     } else if (pantalla === "escena12_carbonera") {
    Play(escenaXII);
     } else if (pantalla === "escena13_salida1") {
    Play(escenaXIII);
    if (posicion >= dialogosfinal1.length) {
        pantalla = "final_bueno";
      }
    } else if (pantalla === "final_bueno") {
      Play(escenaXIII);
      
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
      if (mouseX > 300 && mouseX < 500 && mouseY > 280 && mouseY < 330) {
        fill(100);
      } else {
        fill(50);
      }
      rect(300, 280, 200, 50, 8);
      
      noStroke();
      fill(255);
      textSize(12);
      text("Volver al inicio", 400, 305);
      
    } else if (pantalla === "escena5_escalera") {
    Play(escenaIII); 
    } else if (pantalla === "escena6_armario") {
    Play(escenaIV);
    } else if (pantalla === "escena7_armario") {
    Play(escenaV);
    } else if (pantalla === "escena8_huida") {
    Play(escenaIV);
    if (posicion >= dialogos.length) {
      Option3(); 
      }
  }
}

function Personajes(Chara) {
  if (Chara === "MichaelNoSprite") {
    memoriaM = "";
  } else if (Chara.includes("Michael")) {
    memoriaM = Chara;}
  else if (Chara.includes("Jane")) memoriaJ = Chara;
  else if (Chara.includes("Lena")) memoriaL = Chara;
  else if (Chara.includes("Jervis")) memoriaJr = Chara;

  if (memoriaJ !== "" && sprites[memoriaJ]) {
    image(sprites[memoriaJ], 50, 50, 250, 500); 
  }
  if (memoriaM !== "" && sprites[memoriaM]) {
    image(sprites[memoriaM], 500, 50, 250, 500); 
  }
  if (memoriaL !== "" && sprites[memoriaL]) {
    image(sprites[memoriaL], 500, 50, 310, 500); 
  }
  if (memoriaJr !== "" && sprites[memoriaJr]) {
    image(sprites[memoriaJr], 400, 50, 350, 500); 
  }
}
