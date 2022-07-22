const { Brands } = require("../db");

const postABrand = async (req, res, next) => {
  try {
    let { userName, name, image_url } = req.body;
    if (userName) {
      let newBrand = await Brands.create({ name, image_url });
      return res.json({ message: "Brand created", newBrand });
    } else {
      return res.json({ message: "You are not allowed to do this" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { postABrand };
