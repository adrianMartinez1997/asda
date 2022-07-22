const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "brands",
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
      image_url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
