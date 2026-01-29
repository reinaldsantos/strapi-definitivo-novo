// config/plugins.js
module.exports = ({ env }) => ({
  'content-type-builder': {
    enabled: true,
    config: {
      autoReload: true,
    }
  },
  upload: {
    config: {
      provider: 'local',
      sizeLimit: 1000000,
    },
  },
});