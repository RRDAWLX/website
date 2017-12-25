let express = require('express'),
  parse = require('url').parse,
  path = require('path'),
  errorhandler = require('errorhandler');

let app = new express();

app.use(function(req, res, next) {
  let url = path.join(__dirname, parse(req.url).pathname);
  try {
    res.json(require(url));
  } catch (e) {
    e.status = 404;
    next(e);
  }
});

app.use(errorhandler());

let server = app.listen(3001, function() {
  let address = server.address();
  console.log(`server is listening at ${address.port}`);
});