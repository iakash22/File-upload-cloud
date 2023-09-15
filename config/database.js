const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => { mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
    })
    .then(() => console.log("Db connection successfully!" ))
    .catch((err) => {
        console.log("db not connect", err)
        process.exit(1);
    });
}

module.exports = dbConnect;