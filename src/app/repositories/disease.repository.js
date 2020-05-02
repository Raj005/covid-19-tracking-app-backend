const BaseRepository = require('./base.repository');

class DiseaseRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
}

module.exports = DiseaseRepository;
