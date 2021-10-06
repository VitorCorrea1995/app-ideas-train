const setupConnection = () => {
  const foodDb = require('config').foodDb;
  const {Sequelize} = require('sequelize');
  const userFoodRelation = require('../relations/food-user.relation');

  const sequelize = new Sequelize({
    dialect: 'mysql',
    username: foodDb.username,
    password: foodDb.password,
    database: foodDb.database,
    host: foodDb.host,
    port: foodDb.port,
    pool: {max: foodDb.connectionLimit}
  });

  const modelDefiners = [
    require('../food'),
    require('../user')
  ];

  for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
  }

  userFoodRelation(sequelize);

  return {sequelize, User: sequelize.models.user, Food: sequelize.models.food};
}

module.exports = setupConnection();