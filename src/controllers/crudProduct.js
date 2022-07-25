const { Products, Brands } = require("../db");

const postAProduct = async (req, res, next) => {
  try {
    let { userName, name, price, b, description, image_url } = req.body;
    if (userName) {
      let br = await Brands.findOne({ where: { name: b } });
      let brandId = br.id;

      const pr = await Products.create({
        name,
        price,
        description,
        brandId,
        image_url,
      });
      return res.json({ message: "Created", pr });
    } else {
      return res.json({ message: "You are not allowed to do this" });
    }
  } catch (error) {
    next(error);
  }
};
const deleteAProduct = async (req, res, next) => {
  try {
    let { userName, name } = req.body;
    if (userName) {
      let erase = Products.destroy({ where: { name: name } });
      return res.json({ message: "Product erased" });
    } else {
      return res.json({ message: "You are not allowed to do this" });
    }
  } catch (error) {
    next(error);
  }
};

const updateAProduct = async (req, res, next) => {
  try {
    let { userName, id, price, description, brand, name } = req.body;
    if (userName) {
      let update = Products.update(req.body, { where: { id: id } });
      return res.json({ message: "Product updated" });
    } else {
      return res.json({ message: "You are not allowed to do this" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  postAProduct,
  deleteAProduct,
  updateAProduct,
};
