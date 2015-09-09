'use strict';

var _ = require('underscore');
var badge = require('../models/badges');

/**
 *  Send badges to model to be saved
 */
exports.save = function(req, res, next) {
  var badges = _.clone(req.body);
  badge.save(badges, function(err) {
    if(err) return res.json(503, { error: true });
    next();
    badge.trim();
  });
};

/**
 *  Send badges to pub/sub socket in model
 */
exports.send = function() {};
