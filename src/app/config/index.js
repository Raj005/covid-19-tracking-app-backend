const convict = require('convict');

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 5000,
    env: 'PORT',
    arg: 'port'
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'server1.dev.test'
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'users'
    },
    options: {
      useNewUrlParser: {
        default: true
      },
      useCreateIndex: {
        default: true
      },
      useUnifiedTopology: {
        default: true
      },
      autoIndex: {
        default: true
      }
    }
  },
  secret: {
    doc: 'some app secret',
    format: '*',
    default: '',
    sensitive: true
  },
  apiSlug: {
    doc: 'slug with version for apis',
    default: '/api/v1'
  }
});

const env = config.get('env');
config.loadFile(`${__dirname}/` + env + '.json');

config.validate({ allowed: 'strict' });

module.exports = config;
