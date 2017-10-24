"use strict";

const TodoRoutes = require("../api/todo/route/todo-route");
const UrlRoutes = require('../api/prunify/route/url-route');

module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     UrlRoutes.init(router);

     app.use("/", router);
   }
}
