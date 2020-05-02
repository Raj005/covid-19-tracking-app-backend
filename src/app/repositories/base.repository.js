class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async update(id, data) {
    return await this.model.update(id, data);
  }

  async remove(id) {
    return await this.model.remove(id);
  }

  async get(id) {
    return await this.model.get(id);
  }

  async find(query) {
    return await this.model.find(query);
  }
}

module.exports = BaseRepository;
