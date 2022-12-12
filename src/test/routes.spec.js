const session = require("supertest-session");
const app = require("../app");
const { Products, conn } = require("../db");

const agent = session(app);
const product = {
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
};
describe("Products Rputes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("No se ha podido conectar con la base de datos");
    })
  );
  beforeEach(() => {
    Products.sync({ force: true }).then(() => Products.create(product));
  });
  describe("GET /products", () => {
    it("Deberia obtener 200", () => agent.get("/products").expect(200));
  });
});
