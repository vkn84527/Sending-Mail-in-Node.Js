var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Enter Your Mail',
    pass: 'Enter Your Password'
  }
});

var mailOptions = {
  form: 'Enter Your Mail',
  to: 'Enter Your Second Mail',
  subejct: 'Sending Email using Node.js',
  //text: `Hi Vikas, You are working on sending gmail using Node.Js`
  html: '<h1>Welcome</h1><p>That was easy!</p>' 
  //  attachments: [{
  //      filename: 'text1.txt',
  //      content: 'hello world!'
  
  //          }]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});