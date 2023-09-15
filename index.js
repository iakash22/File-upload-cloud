const express = require('express');
const fileUpload = require('express-fileupload');
const connect = require('./config/database');
const CloudConnect = require('./config/cloudinaryDb');
const route = require('./routes/fileRoute');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use('/api/v1', route);

connect();
CloudConnect();

app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`);
})

app.get('/', (req,res) => {
    res.send("Home");
})
