// handle errors at service level
module.exports = userRepository => async data => {
  // do all the data manipulation and data preparation here for the models
  // because services know what to send to the model layer
  return await userRepository.create(data);
};
