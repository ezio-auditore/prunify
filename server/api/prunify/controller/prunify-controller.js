const UrlDao = require('../dao/prunify-dao');
module.exports = class UrlController {

  static createUrl(req, res) {
    let _url = req.body;
    UrlDao
      .saveUrl(_url)
      .then(url => res.status(201).json(url))
      .catch(err => res.status(400).json(err));
  }
}
