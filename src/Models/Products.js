const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "products",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,

        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      image_url: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
