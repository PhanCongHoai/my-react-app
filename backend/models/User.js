const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");
const User = sequelize.define(
  "User",
  {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Kiểm tra định dạng email hợp lệ
      },
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "Users",
  }
);

module.exports = User; // Giữ tên model số ít (quy chuẩn của Sequelize)
