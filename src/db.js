require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
<<<<<<< HEAD
const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME } = process.env;
let sequelize = new Sequelize({
  database: DB_NAME,
  dialect: "postgres",
  host: DB_HOST,
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  pool: { max: 3, min: 1, iddle: 100 },
  dialectOptions: {
    ssl: { require: false, rejectUnauthorized: false },
    keepAlive: true,
  },
  ssl: false,
});
=======

let sequelize = new Sequelize(
  `postgres://postgres:youtube12@localhost/challenge`,
  { logging: false, native: false }
);
>>>>>>> 1e936063acc44b61277a0be080c8ad39cf62ff43
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/Models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/Models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Products, Brands, Users } = sequelize.models;

Brands.hasMany(Products, {
  foreignKey: "brandId",
});
Products.belongsTo(Brands);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
  Op,
  // para importart la conexión { conn } = require('./db.js');
};
