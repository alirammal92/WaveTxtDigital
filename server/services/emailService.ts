import nodemailer from 'nodemailer';
import type { ContactFormValues, QuoteFormValues } from '@shared/schema';

// Create a transporter with Hostinger SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587, // Using 587 for TLS as confirmed by our tests
  secure: false, // TLS requires secure:false but will upgrade connection
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  },
});

// Verify transporter configuration
transporter.verify()
  .then(() => console.log('SMTP connection established successfully'))
  .catch(err => console.error('SMTP connection error:', err));

export async function sendContactEmail(formData: ContactFormValues): Promise<boolean> {
  try {
    // Prepare the email content
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This email was sent from the WAVETXT website contact form.</em></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        
        Message:
        ${formData.message}
        
        This email was sent from the WAVETXT website contact form.
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Function to send auto-reply to the contact form submitter
export async function sendAutoReplyEmail(formData: ContactFormValues): Promise<boolean> {
  try {
    // Prepare the email content
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: formData.email,
      subject: `Thank you for contacting WAVETXT`,
      html: `
        <h1>Thank You for Contacting Us</h1>
        <p>Dear ${formData.name},</p>
        <p>Thank you for reaching out to WAVETXT. We have received your message and will get back to you as soon as possible.</p>
        <p>For your reference, here is a copy of your message:</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        </div>
        <p>If you need immediate assistance, please contact us at +357 24 812050.</p>
        <p>
          Best regards,<br>
          WAVETXT Team
        </p>
      `,
      text: `
        Thank You for Contacting Us
        
        Dear ${formData.name},
        
        Thank you for reaching out to WAVETXT. We have received your message and will get back to you as soon as possible.
        
        For your reference, here is a copy of your message:
        
        Subject: ${formData.subject}
        
        Message:
        ${formData.message}
        
        If you need immediate assistance, please contact us at +357 24 812050.
        
        Best regards,
        WAVETXT Team
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Auto-reply email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending auto-reply email:', error);
    return false;
  }
}

// Function to send notification email for quote requests
export async function sendQuoteEmail(formData: QuoteFormValues): Promise<boolean> {
  try {
    // Prepare the email content
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `New Quote Request: ${formData.service}`,
      html: `
        <h1>New Quote Request</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <p><strong>Marketing Consent:</strong> ${formData.consent ? 'Yes' : 'No'}</p>
        <hr>
        <p><em>This email was sent from the WAVETXT website quote request form.</em></p>
      `,
      text: `
        New Quote Request
        
        Name: ${formData.name}
        Company: ${formData.company}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Service: ${formData.service}
        
        Message:
        ${formData.message}
        
        Marketing Consent: ${formData.consent ? 'Yes' : 'No'}
        
        This email was sent from the WAVETXT website quote request form.
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Quote email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending quote email:', error);
    return false;
  }
}

// Function to send auto-reply to the quote form submitter
export async function sendQuoteAutoReplyEmail(formData: QuoteFormValues): Promise<boolean> {
  try {
    // Prepare the email content
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: formData.email,
      subject: `Thank you for your quote request - WAVETXT`,
      html: `
        <h1>Thank You for Your Quote Request</h1>
        <p>Dear ${formData.name},</p>
        <p>Thank you for requesting a quote from WAVETXT. We have received your request and our team will prepare a customized quote for you as soon as possible.</p>
        <p>For your reference, here is a summary of your request:</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Company:</strong> ${formData.company}</p>
          <p><strong>Service Requested:</strong> ${formData.service}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        </div>
        <p>If you need immediate assistance, please contact us at +357 24 812050.</p>
        <p>
          Best regards,<br>
          WAVETXT Team
        </p>
      `,
      text: `
        Thank You for Your Quote Request
        
        Dear ${formData.name},
        
        Thank you for requesting a quote from WAVETXT. We have received your request and our team will prepare a customized quote for you as soon as possible.
        
        For your reference, here is a summary of your request:
        
        Company: ${formData.company}
        Service Requested: ${formData.service}
        
        Message:
        ${formData.message}
        
        If you need immediate assistance, please contact us at +357 24 812050.
        
        Best regards,
        WAVETXT Team
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Quote auto-reply email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending quote auto-reply email:', error);
    return false;
  }
}