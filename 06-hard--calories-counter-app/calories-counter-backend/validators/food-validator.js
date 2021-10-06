class FoodValidator {
  validateGetFoodRequest(req, res, next) {
    next();
  }
}

module.exports = new FoodValidator();