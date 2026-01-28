module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'dpg-d5kgas94tr6s73au58pg-a.oregon-postgres.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi_5cj5'),
        username: env('DATABASE_USERNAME', 'meu_admin'),
        password: env('DATABASE_PASSWORD', 'QUm94o4oPL9x6bhGCX4B4zIGxwZeRRIF'),
        ssl: env.bool('DATABASE_SSL', true)
      },
      options: {
        ssl: env.bool('DATABASE_SSL', true)
      }
    }
  }
});