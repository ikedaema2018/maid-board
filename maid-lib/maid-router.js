'use strict';
const maidpostsHandler = require('./maidposts-handler');
const util = require('./maid-handler-util');

function route(req, res) {
  switch (req.url) {
    case '/posts?delete=1':
      console.log("delete");
      maidpostsHandler.handleDelete(req, res);
      break;
    case '/posts':
    console.log("handle");
      maidpostsHandler.handle(req, res);
      break;
    case '/logout':
      util.handleMaidLogout(req, res);
      break;
    // case '/favicon.ico':
    //   util.handleFavicon(req, res);
    //   break;
    default:
      util.handleMaidNotFound(req, res);
      break;
  }
}



module.exports = {
  route: route
};