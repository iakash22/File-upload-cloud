const mongoose = require('mongoose');
const emailSend = require('../config/emailSend');

const File = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    } ,
    url : {
        type : String,
        required : true,
    },
    tag : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    }
});

emailSend(File);

module.exports = mongoose.model("File", File);