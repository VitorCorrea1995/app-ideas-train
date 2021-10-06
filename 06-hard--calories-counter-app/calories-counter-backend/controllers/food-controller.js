const FoodValidator = require('../validators/food-validator');
const FoodService = require('../services/food-service');
const HttpStatus = require('http-status');
const logger = require('../util/log/logger');

class FoodController {
  constructor() {
    this.getAllFood = [FoodValidator.validateGetFoodRequest, this._handleGetFoodListRequest];
  }

  async _handleGetFoodListRequest(req, res) {
    logger.info(`Controller - Fetching food list...`);
    try {
      const foodList = await FoodService.getFoodList();

      logger.info(`Controller - Food list fetched successfully`);
      res.status(HttpStatus.OK).json(foodList);
    } catch (error) {
      logger.error(`Controller - Error fetching food list - Error - ${error}`);
      res.status(error.code).send({error});
    }
  }
}

module.exports = new FoodController();

