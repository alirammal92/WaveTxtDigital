import nodemailer from 'nodemailer';

// Create a transporter with Hostinger SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT) || 587, // Default to 587 if not specified
  secure: Number(process.env.MAIL_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  },
  logger: true, // Enable logging for debugging
  debug: true, // Include even more debug info
});

// Print current environment variables (without exposing passwords)
console.log('Testing SMTP configuration:');
console.log('MAIL_HOST:', process.env.MAIL_HOST);
console.log('MAIL_PORT:', process.env.MAIL_PORT);
console.log('MAIL_USER:', process.env.MAIL_USER);
console.log('MAIL_FROM:', process.env.MAIL_FROM);
console.log('MAIL_TO:', process.env.MAIL_TO);
console.log('MAIL_PASSWORD:', process.env.MAIL_PASSWORD ? '[PROVIDED]' : '[NOT PROVIDED]');

// Step 1: Verify transporter configuration
console.log('\nStep 1: Verifying SMTP connection...');
transporter.verify()
  .then(() => {
    console.log('✅ SMTP connection successful!');
    
    // Step 2: Send a test email
    console.log('\nStep 2: Sending test email...');
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
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ SMTP Error:', error);
    process.exit(1);
  });