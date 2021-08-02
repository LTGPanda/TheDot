var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({test : 'true'});
});

module.exports = router;