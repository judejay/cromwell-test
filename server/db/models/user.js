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

  // beforewe create a new user, we need to hash the password
  {
    hooks: {
      beforeCreate: async (user) => {
        const bcrypt = require("bcrypt");
        const saltRounds = 10;
        const hash = await bcrypt.hash(user.password, saltRounds);
        user.password = hash;
      },
    },
    paranoid: true,
    sequelize,
    freezeTableName: true,
    modelName: "user",
  }
);
