const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  location: {
    type: Sequelize.ENUM([
      'homepage',
      'history',
      'targets',
      'gallery',
      'buy/sell',
      'other',
      'contact'
    ])
  },
  imageURL: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Active',
    Validate: {
      isIn: [['Inactive, Active']]
    }
  }
})

// seed db with
// users (admin)
// pictures
// text (belongs to pictures)
// what page it belongs to
// should we show it?

module.exports = Item
