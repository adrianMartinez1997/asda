const { Products } = require("../src/db");
const productMockUp = async () => {
  try {
    // ******************************************BEAUTY***************************
    await Products.create({
      name: "Facial cleaner",
      price: 300,
      image_url: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376664/beaty/acne/4_2_kygt2x.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376664/beaty/acne/4_1_tc2czi.png",
      ],
      description:
        "DEEP CLEANING\
      RED LIGHT MODE\
      SENSITIVE SKIN WITH RED LIGHT TECHNOLOGY\
      YOU CAN ALSO BE SURE TO USE\
      BLUE LIGHT MODE\
      REFINE PORES IMPROVE ACNE\
      IMPROVES EYES\
      EYE CARE\
      TEMPERATURE SENSOR TECHNOLOGY\
      PLACEMENT ESSENCE PROMOTES ABSORPTION\
      OF SKIN CARE PRODUCTS\
      INCLUDES EYEBROW GEL",
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
<<<<<<< HEAD
=======
      categoryId: "69cacb3c-4ef3-4d72-bbf3-d6618e45a483",
>>>>>>> 1e936063acc44b61277a0be080c8ad39cf62ff43
    });
    await Products.create({
      name: "gym abdominal bench",
      price: 100,
      // newItem: false,
      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f6",

      image_url: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377061/sport/silla/2_1_lpes7i.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377061/sport/silla/2_2_ddnpkd.png",
      ],

      description:
        "Model and design: SIX PACK TOTAL ABDOMINAL BANKING 6 IN 1, GIFT OF 2 EXERCISE BANDS\
      Supports: up to 100 Kg\
      weight: 13 Kg\
      assembled dimensions (LxWxH): 86cm x 25cm x 40cm\
      suitable for: stomach, legs, buttocks and back\
      machine color: black and orange.\
      features: foldable, adjustable to your height\
      to be used to improve: fitness, muscles, weight reduction",

      // brand: 1,
    });
    await Products.create({
      name: "body toner",
      price: 110,
      // newItem: false,
      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f6",

      image_url: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377094/sport/tonificador/4_2_fc1qeh.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377094/sport/tonificador/4_3_msvouc.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377094/sport/tonificador/4_1_juolob.png",
      ],

      description:
        "Smart Fitness Stimulator 5 In 1 Abdomen Buttocks Arms Neck\
\
      Get fit for this summer!\
      \
      •SmartFitness 5 in 1\
      • Muscle stimulator\
      • Abdomen, Buttocks, Arms, Legs, Neck\
      • 6 stimulation modes, 4 intensities",
    });
    await Products.create({
      name: "iron board",
      price: 110,

      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f6",

      image_url: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377119/sport/planchas/5_1_aenxad.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377119/sport/planchas/5_2_c3s5zw.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377119/sport/planchas/5_3_bacyuv.png",
      ],

      description:
        "Easy to use: Plug and play, insert the handle into the desired color coded position. It can accommodate 300lbs of users.\
\
      Portable, simple assembly for easy storage. It can be placed anywhere, including the office or home.\
      \
      Non-slip cushions, non-slip grips - Eliminate the strain on your hands and wrists compared to traditional push-ups.\
      \
      Oversized handle with ergonomic design.\
      \
      The multi-function pads offer multiple possible exercise positions and angles to shape your upper body muscles.\
      \
      The different color areas can exercise the muscles in different parts of the body: shoulder (red), chest (blue), back (yellow), triceps (green).\
      Packing and packaging list: 1 x Push-up gasket 2 x Silicone anti-slip handle.",
    });
    await Products.create({
      name: "Rache O Sprocket Shimano",
      price: 15,
      // newItem: false,
      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f5",

      image_url: [
        "https://http2.mlstatic.com/D_NQ_NP_955069-MLV47311127207_082021-O.webp",
      ],

      description:
        "Features Pacha \
        - Number of Teeth (T) : 14 - 16 - 18 - 20 - 22 - 24 - 34\
        - Brown color\
        - Shimano reference: MF-TZ500-7\
        Any questions or concerns we will gladly assist you...",
    });
    await Products.create({
      name: "Rear Derailleur",
      price: 30,
      // newItem: false,
      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f5",

      image_url: [
        "https://http2.mlstatic.com/D_NQ_NP_674142-MLV47311246373_082021-O.webp",
      ],

      description:
        "SHIMANO ALTUS 8-SPEED REAR LINKAGE\
\
        .-Model: M310\
        .-ALTUS series 6/7/8 speeds.\
        .-Direct mounting to the frame.\
        .-Compatible with sprockets up to 34 teeth.\
        .-Material Steel.\
        .-Black Color.\
        .-Weight 326g.\
        .-Packaging: Without packaging.\
        .-Item condition: New.",
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
        "Thread Stem for boxes and normal steering front\
        - Works for V-brakes or Disc Brakes",
    });
    await Products.create({
      name: "Bike chair",
      price: 10,

      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f6",

      image_url: [
        "https://http2.mlstatic.com/D_NQ_NP_965350-MLV47829975196_102021-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_932839-MLV47830006339_102021-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_646643-MLV47829945349_102021-O.webp",
      ],
      stock: 35,
      description:
        "Model: GW CONFORT PLUS.\
        .-Unisex ergonomic and anatomical design.\
        .-Dimensions 260mm long x 170mm wide x 40mm high, steel rail.\
        .-For MTB and Spinning, with cushioning.\
        .-Ultra soft padding, designed to relieve pressure.\
        .-Color Black with Grey.\
        .-Type of packaging: Without Packaging.\
        .-Item condition: New.",
    });
    await Products.create({
      name: "Tubular Resistance Bands Set",
      price: 21,

      brandId: "5adb1af9-0bb2-4ba7-a811-3994c61a43f6",

      image_url: [
        "https://http2.mlstatic.com/D_NQ_NP_931953-MLV48523560476_122021-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_697648-MLV48523538960_122021-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_691062-MLV48523574221_122021-O.webp",
      ],

      description:
        "Ideal for any Training, Gym, Crossfit, Yoga, Pilates. Set of 5 adjustable resistance bands of various colors, with the resistance level included in each band, in addition to an exercise guide, transport bag and accessories to perform a multitude of exercises for arms, shoulders, chest, buttocks, legs, etc. The elastic bands can be used together or separately, they have foam handles and metal carabiners for optimal grip and support.Thanks to its portable design and its carrying bag transportation, it can be easily used anywhere.",
    });
  } catch (e) {
    console.log(e.message);
  }
};
module.exports = productMockUp;
