import nodemailer from 'nodemailer';

// Create a transporter with standard Titan Email/Hostinger SMTP settings
// Testing standard ports instead of relying on environment variable
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587, // Standard TLS port
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  },
  logger: true,
  debug: true,
});

console.log('Testing SMTP configuration with standard ports (587/TLS):');
console.log('MAIL_HOST:', process.env.MAIL_HOST);
console.log('MAIL_USER:', process.env.MAIL_USER);
console.log('MAIL_FROM:', process.env.MAIL_FROM);
console.log('MAIL_TO:', process.env.MAIL_TO);

// Verify connection
console.log('\nAttempting to verify SMTP connection...');
transporter.verify()
  .then(() => {
    console.log('✅ SMTP connection successful!');
    
    // Send test email
    console.log('\nSending test email...');
    return transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: 'WAVETXT SMTP Test',
      text: 'This is a test email to verify that the SMTP configuration is working properly.',
      html: '<h1>SMTP Test</h1><p>This is a test email to verify that the SMTP configuration is working properly.</p>',
    });
  })
  .then(info => {
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ SMTP Error:', error);
    
    // Try again with SSL port 465
    console.log('\nTrying again with SSL port 465...');
    const sslTransporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      },
      logger: true,
      debug: true,
    });
    
    return sslTransporter.verify()
      .then(() => {
        console.log('✅ SMTP connection successful with SSL!');
        return sslTransporter.sendMail({
          from: process.env.MAIL_FROM,
          to: process.env.MAIL_TO,
          subject: 'WAVETXT SMTP Test (SSL)',
          text: 'This is a test email to verify that the SMTP configuration is working properly over SSL.',
          html: '<h1>SMTP Test (SSL)</h1><p>This is a test email to verify that the SMTP configuration is working properly over SSL.</p>',
        });
      })
      .then(info => {
        console.log('✅ Test email sent successfully over SSL!');
        console.log('Message ID:', info.messageId);
        process.exit(0);
      })
      .catch(sslError => {
        console.error('❌ SSL SMTP Error:', sslError);
        process.exit(1);
      });
  });