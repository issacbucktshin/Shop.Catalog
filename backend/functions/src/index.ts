import * as functions from 'firebase-functions';
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shop.mailbox.dev@gmail.com',
      pass: 'AdminAdmin'
    }
  });
var mailOptions = {
    from: 'shop.mailbox.dev@gmail.com',
    to: 'shop.mailbox.dev@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
