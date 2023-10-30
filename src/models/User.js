const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }, 
    birthday: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;