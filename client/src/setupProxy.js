// For development environment only, does not affect prod environment
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // Amazon
  app.use(
    proxy(['/gp'], {
      target: 'http://localhost:5000'
    })
  );

  // Testing
  // Test site: https://github.com/Lunastryke/a-pager
  app.use(
    proxy(['/Lunastryke'], {
      target: 'http://localhost:5000'
    })
  );
};
