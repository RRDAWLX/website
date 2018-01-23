let express = require('express'),
  fs = require('fs'),
  parse = require('url').parse,
  path = require('path'),
  errorhandler = require('errorhandler');

let app = new express();

app.use(function(req, res, next) {
  console.log(req.url);
  let url = path.join(__dirname, parse(req.url).pathname + '.js');
  try {
    fs.stat(url, (err, stats) => {
      if (!err && stats.isFile()) {
        fs.readFile(url, 'utf8', (err, data) => {
          if (!err) {
            let module = {};
            eval(data);
            res.json(module.exports);
          } else{
            res.json({msg: 'no such a file'});
          }
        })
      } else {
        res.json({msg: 'no such a file'});
      }
    });
  } catch (e) {
    res.json({msg: 'no such a file'});
  }
});

app.use(errorhandler());

let server = app.listen(3001, function() {
  let address = server.address();
  console.log(`server is listening at ${address.port}`);
});