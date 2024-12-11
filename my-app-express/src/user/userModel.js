const { Schema, default: mongoose } = require("mongoose");

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
    // password: {
    //     type: String,
    //     required: true
    // },
})

module.exports = mongoose.model('employees', userSchema);