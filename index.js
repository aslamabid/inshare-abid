// const nodemailer = require('nodemailer'); 

// function sendMail({ from, to, subject, text, html }){
//   let mailTransporter = nodemailer.createTransport({ 
//     service: 'gmail', 
//     auth: { 
//       user: 'aslamabid98@gmail.com', 
//       pass: '8268280343aa@'
//     } 
//   }); 

//   let mailDetails = { 
//     from, 
//     to, 
//     subject, 
//     text,
//     html
//   }; 
//   mailTransporter.sendMail(mailDetails, function(err, data) { 
//     if(err) { 
//       console.log('Error Occurs'); 
//     } else { 
//       console.log('Email sent successfully'); 
//     } 
//   });
//   //return data.send({success: true});
// }

// sendMail({
//   from: emailFrom,
//   to: emailTo,
//   subject: 'inShare file sharing',
//   text: `${emailFrom} shared a file with you.`,
//   html: require('../services/emailTemplate')({
//             emailFrom,
//             downloadLink: `${process.env.APP_BASE_URL}/files/${file.uuid}` ,
//             size: parseInt(file.size/1000) + ' KB',
//             expires: '24 hours'
//         })
// })

// sendMail({
//   from: "aslamabid98@gmail.com",
//   to: "aslamabid50@gmail.com",
//   subject: "Hello",
//   text: "Text Data",
//   html: "True html abid"
// })

// //module.exports = sendMail;
const express =  require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));


const sendMail = require('./services/emailService');
    //console.log(sendMail);
    sendMail({
      from: "aslamabid98@gmail.com",
      to: "aslamabid50@gmail.com",
      subject: 'inShare file sharing',
      text: `Abid shared a file with you.`,
      html: "HTML DATA FROM ABID"
    });