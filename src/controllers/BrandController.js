const { Brands } = require("../db");

const allBrands = async (req, res, next) => {
  try {
    let foundBrand = await Brands.findAll();
    if (foundBrand.length > 0) {
      return res.json(foundBrand);
    } else {
      return res.json({ message: "Not brand found" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  allBrands,
};
