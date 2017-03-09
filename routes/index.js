var express = require('express'); // Require express module
var app = express()
var Sequelize = require('sequelize');
var sequelize = new Sequelize('Address', 'root', 'java@123');
var router = express.Router(); //creatig insatnce of express function


<!------- Address API ------->

router.post('/user/address', function(req, res, next) {
    var address = req.body.address;
    var city = req.body.city;
    var state = req.body.state;
    var pin_code = req.body.pin_code;
    var phone_no = req.body.phone_no;
    if ((address.length > 0) && (city.length > 0) && (state.length > 0) && (pin_code.length > 0) && (phone_no.length > 0)) {
        // sync() will create all table if they doesn't exist in database
        req.user_address.sync().then(function() {
            return req.user_address.create({
                "address": address,
                "city": city,
                "state": state,
                "pin_code": pin_code,
                "phone_no": phone_no,
            })
        }).then(function(data) {
            if (data) {
                res.json({ status: 1, messgae: "address inserted sucessfully" })
                next();
            }
        });
    } else {
        req.err = "All field must be filled out";
        next(req.err)
    }
});

module.exports = router;
