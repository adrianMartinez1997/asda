const { allBrands } = require("../controllers/BrandController");
const { postABrand } = require("../controllers/crudBrand");

const router = require("express").Router();
router.get("/", allBrands);
router.post("/", postABrand);

module.exports = router;
