const {Food} = require('../models');
const FoodErrors = require('../util/errors/food-errors');
const logger = require('../util/log/logger');

class FoodService {
  async getFoodList() {
    logger.info(`Service - Fetching all food list`);
    try {
      logger.info(JSON.stringify(Food));
      return Food.findAll();
    } catch (error) {
      logger.error(`Service - Error fetching food list - Error - ${JSON.stringify(error)}`);
      throw FoodErrors.ERROR_FETCH_FOOD_LIST;
    }
  }
}

module.exports = new FoodService();