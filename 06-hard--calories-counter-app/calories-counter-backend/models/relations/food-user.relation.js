const logger = require("../../util/log/logger");

const userFoodRelation = (sequelize) => {
  const {food, user} = sequelize.models;

  food.belongsToMany(
    user, {
      through: 'food_user',
      foreignKey: 'foodId'
    }
  )

  user.belongsToMany(
    food, {
      through: 'food_user',
      foreignKey: 'userId'
    }
  )
}

module.exports = userFoodRelation;