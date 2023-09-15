const File = require('../models/File');
const cloudinary = require('cloudinary').v2;


exports.localFileUpload = async(req,res) => {
    try{
        const file = req.files.file;
        console.log(file);

        const path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`
        console.log(path);

        file.mv(path, (err) => {
            console.log(err);
        })

        res.status(201).json({
            success : true,
            message : "file upload successfully",
        })
    }catch(err){
        console.log("File not upload");
        res.status(404).json({
            success : false,
            message : "Internal server error",
        })
    }
}

const isFileTypeSupported = (fileType, supportedType) => {
    return supportedType.includes(fileType);
}

async function uploadFileCloudinary(file, folder, quality){
    const options = {folder};
    options.resource_type = "auto";

    if(quality){
        options.quality = quality;
    }
    return await cloudinary.uploader.upload(file.tempFilePath, options)
}

// for image 

exports.imageUpload = async(req,res) => {
    try{
        const {name,email,tag} = req.body;
        console.log(name, email, tag);

        const image = req.files.imageFile;
        console.log(image);

        const supportedType = ["jpg", "jpeg","png"];
        const fileType = image.name.split('.')[1];

        if(!isFileTypeSupported(fileType, supportedType)){
            return res.status(401).json({
                success : false,
                message : "file type is not supported"
            })
        }
        const response = await uploadFileCloudinary(image, 'code');
        console.log(response);

        const imageData = await File.create({
            name,
            email,
            tag,
            url : response.secure_url,
        })
        
        res.status(201).json({
            success : true,
            message : "Image uploaded",
            imageData,
        })

    }catch(err){
        console.log(err);
        res.status(404).json({
            success : false,
            message : "Server error"
        })
    }
}

// for video 
exports.videoUpload = async(req,res) => {
    try{
        const {name,email,tag} = req.body;
        console.log(name, email, tag);

        const video = req.files.video;
        console.log(video);

        const supportedType = ["mp4", "mov"];
        const fileType = video.name.split('.')[1];

        if(!isFileTypeSupported(fileType, supportedType)){
            return res.status(401).json({
                success : false,
                message : "file type is not supported"
            })
        }
        const response = await uploadFileCloudinary(video, 'code');
        console.log(response);

        const videoData = await File.create({
            name,
            email,
            tag,
            url : response.secure_url,
        })
        
        res.status(201).json({
            success : true,
            message : "Video uploaded",
            videoData,
        })

    }catch(err){
        console.log(err);
        res.status(404).json({
            success : false,
            message : "Server error"
        })
    }
}

// image reduce
exports.imageReduceUpload = async(req,res) => {
    try{
        const {name,email,tag} = req.body;
        console.log(name, email, tag);

        const image = req.files.imageFile;
        console.log(image);

        const supportedType = ["jpg", "jpeg","png"];
        const fileType = image.name.split('.')[1];

        if(!isFileTypeSupported(fileType, supportedType)){
            return res.status(401).json({
                success : false,
                message : "file type is not supported"
            })
        }
        const response = await uploadFileCloudinary(image, 'code',30);
        console.log(response);

        const imageData = await File.create({
            name,
            email,
            tag,
            url : response.secure_url,
        })
        
        res.status(201).json({
            success : true,
            message : "Image uploaded",
            imageData,
        })

    }catch(err){
        console.log(err);
        res.status(404).json({
            success : false,
            message : "Server error"
        })
    }
}