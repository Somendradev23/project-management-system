const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

// Define the Comment model
const CommentM = sequelize.define("comments", {
  comment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});


module.exports = CommentM;
