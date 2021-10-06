const HttpStatus = require('http-status');

class FoodErrors {
  ERROR_FETCH_FOOD_LIST() {
    return {
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Error fetching food list'
    }
  }
}

module.exports = new FoodErrors();