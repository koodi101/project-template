// Import the sequelize library
const Sequelize = require('sequelize');

// Import the sequelize instance which has been configured for SQLite
const sequelize = require('./sequelize');

// Initialize the events table with two numerical fields: temperature
// and humidity
const Event = sequelize.define('ips', {
    hostname: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
    },
    ip: Sequelize.STRING,
}, {
  timestamps: true,
});

// Export the Event model
module.exports = Event;
