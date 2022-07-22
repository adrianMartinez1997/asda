const { Products } = require("../src/db");
const productMockUp = async () => {
  try {
    // ******************************************BEAUTY***************************
    await Products.create({
      name: "Limpiador facial",
      price: 300,
      image_url: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376664/beaty/acne/4_2_kygt2x.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376664/beaty/acne/4_1_tc2czi.png",
      ],
      description:
        "LIMPIEZA PROFUNDA\
      MODO LUZ ROJA\
      LA PIEL SENSIBLE CON TECNOLOGÍA DE LUZ ROJA\
      TAMBIÉN PUEDE ESTAR SEGURO DE USAR\
      MODO LUZ AZUL\
      REFINAR LOS POROS MEJORAR EL ACNÉ\
      MEJORA LOS OJOS\
      CUIDADO DE OJOS\
      TECNOLOGÍA DE SENSOR DE TEMPERATURA\
      ESENCIA DE COLOCACIÓN PROMUEVE LA ABSORCIÓN\
      DE PRODUCTOS PARA EL CUIDADO DE LA PIEL\
      INCLUYE GEL PARA CEJAS",
      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f4",
    });
    await Products.create({
      name: "Mancuernas de gimnasio",
      price: 60,
      // newItem: false,
      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f6",

      image_url: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377027/sport/pesas/1_1_rewq1q.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377027/sport/pesas/1_3_cb6znh.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377027/sport/pesas/1_2_h1c5oi.png",
      ],

      description:
        'CARACTERÍSTICAS:\
      - 4 discos de 3kg\
      - 4 discos de 2kg\
      - 4 discos de 5kg\
      - 6 seguros\
      - 2 mancuernas\
      - 1 barra recta o " Z "solida AL ESCOGER',

      // brand: 1,
      categoryId: "69cacb3c-4ef3-4d72-bbf3-d6618e45a483",
    });
    await Products.create({
      name: "Banca abdominal de gimnasio",
      price: 100,
      // newItem: false,
      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f6",

      image_url: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377061/sport/silla/2_1_lpes7i.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377061/sport/silla/2_2_ddnpkd.png",
      ],

      description:
        "Modelo y diseño: SIX PACK BANCA ABDOMINAL TOTAL 6 EN 1, REGALO 2 BANDAS EJERCICIOS\
      Soporta: hasta 100 Kg\
      peso: 13 Kg\
      dimensiones ensambladas (LxWxH): 86cm x 25cm x 40cm\
      apropiado para: estómago, piernas, nalgas y espalda\
      color de la máquina: negro y naranja.\
      características: plegable, ajustable a su altura\
      para ser utilizado para mejorar: fitness, músculos, reducción de peso",

      // brand: 1,
    });
    await Products.create({
      name: "Tonificador corporal",
      price: 110,
      // newItem: false,
      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f6",

      image_url: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377094/sport/tonificador/4_2_fc1qeh.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377094/sport/tonificador/4_3_msvouc.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377094/sport/tonificador/4_1_juolob.png",
      ],

      description:
        "Estimulador Smart Fitness 5 En 1 Abdomen Gluteos Brazos Nuca\
\
      ¡Ponte fitness para este verano!\
      \
      • Smart Fitness 5 en 1\
      • Estimulador muscular\
      • Abdomen, Glúteos, Brazos, Piernas, Nuca\
      • 6 modos de estimulación, 4 intensidades",
    });
    await Products.create({
      name: "Tablero de planchas",
      price: 110,

      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f6",

      image_url: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377119/sport/planchas/5_1_aenxad.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377119/sport/planchas/5_2_c3s5zw.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377119/sport/planchas/5_3_bacyuv.png",
      ],

      description:
        "Fácil de usar: Plug and play, inserte la manija en la posición codificada por color deseada.Puede acomodar 300 libras de usuarios.\
\
      Portátil, montaje sencillo para fácil almacenamiento.Se puede colocar en cualquier lugar, incluyendo la oficina o el hogar.\
      \
      Cojines antideslizantes, empuñaduras antideslizantes: elimine la tensión en sus manos y muñecas en comparación con las flexiones tradicionales.\
      \
      Mango sobredimensionado con diseño ergonómico.\
      \
      Las almohadillas multifunción ofrecen múltiples posiciones y ángulos de ejercicio posibles para dar forma a los músculos de la parte superior del cuerpo.\
      \
      Las diferentes áreas de color pueden ejercitar los músculos en diferentes partes del cuerpo: hombro (rojo), pecho (azul), espalda (amarillo), tríceps (verde).\
      Lista de embalaje y embalaje: 1 x Junta push-up 2 x Mango antideslizante de silicona.",

      // brand: 1,
    });
    await Products.create({
      name: "Rache O Piñón Shimano",
      price: 15,
      // newItem: false,
      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f5",

      image_url: [
        "https://http2.mlstatic.com/D_NQ_NP_955069-MLV47311127207_082021-O.webp",
      ],

      description:
        "Características Pacha\
        - Número de Dientes (T) : 14 - 16 - 18 - 20 - 22 - 24 - 34\
        - Color: Marrón\
        - Referencia Shimano: MF-TZ500-7\
        Cualquier duda o inquietud con gusto la atenderemos...",
    });
    await Products.create({
      name: "Descarilador Trasero",
      price: 30,
      // newItem: false,
      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f5",

      image_url: [
        "https://http2.mlstatic.com/D_NQ_NP_674142-MLV47311246373_082021-O.webp",
      ],

      description:
        "TENSOR TRASERO SHIMANO ALTUS 8 VELOCIDADES\
\
        .-Modelo: M310\
        .-Serie ALTUS 6/7/8 velocidades.\
        .-Montaje directo al cuadro.\
        .-Compatible con piñón hasta 34 dientes.\
        .-Material Acero.\
        .-Color Negro.\
        .-Peso 326g.\
        .-Empaque: Sin empaque.\
        .-Condición del articulo: Nuevo.",
    });
    await Products.create({
      name: "Tenedor Horquilla Suspensión",
      price: 32,

      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f5",

      image_url: [
        "https://http2.mlstatic.com/D_NQ_NP_608765-MLV46845638079_072021-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_880934-MLV46389458831_062021-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_903682-MLV45625012381_042021-O.webp",
      ],

      description:
        "Espigo de Rosca para cajas y frente de dirección normal\
        - Funciona para frenos V- brake o Frenos de Disco",
    });
    await Products.create({
      name: "Silla  P/bicicleta",
      price: 10,

      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f6",

      image_url: [
        "https://http2.mlstatic.com/D_NQ_NP_965350-MLV47829975196_102021-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_932839-MLV47830006339_102021-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_646643-MLV47829945349_102021-O.webp",
      ],
      stock: 35,
      description:
        "Modelo: GW CONFORT PLUS.\
        .-Diseño ergonómico y anatómico unisex.\
        .-Dimensiones 260mm Largo x 170mm ancho x 40mm alto, Riel en acero.\
        .-Para MTB y Spinning, con amortiguación.\
        .-Relleno ultra suave, diseñado para aliviar la presión.\
        .-Color Negro con Gris.\
        .-Tipo de empaque: Sin Empaque.\
        .-Condición del articulo: Nuevo.",
    });
    await Products.create({
      name: "Set Ligas Tubulares De Resistencia",
      price: 21,

      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f6",

      image_url: [
        "https://http2.mlstatic.com/D_NQ_NP_931953-MLV48523560476_122021-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_697648-MLV48523538960_122021-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_691062-MLV48523574221_122021-O.webp",
      ],

      description:
        "Ideales para cualquier Entrenamiento, Gym, Crossfit, Yoga, Pilates. Juego de 5 Ligas de resistencia ajustables de varios colores, con el nivel de resistencia incluido en cada banda, ademas de una guía de ejercicios, bolsa de transporte y accesorios para realizar multitud de ejercicios de brazos, hombros, pecho, glúteos, piernas, etc. Las bandas elásticas pueden utilizarse juntas o por separado, disponen de mangos de espuma y mosquetones de metal para un óptimo agarre y sujeción. Gracias a su diseño portátil y su bolsa de transporte, se puede utilizar fácilmente en cualquier parte.",
    });
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = productMockUp;
