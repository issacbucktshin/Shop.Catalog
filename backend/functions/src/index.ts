var functions  = require('firebase-functions');
var nodemailer = require('nodemailer');

exports.sendMessage = functions.https.onRequest((req, res) =>
{
  res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, POST')
  
  const from = req.query.to;
  const message = req.query.message;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shop.mailbox.dev@gmail.com',
      pass: 'AdminAdmin'
    }
  });
  var mailOptions = {
      from: from,
      to: 'shop.mailbox.dev@gmail.com',
      subject: 'Sending Email using Node.js',
      text: message
  };
  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        return res.send(500, error);
      } else {
       return res.send(200, 'Meassge Sent');
      }
  });
});


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });