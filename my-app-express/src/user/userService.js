const { reject } = require('lodash');
var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {
    return new Promise(function checkURL(resolve, reject) {
        userModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else{
                resolve(result);
            }
        });
    });
}


module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, result) {

        var userModelData = new userModel();
    
        userModel.name = userDetails.name;
        userModel.address = userDetails.address;
        userModel.phone = userDetails.phone;
        
        userModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            }else{
                resolve(true);
            }
        })
    })
}