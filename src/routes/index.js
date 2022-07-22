const { Router } = require("express");

const productsRouter = require("./products.js");
const loginMethod = require("./login");
const CRUD = require("./CRUD");
const brand = require("./brand");
const router = Router();

router.use("/products", productsRouter);
router.use("/user", loginMethod);
router.use("/products", CRUD);
router.use("/brand", brand);
module.exports = router;
