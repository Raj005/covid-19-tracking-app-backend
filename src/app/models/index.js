const User = require('./users');
const Circle = require('./circle');
const HealthStatus = require('./healthStatus');
const Disease = require('./disease');
const ModelWrapper = require('./modelWrapper');

// User.create(
//   {
//     username: 'raj005',
//     firstname: 'raj',
//     lastname: 'chaudhary',
//     email: 'raj@gmail.com',
//     age: 34
//   },
//   function (err, user) {
//     console.log(err);
//     console.log(user);
//   }
// );

const initModels = mongoose => {
  const userModel = new ModelWrapper(User(mongoose));
  const circleModel = new ModelWrapper(Circle(mongoose));
  const healthStatusModel = new ModelWrapper(HealthStatus(mongoose));
  const diseaseModel = new ModelWrapper(Disease(mongoose));

  return { userModel, circleModel, healthStatusModel, diseaseModel };
};

module.exports = initModels;
