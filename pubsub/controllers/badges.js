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
exports.send = function(req, res, next) {
  var badges = _.clone(req.body);
  badge.send(badges, function(err) {
    if(err) return res.json(503, { error: true });
    res.json(200, { error: null });
  });
};

/**
 *  Get 10 badges from model
 */
exports.get = function(req, res) {
  badge.get(function(err, data) {
    if(err) return res.json(503, { error: true });
    res.json(200, data);
  });
};
