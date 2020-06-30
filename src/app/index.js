const mongoose = require('mongoose');
const configLoader = require('./config');
const Database = require('./database');

const initRoutes = require('./server/routes');
const initModels = require('./models');
const initRepositories = require('./repositories');
const initServices = require('./services');
const initLibs = require('./libs');

const initApp = async () => {
  // some type of container for DI here and register everything
  const config = configLoader.get();

  const database = new Database(mongoose, config.db);
  const dbConnection = await database.connect();

  const models = initModels(dbConnection);
  const repositories = initRepositories(models);
  const services = initServices(repositories);
  const routes = initRoutes(services);
  const libs = initLibs({});

  return {
    config,
    database,
    dbConnection,
    models,
    repositories,
    services,
    routes,
    libs
  };
};

module.exports = initApp;
