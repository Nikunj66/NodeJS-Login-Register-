var mailer = require('nodemailer');

var transport = mailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: '17bmiit108@gmail.com',
    pass: '$N!k$7797',
  }

});

var detail = {
  from: '17bmiit108@gmail.com',
  to: '17bmiit108@gmail.com',
  subject: 'Hello Nik',
  text: 'Good Morning',
};

transport.sendMail(detail, (err, info) => {
  if (err) console.log(err);
  console.log(info);
});
