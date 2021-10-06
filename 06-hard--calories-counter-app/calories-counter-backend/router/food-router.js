const router = require('express').Router();
const FoodController = require('../controllers/food-controller');

class FoodRoutes {
  ROUTE_PREFIX = '/food';

  constructor() {
    this.router = router;
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.get(this.ROUTE_PREFIX, FoodController.getAllFood);
  }
}

module.exports = (new FoodRoutes()).router;