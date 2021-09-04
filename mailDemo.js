var mailer = require('nodemailer');

var transport = mailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: '',
    pass: '',
  }

});

var detail = {
  from: '',
  to: '',
  subject: 'Hello Nik',
  text: 'Good Morning',
};

transport.sendMail(detail, (err, info) => {
  if (err) console.log(err);
  console.log(info);
});
