const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
})

async function sendEmail(to, subject, html) {
  try {
    await transporter.sendMail({ from: process.env.EMAIL_FROM, to, subject, html })
    console.log(`Email sent to ${to}: ${subject}`)
  } catch (err) {
    console.error('Email send error:', err.message)
  }
}

function emailTemplate(title, content) {
  return `
  <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px">
    <div style="background:#0d6efd;color:white;padding:20px;text-align:center;border-radius:8px 8px 0 0">
      <h1 style="margin:0;font-size:24px">GlobalMarket</h1>
    </div>
    <div style="padding:30px;border:1px solid #dee2e6;border-top:none;border-radius:0 0 8px 8px">
      <h2 style="color:#333;margin-top:0">${title}</h2>
      ${content}
      <hr style="border:none;border-top:1px solid #eee;margin:20px 0">
      <p style="color:#888;font-size:12px;text-align:center">© ${new Date().getFullYear()} GlobalMarket. Tous droits réservés.</p>
    </div>
  </div>`
}

module.exports = { sendEmail, emailTemplate }
