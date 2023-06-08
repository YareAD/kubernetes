/* eslint-env node */
module.exports = {
  client: {
    service: {
      name: 'alumnos-app',
      // URL to the GraphQL API
      url: 'http://localhost:3000/api'
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js']
  }
}
