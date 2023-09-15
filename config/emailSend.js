const nodemailer = require('nodemailer');
// const File = require('../models/File');
require('dotenv').config();


const emailSend = (File) => {
    File.post("save", async function (doc) {
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })

            const info = await transporter.sendMail({
                from: "Akash",
                to: doc.email,
                subject: "New File Uploaded on Cloudinary",
                html: `<h1>Hey ${doc.name}</h1>
                    <p>File uploaded </p>
                    View here: <a href="${doc.url}">${doc.url} </a>`
            })

            console.log(info);
        } catch (err) {
            console.error(err);
        }
    })
}

module.exports = emailSend;