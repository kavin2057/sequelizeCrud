const sequelize = require('../config/database');
const User = require('./user');

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

module.exports = {
  User,
};
