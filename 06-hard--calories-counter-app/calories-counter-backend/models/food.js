const {DataTypes} = require('sequelize');

const Food = (sequelize) => {
  sequelize.define('food', {
    id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
    description: {
			allowNull: true,
			type: DataTypes.STRING,
		},
    protein: {
			allowNull: true,
			type: DataTypes.FLOAT,
		},
    carbohydrate: {
			allowNull: true,
			type: DataTypes.FLOAT,
		},
    fat: {
			allowNull: true,
			type: DataTypes.FLOAT,
		},
  },{
    tableName: 'food',
    timestamps: false
  })
}

module.exports = Food;