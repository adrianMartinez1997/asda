const session = require("supertest-session");
const app = require("../app");
const { Products, conn, Brands } = require("../db");

const agent = session(app);

describe("Products Routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("No se ha podido conectar con la base de datos");
    })
  );

  describe("GET /api/products", () => {
    it("Deberia obtener 200", () => agent.get("/api/products").expect(200));
  });
});
