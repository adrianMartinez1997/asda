const { Users } = require("../src/db");

const usersMockUp = async () => {
  try {
    await Users.create({
      name: "User",
      id: "69cacb3c-4ef3-4d72-bbf3-d6618e45a45a",
      password: "12345",
      role: "admin",
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = usersMockUp;
