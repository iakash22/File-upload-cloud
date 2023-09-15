const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const CloudConnect = () => {
    try{
        cloudinary.config(
            {
                cloud_name : process.env.CLOUD_NAME,
                api_key : process.env.API_KEY,
                api_secret : process.env.API_SECRET,
            }
        )
        console.log("cloudinary connect successfully");
    }
    catch(err){
        console.log("cloudinary not connect", err);
    }    
}

module.exports = CloudConnect;