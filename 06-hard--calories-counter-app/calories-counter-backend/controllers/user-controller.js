const router = require('express').Router();

const HttpStatus = require('http-status');
const logger = require('../util/log/logger');

class UserController {
  constructor() {
    // this.get = [FoodValidator.validateGetFoodRequest, this._handleGetFoodListRequest];
  }

  async _handleGetUserListRequest(req, res) {
  }
}

module.exports = new UserController();

