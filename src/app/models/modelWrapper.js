class ModelWrapper {
  constructor(thirdPartyModel) {
    this.model = thirdPartyModel;
  }

  async create(data) {
    const doc = { ...data };
    return await this.model.create(doc);
  }

  async update(id, data, options) {
    const filter = { id };
    const doc = { ...data };

    return await this.model.update(filter, doc, options);
  }

  async remove(id) {
    const filter = { id };
    return await this.model.deleteOne(filter);
  }

  async get(id, fieldsToSelect, options) {
    const select = fieldsToSelect.join(' ');

    return await this.model.findById(id, select, options);
  }

  async find(query, fieldsToSelect, options) {
    const filter = { ...query };
    const select = fieldsToSelect.join(' ');

    return await this.model.find(filter, select, options);
  }

  async count(data) {
    const filter = { ...data };
    return await this.model.countDocuments(filter);
  }
}

module.exports = ModelWrapper;
