"use strict";
const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require("../../database/database");

module.exports = sequelize.define(
  "user",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
    },
    confirmPassword: {
      type: Sequelize.DataTypes.VIRTUAL,
      set(value) {
        if (this.password !== value) {
          throw new Error("Password and Confirm Password do not match");
        }
        return this.setDataValue("confirmPassword", value);
      },
    },
    email: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: {
      type: Sequelize.DATE,
    },
  },

  {
    paranoid: true,
    sequelize,
    freezeTableName: true,
    modelName: "user",
  }
);
