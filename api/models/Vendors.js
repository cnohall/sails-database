/**
 * Vendors.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
    },
    owner: {
      type: 'string',
    },
    companies: {
      type: 'string',
    },
    shops: {
      type: 'string',
    },
    active: {
      type: 'boolean'
    },
    visible: {
      type: 'boolean'
    }
  },
  datastore:'default',
};


