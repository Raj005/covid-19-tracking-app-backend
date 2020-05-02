const BaseRepository = require('./base.repository');
class HealthStatusRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
}

module.exports = HealthStatusRepository;
