const mongoose = require('mongoose');
const configLoader = require('./config');
const logger = require('./libs/logger');
const Database = require('./database');
const AppServer = require('./server');

const initRoutes = require('./server/routes');
const initModels = require('./models');
const initRepositories = require('./repositories');
const initServices = require('./services');

const startApp = async () => {
  try {
    const config = configLoader.get();

    const database = new Database(mongoose, config.db);
    const dbConnection = await database.connect();

    const models = initModels(dbConnection);
    const repositories = initRepositories(models);
    const services = initServices(repositories);
    const routes = initRoutes(services);

    const server = new AppServer(config, routes);

    await server.init();
    await server.start();
  } catch (error) {
    console.log(error);
  }
};

startApp();
