// all user level routes here
const createRouteHandler = require('./create');
const getRouteHandler = require('./get');
const findRouteHandler = require('./find');
const removeRouteHandler = require('./remove');
const updateRouteHandler = require('./update');

module.exports = (router, services) => {
  router.post('/', createRouteHandler(services));
  router.get('/', findRouteHandler(services));
  router.get('/:id', getRouteHandler(services));
  router.delete('/:id', removeRouteHandler(services));
  router.patch('/:id', updateRouteHandler(services));

  return router;
};
