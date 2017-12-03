const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const whitelistedAddressSchema = Schema({
  address    : {type: String, required: true},
}, {
  timestamps : true
});

whitelistedAddressSchema.statics = {
  /**
   * @memberOf WhitelistedAddress
   */
  get: function (query, callback) {
    return this.findOne(query, callback);
  },

  /**
   * @memberOf WhitelistedAddress
   */
  getById: function (id, callback) {
    return this.findOne({_id: id}, callback);
  },

  /**
   * @memberOf WhitelistedAddress
   */
  getAll: function (query, callback) {
    return this.find(query, callback);
  },

  /**
   * @memberOf WhitelistedAddress
   */
  create: function (data, callback) {
    const item = new this(data);
    return item.save(callback);
  },

  /**
   * @memberOf WhitelistedAddress
   */
  updateById: function (id, updateData, callback) {
    return this.update({_id: id}, {$set: updateData}, callback);
  },

  /**
   * @memberOf WhitelistedAddress
   */
  removeById: function (id, callback) {
    return this.remove({_id: id}, callback);
  }
};

/** @class WhitelistedAddress */
const WhitelistedAddress = mongoose.model('WhitelistedAddress', whitelistedAddressSchema);

module.exports = WhitelistedAddress;
