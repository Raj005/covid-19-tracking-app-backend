const createCircleService = require('./createCircleService');
const findCircleService = require('./findCircleService');
const getCircleService = require('./getCircleService');
const removeCircleService = require('./removeCircleService');
const updateCircleService = require('./updateCircleService');

const initCircleServices = circleRepository => {
  return {
    createCircleService: createCircleService(circleRepository),
    findCircleService: findCircleService(circleRepository),
    getCircleService: getCircleService(circleRepository),
    removeCircleService: removeCircleService(circleRepository),
    updateCircleService: updateCircleService(circleRepository)
  };
};

module.exports = initCircleServices;
