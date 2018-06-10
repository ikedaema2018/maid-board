'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/maid_board',
  { logging: false });
const Maid = sequelize.define('maid_post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: Sequelize.TEXT
  },
  postedBy: {
    type: Sequelize.STRING
  },
  trackingCookie: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true,
  timestamps: true
});

Maid.sync();
module.exports = Maid;