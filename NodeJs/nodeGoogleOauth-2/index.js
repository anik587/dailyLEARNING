const express = require('express');
const session = require('express-session');
const passport = require('passport');
const nodeMailer = require('nodemailer');
//require('./auth.facebook');
require('./auth.google');

const app = express();

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a></br><a href="/auth/facebook">Authenticate with Facebook</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: [ 'email' ] }
));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/google/protected',
    failureRedirect: '/auth/google/failure'
  })
);

app.get( '/auth/facebook/callback',
  passport.authenticate( 'facebook', {
    successRedirect: '/facebook/protected',
    failureRedirect: '/auth/facebook/failure'
  })
);

app.get('/google/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});


app.get('/facebook/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

app.get('/google/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye Google!');
});

app.get('/facebook/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye Facebook!');
});

app.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate google..');
});


app.get('/auth/facebook/failure', (req, res) => {
  res.send('Failed to authenticate from facebook..');
});

app.get('/auth/mail', async (req, res)=>{
		const transport = nodeMailer.createTransport({
            host: 'arthor.com.bd',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'no-reply@arthor.com.bd', // generated ethereal user
                pass: 'j69H@iYUvi7a', // generated ethereal password
            },
        });

        let mailOptions = {
			from: 'no-reply@arthor.com.bd', // sender address
			to: "anik587@gmail.com", // list of receivers
			subject: "Hello ✔", // Subject line
			text: "Hello world?", // plain text body
			html: "<b>Hello world?</b>", // html body
        }


		await transport.verify(function (error, success) {
		  if (error) {
			console.log(error);
		  } else {
			console.log("Server is ready to take our messages");
		  }
		});
        let info = await transport.sendMail(mailOptions)
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
    
});

app.listen(5000, () => console.log('listening on port: 5000'));
