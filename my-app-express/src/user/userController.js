const userService = require('./userService');


const getDataControllerFn =  (req, res) => {
    var employee =  userService.getDataFromDBService();
    res.send({'status': true, 'data': employee})
}

const createUserControllerFn = async (req, res) => {
    var testUser = {
        name: 'Rasheed',
        address: 'NevreLand,Mars',
        phone: '0009873674'
    }
    console.log(req.body);
    var status = await userService.createUserControllerFn(req.body);
    console.log("****************************");
    console.log(status);
    console.log("****************************");
    
    if (status) {
        res.send({"Status": true, "message": "User created Successfully"});
    }else{
        res.send({"Status": false, "Message": "Error creating User"});
    }
    
    
    
}

module.exports = { getDataControllerFn, createUserControllerFn};