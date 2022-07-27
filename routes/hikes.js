var express = require('express');
var router = express.Router();
const hikesCtrl = require('../controllers/hikes');

router.get('/', hikesCtrl.index)
router.get('/new', hikesCtrl.new)
router.post('/', hikesCtrl.create)
router.get('/:id', hikesCtrl.show )
router.get('/:id/edit', hikesCtrl.edit)
router.put('/:id', hikesCtrl.update)
  


module.exports = router;