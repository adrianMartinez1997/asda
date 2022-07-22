const { Users, Op } = require("../db");

const loginVerification = async (req, res, next) => {
  try {
    let { name, password } = req.body;
    let userIn = [];
    let foundUser = await Users.findAll({
      where: {
        name: name,
        password: password,
      },
    });
    if (foundUser.length > 0) {
      return res.json({ message: "Logueado!", foundUser });
    } else {
      return res.json({ message: "Datos incorrectos" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginVerification,
};
