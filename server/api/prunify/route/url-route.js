const UrlController = require('../controller/prunify-controller');

module.exports = class UrlRoutes  {

  static init(router){
    router
      .route('/api/url')
      .post(UrlController.createUrl);
  }

}
