const user = require('./user');
const circle = require('./circle');
const healthStatus = require('./health-status');
const disease = require('./disease');

const initServices = repositories => {
  const {
    userRepository,
    circleRepository,
    healthStatusRepository,
    diseaseRepository
  } = repositories;

  return {
    userService: user(userRepository),
    circleService: circle(circleRepository),
    healthStatusService: healthStatus(healthStatusRepository),
    diseaseService: disease(diseaseRepository)
  };
};

module.exports = initServices;
