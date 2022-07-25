const Hike = require("../models/hike");

module.exports = {
  index,
  new: newHike,
  create,
};

function index(req, res) {
  Hike.find({}, function (err, hikes) {
    res.render("hikes/index", { title: "All Hikes", hikes });
  });
}
function newHike(req, res) {
  res.render("hikes/new", {title: 'Add Hikes'});
}
function create(req, res) {
    req.body.swimming = !!req.body.swimming;
  var hike = new Hike(req.body);
  console.log(hike);
  hike.save(function (err) {
    if (err) return res.redirect("/hikes/new");
    res.redirect("/hikes");
  });
}
