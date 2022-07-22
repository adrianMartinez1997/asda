const { Products, Brands, Op } = require("../db");

const getAllProducts = async (req, res, next) => {
  try {
    let { name } = req.query;
    let allData = [];
    if (!name) {
      const allProducts = await Products.findAll({ include: Brands });

      allData = allProducts;
    } else {
      const productByName = await Products.findAll({
        where: { name: { [Op.iLike]: `%${name}` } },
      });
    }
    if (allData.length === 0) {
      return res.status(404).json({ message: "Not Found" });
    }
    return res.json(allData);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllProducts,
};
