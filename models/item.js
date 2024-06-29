"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      productId: DataTypes.INTEGER, // Contoh kunci asing, sesuaikan sesuai kebutuhan
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
