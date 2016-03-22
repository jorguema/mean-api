'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var RankingSchema = new mongoose.Schema({
  name: String,
  description: String,
  private: Boolean
});

module.exports = mongoose.model('Ranking', RankingSchema);