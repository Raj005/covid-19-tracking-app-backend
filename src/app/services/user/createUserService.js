// handle errors at service level
module.exports = userRepository => async data => {
  return await userRepository.create(data);
};
