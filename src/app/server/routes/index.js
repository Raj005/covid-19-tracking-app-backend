const userRouter = require('./user');
const circleRouter = require('./circle');
const diseaseRouter = require('./disease');
const healthStatusRouter = require('./health-status');

module.exports = services => router => {
  router.use('/users', userRouter(router, services));
  router.use('/circles', circleRouter(router, services));
  router.use('/diseases', diseaseRouter(router, services));
  router.use('/healthstatus', healthStatusRouter(router, services));

  return router;
};
