// config/database.js
const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL || '');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host || 'dpg-d5kgas94tr6s73au58pg-a.oregon-postgres.render.com',
        port: config.port || 5432,
        database: config.database || 'strapi_5cj5',
        username: config.user || 'meu_admin',
        password: config.password || 'QUm94o4oPL9x6bhGCX4B4zIGxwZeRRIF',
        ssl: { rejectUnauthorized: false },
      },
      options: {
        ssl: true,
      },
    },
  },
});
