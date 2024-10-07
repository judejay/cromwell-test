"use strict";
const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require("../../database/database");
const AppError = require("../../utils/appError");
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
      allowNull: false,
      validate: {
        notNull: {
          msg: "firstName cannot be null",
        },
        notEmpty: {
          msg: "firstName cannot be empty",
        },
      },
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "lastName cannot be null",
        },
        notEmpty: {
          msg: "lastName cannot be empty",
        },
      },
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "password cannot be null",
        },
        notEmpty: {
          msg: "password cannot be empty",
        },
      },
    },
    confirmPassword: {
      type: Sequelize.DataTypes.VIRTUAL,
      set(value) {
        if (this.password.length < 7) {
          throw new AppError("Password length must be grater than 7", 400);
        }
        if (this.password !== value) {
          throw new AppError("Password and Confirm Password do not match");
        }
        return this.setDataValue("confirmPassword", value);
      },
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: "email cannot be null",
        },
        notEmpty: {
          msg: "email cannot be empty",
        },
        isEmail: {
          msg: "Invalid email id",
        },
      },
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
