const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const productMockUp = require("./Json/products");
const brandMockUp = require("./Json/brand");
const usersMockUp = require("./Json/users");

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3000, async () => {
    await brandMockUp();
    await usersMockUp();
    await productMockUp();

    console.log("Servidor iniciado");
  });
});
