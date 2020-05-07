class Database {
  constructor(dbProvider, config) {
    this.dbProvider = dbProvider;
    this.connectionString = config.host;
    this.options = config.options;
  }

  async connect() {
    return await this.dbProvider.connect(this.connectionString, this.options);
  }
}

module.exports = Database;
