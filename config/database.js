module.exports = {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'dpg-d5kgas94tr6s73au58pg-a.oregon-postgres.render.com',
        port: 5432,
        database: 'strapi_5cj5',
        username: 'meu_admin',
        password: 'QUm94o4oPL9x6bhGCX4B4zIGxwZeRRIF',
        ssl: true,
      },
      options: {
        ssl: true,
      },
    },
  },
};