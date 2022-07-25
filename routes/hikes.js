var express = require('express');
var router = express.Router();
const hikesCtrl = require('../controllers/hikes');
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  router.get('/', hikesCtrl.index)
module.exports = router;