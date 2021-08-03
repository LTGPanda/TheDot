var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({GridList: [
    {Name: "bertus", Value: 32, Tier: 2, Grid:[0,2]},
    {Name: "bert", Value: 33, Tier: 2, Grid:[0,0]},
    {Name: "Jack", Value: 12, Tier: 2, Grid:[1,0]},
    {Name: "Jauk", Value: 82, Tier: 2, Grid:[1,1]}
  ]});
});

module.exports = router;