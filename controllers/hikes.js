const Hike = require("../models/hike");

module.exports = {
  index,
  new: newHike,
  create,
  show,
  edit,
  update,
};

function index(req, res) {
  Hike.find({}, function (err, hikes) {
    res.render("hikes/index", { title: "All Hikes", hikes });
  });
}
function newHike(req, res) {
  res.render("hikes/new", { title: "Add Hikes" });
}
function create(req, res) {
  req.body.swimming = !!req.body.swimming;
  req.body.user = req.user._id;
  var hike = new Hike(req.body);
  console.log(hike);
  hike.save(function (err) {
    if (err) return res.redirect("/hikes/new");
    res.redirect("/hikes");
  });
}
function show(req, res) {
  Hike.findById(req.params.id, function (err, hike) {
    console.log(hike);
    res.render("hikes/show", { title: "Hike details", hike });
  });
}
function edit(req, res) {
  Hike.findById(req.params.id, function (err, hike) {
    res.render("hikes/edit", { title: "Edit Hike", hike });
  });
}
function update(req, res) {
  req.body.swimming = !!req.body.swimming;
  Hike.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    // update object with updated properties
    req.body,
    // options object with new: true to make sure updated doc is returned
    { new: true },
    function (err, hike) {
      if (err || !hike) return res.redirect("/hikes");
      res.redirect(`/hikes/${hike._id}`);
    }
  );
}
