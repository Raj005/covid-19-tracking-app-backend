const createDiseaseService = require('./createDiseaseService');
const findDiseaseService = require('./findDiseaseService');
const getDiseaseService = require('./getDiseaseService');
const removeDiseaseService = require('./removeDiseaseService');
const updateDiseaseService = require('./updateDiseaseService');

const initDiseaseServices = diseaseRepository => {
  return {
    createDiseaseService: createDiseaseService(diseaseRepository),
    findDiseaseService: findDiseaseService(diseaseRepository),
    getDiseaseService: getDiseaseService(diseaseRepository),
    removeDiseaseService: removeDiseaseService(diseaseRepository),
    updateDiseaseService: updateDiseaseService(diseaseRepository)
  };
};

module.exports = initDiseaseServices;
