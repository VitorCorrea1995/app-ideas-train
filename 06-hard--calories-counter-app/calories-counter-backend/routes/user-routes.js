const router = require('express').Router;
const UserController = require('../controllers/user-controller');

class UserRoutes {
  ROUTE_PREFIX = '/user';

  constructor() {
    this.router = router;
    this.setupRoutes();
  }

  setupRoutes() {
    //this.router.get(this.ROUTE_PREFIX, UserController.getAllFood);
  }
}

module.exports = (new UserRoutes()).router;