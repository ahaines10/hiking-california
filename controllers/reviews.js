const Hike = require("../models/hike");

module.exports = {
   create,
   delete: deleteReview
 

};

function create(req, res) {
  Hike.findById(req.params.id, function(err, hike) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    hike.reviews.push(req.body);
    hike.save(function(err) {
      res.redirect(`/hikes/${hike._id}`);
    });
  });
}
async function deleteReview(req, res, next) {
  try {
    const hike = await Hike.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id});
    if (!hike) throw new Error('Nice Try!');
    hike.reviews.remove(req.params.id);
    await hike.save();
    res.redirect(`/hikes/${hike._id}`);
  } catch (err) {
    return next(err);
  }
}
  