var Sequelize = require('sequelize');
var sequelize = new Sequelize('Address', 'root', 'java@123');

// the middleware function 
module.exports = function() {
    var user_address = sequelize.define('details', {
        address: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        pin_code: Sequelize.STRING,
        phone_no: Sequelize.STRING,
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
    return function(req, res, next) {
        req.user_address = user_address;
        next();
    }
}
