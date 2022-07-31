var express = require("express");
var router = express.Router();
const hikesCtrl = require("../controllers/hikes");
const isLoggedIn = require("../config/auth");

router.get("/", hikesCtrl.index);
router.get("/new", isLoggedIn, hikesCtrl.new);
router.post("/",isLoggedIn, hikesCtrl.create);
router.get("/:id", hikesCtrl.show);
router.get("/:id/edit", isLoggedIn, hikesCtrl.edit);
router.put("/:id", hikesCtrl.update);

module.exports = router;
