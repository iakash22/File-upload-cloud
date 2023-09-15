const express = require('express');
const {localFileUpload, imageUpload, videoUpload, imageReduceUpload} = require('../controllers/fileUpload');

const route = express.Router();

route.post('/localFileUpload', localFileUpload);
route.post('/imageUpload', imageUpload);
route.post('/videoUpload', videoUpload);
route.post('/imageReduceUpload', imageReduceUpload);

module.exports = route;