require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");

let sequelize = new Sequelize({
  database: "da73a39mr09ac7",
  dialect: "postgres",
  host: "ec2-3-219-52-220.compute-1.amazonaws.com",
  port: 5432,
  username: "vyjvumwzkoafyu",
  password: "f1980a86b093f58530829e338379fe2b6c3571ca42d6c9d0a5e3747ded5c013e",
  pool: { max: 3, min: 1, iddle: 100 },
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false },
    keepAlive: true,
  },
  ssl: true,
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
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
