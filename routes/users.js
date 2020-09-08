var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('get users');
});

router.get('/xxx', function(req, res, next) {
  res.send('get users xxx');
});

module.exports = router;
