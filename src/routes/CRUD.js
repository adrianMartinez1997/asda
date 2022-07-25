const {
  postAProduct,
  deleteAProduct,
  updateAProduct,
} = require("../controllers/crudProduct");
const router = require("express").Router();

router.post("/", postAProduct);
router.delete("/", deleteAProduct);
router.put("/", updateAProduct);

module.exports = router;
