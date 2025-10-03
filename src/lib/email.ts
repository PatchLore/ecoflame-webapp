import nodemailer from 'nodemailer'
import { Lead } from './supabase-client'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendLeadNotification(lead: Lead) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.TRADESMAN_EMAIL,
    subject: `New Lead: ${lead.job_type} - ${lead.name}`,
    html: `
      <h2>New Lead Received</h2>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Phone:</strong> ${lead.phone}</p>
      <p><strong>Job Type:</strong> ${lead.job_type}</p>
      <p><strong>Postcode:</strong> ${lead.postcode}</p>
      <p><strong>Urgency:</strong> ${lead.urgency}</p>
      <p><strong>Job Details:</strong> ${lead.job_details || 'No additional details provided'}</p>
      <p><strong>Estimated Quote:</strong> £${lead.estimated_quote}</p>
      <p><strong>Submitted:</strong> ${new Date(lead.created_at).toLocaleString()}</p>
    `,
  }

  await transporter.sendMail(mailOptions)
}
