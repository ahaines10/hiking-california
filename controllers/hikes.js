Hikes = require('../models/hikes')

module.exports = {
index,
};

function index(req, res) {
    Hikes.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights});
      });
    }
