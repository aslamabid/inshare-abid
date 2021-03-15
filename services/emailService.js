const nodemailer = require('nodemailer');

function sendMail({ from, to, subject, text, html }){
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aslamabid98@gmail.com',
      pass: '8268280343aa@'
    }
  });

  let mailDetails = {
    from,
    to,
    subject,
    text,
    html
  };
  mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
      console.log('Error Occurs');
    } else {
      console.log('Email sent successfully');
    }
  });
  //return data.send({success: true});
}

module.exports = sendMail;