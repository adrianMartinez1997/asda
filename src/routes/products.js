const { getAllProducts } = require("../controllers/productsController");
const router = require("express").Router();

router.get("/", getAllProducts);

module.exports = router;
