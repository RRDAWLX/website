let express = require('express'),
  path = require('path'),
  errorhandler = require('errorhandler');

let app = new express();

app.use(function(req, res, next) {
  console.log(req.url);
  req.url = req.url + '.json';
  console.log(req.url);
  next();
});

app.use('/api/', express.static('api'));

app.use(function(req, res, next) {
  let err = new Error('not found');
  err.status = 404;
  next(err);
});

app.use(errorhandler());

let server = app.listen(3001, function() {
  let address = server.address();
  console.log(`server is listening at ${address.port}`);
});