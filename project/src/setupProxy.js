const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(proxy('/api', {
    target: 'http://169.254.98.165:7001',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    },
  }));
};