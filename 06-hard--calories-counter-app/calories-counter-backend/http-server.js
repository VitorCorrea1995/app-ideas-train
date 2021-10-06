const http = require('http');
const config = require('config');
const express = require('express');
const cors = require('cors');

const authMiddleware = require('./middlewares/auth-middleware');
const notFoundMiddleware = require('./middlewares/not-found-middleware');
const generalErrorMiddleware = require('./middlewares/general-error-middleware');

class HttpServer {

  DEFAULT_PORT = 8080;
  APP_PREFIX = '/calories-api'

  constructor() {
    this._app = express();
    this._configureServer();
    this._setupMiddlewares();
    this._setupRoutes();
    this._setupErrorHandlers();
  }

  start() {
    const server = http.createServer(this._app);
    this._server = server.listen(config.port || this.DEFAULT_PORT);
  }

  stop() {
    this._server.close();
  }

  _configureServer() {
    this._app.use(express.json())
    this._app.use(cors());
  }

  _setupMiddlewares()  {
    this._app.use(authMiddleware);
  }

  _setupRoutes() {
    this._app.use(this.APP_PREFIX, require('./routes/food-routes'));
    // this._app.use(this.APP_PREFIX, require('./controllers/food-controller'));
  }

  _setupErrorHandlers() {
    this._app.use(notFoundMiddleware);
    this._app.use(generalErrorMiddleware)
  }
}

module.exports = HttpServer;