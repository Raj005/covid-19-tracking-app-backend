const UserRepository = require('./user.repository');
const CircleRepository = require('./circle.repository');
const HealthStatusRepository = require('./healthStatus.repository');
const DiseaseRepository = require('./disease.repository');

const initRepositories = models => {
  const { userModel, circleModel, healthStatusModel, diseaseModel } = models;

  const userRepository = new UserRepository(userModel);
  const circleRepository = new CircleRepository(circleModel);
  const healthStatusRepository = new HealthStatusRepository(healthStatusModel);
  const diseaseRepository = new DiseaseRepository(diseaseModel);

  return {
    userRepository,
    circleRepository,
    healthStatusRepository,
    diseaseRepository
  };
};

module.exports = initRepositories;
