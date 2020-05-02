const createUserService = require('./createUserService');
const findUserService = require('./findUserService');
const getUserService = require('./getUserService');
const removeUserService = require('./removeUserService');
const updateUserService = require('./updateUserService');

const initUserServices = userRepository => {
  return {
    createUserService: createUserService(userRepository),
    findUserService: findUserService(userRepository),
    getUserService: getUserService(userRepository),
    removeUserService: removeUserService(userRepository),
    updateUserService: updateUserService(userRepository)
  };
};

module.exports = initUserServices;
