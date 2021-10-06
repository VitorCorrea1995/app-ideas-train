const {DataTypes} = require('sequelize');

const User = (sequelize) => {
  sequelize.define('user', {
    id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		username: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    email: {
			allowNull: true,
			type: DataTypes.STRING,
		},
    passwordHash: {
			allowNull: true,
			type: DataTypes.STRING,
		}
  },{
    tableName: 'user',
    timestamps: false
  })
}

module.exports = User;