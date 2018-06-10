'use strict';
const http = require('http');
const auth = require('http-auth');
const maidRouter = require('./maid-lib/maid-router');

const basic = auth.basic({
  realm: 'Enter username and password.',
  file: './users.htpasswd'
});

const server = http.createServer(basic, (req, res) => {

maidRouter.route(req, res);
}).on('error', (e) => {
  console.error('Server Error', e);
}).on('clientError', (e) => {
  console.error('Client Error', e);
});

const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});