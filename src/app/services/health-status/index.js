const createHealthStatusService = require('./createHealthStatusService');
const findHealthStatusService = require('./findHealthStatusService');
const getHealthStatusService = require('./getHealthStatusService');
const removeHealthStatusService = require('./removeHealthStatusService');
const updateHealthStatusService = require('./updateHealthStatusService');

const initHealthStatusServices = healthStatusRepository => {
  return {
    createHealthStatusService: createHealthStatusService(
      healthStatusRepository
    ),
    findHealthStatusService: findHealthStatusService(healthStatusRepository),
    getHealthStatusService: getHealthStatusService(healthStatusRepository),
    removeHealthStatusService: removeHealthStatusService(
      healthStatusRepository
    ),
    updateHealthStatusService: updateHealthStatusService(healthStatusRepository)
  };
};

module.exports = initHealthStatusServices;
