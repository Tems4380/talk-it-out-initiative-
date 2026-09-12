import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Official Talk It Out destination email
const TALK_IT_OUT_EMAIL = process.env.TALK_IT_OUT_EMAIL || 'talkitoutinitiative@gmail.com';
const TALK_IT_OUT_PHONE = '07083445086';

// In-memory record store for local session persistence and auditing
interface SubmissionRecord {
  id: string;
  formType: string;
  name?: string;
  email?: string;
  phone?: string;
  churchOrOrg?: string;
  message?: string;
  question?: string;
  permissionGranted?: boolean;
  submittedAt: string;
  sentViaSmtp: boolean;
}

const submissionsStore: SubmissionRecord[] = [];

// Helper to create nodemailer transporter safely if credentials exist
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });
  }

  // If user configured GMAIL app password or standard auth
  if (user && pass && !host) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass }
    });
  }

  return null;
}

// ==========================================
// API ROUTES FIRST
// ==========================================

app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    initiative: 'Talk It Out',
    destinationEmail: TALK_IT_OUT_EMAIL,
    phone: TALK_IT_OUT_PHONE
  });
});

// Primary endpoint for all Talk It Out form submissions
app.post('/api/submit-form', async (req: Request, res: Response) => {
  try {
    const {
      formType = 'General Form',
      name,
      email,
      phone,
      churchOrOrg,
      message,
      question,
      permissionGranted
    } = req.body;

    const submittedText = message || question || '';
    const senderName = name?.trim() || 'Anonymous Visitor';
    const senderEmail = email?.trim() || 'Not provided';
    const senderPhone = phone?.trim() || 'Not provided';
    const timestamp = new Date().toISOString();

    const record: SubmissionRecord = {
      id: `tio_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      formType,
      name: senderName,
      email: senderEmail,
      phone: senderPhone,
      churchOrOrg: churchOrOrg?.trim() || 'None specified',
      message: submittedText,
      permissionGranted: typeof permissionGranted === 'boolean' ? permissionGranted : undefined,
      submittedAt: timestamp,
      sentViaSmtp: false
    };

    // Format plain text and HTML emails
    const emailSubject = `[Talk It Out] ${formType}: ${senderName}`;
    const emailBodyText = `
New Form Submission for Talk It Out
--------------------------------------------------
Form Type: ${formType}
Submitted To: ${TALK_IT_OUT_EMAIL}
Date/Time: ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' })} (WAT)

SUBMITTER DETAILS:
Name: ${senderName}
Email: ${senderEmail}
Phone / WhatsApp: ${senderPhone}
Organization / Church / Community: ${churchOrOrg || 'None'}

SUBMITTED CONTENT:
${submittedText}

${typeof permissionGranted === 'boolean' ? `Permission Granted for Discussion: ${permissionGranted ? 'Yes' : 'No'}` : ''}
--------------------------------------------------
Talk It Out Initiative
Parent Foundation: Nuel Foundation
Destination: ${TALK_IT_OUT_EMAIL}
Phone/WhatsApp: ${TALK_IT_OUT_PHONE}
    `.trim();

    const emailBodyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E7DFD5; border-radius: 12px; background-color: #FAF7F2;">
        <div style="background-color: #E05A2B; padding: 16px 20px; border-radius: 8px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px;">Talk It Out — Form Submission</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Initiative by Nuel Foundation</p>
        </div>
        
        <div style="background: #ffffff; padding: 20px; border-radius: 8px; margin-top: 16px; border: 1px solid #E7DFD5;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #1E1B18; width: 140px;">Form Type:</td>
              <td style="padding: 8px 0; color: #E05A2B; font-weight: bold;">${formType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #1E1B18;">Name:</td>
              <td style="padding: 8px 0; color: #44403C;">${senderName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #1E1B18;">Email:</td>
              <td style="padding: 8px 0; color: #44403C;">${senderEmail}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #1E1B18;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0; color: #44403C;">${senderPhone}</td>
            </tr>
            ${churchOrOrg ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #1E1B18;">Church / Group:</td>
              <td style="padding: 8px 0; color: #44403C;">${churchOrOrg}</td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #E7DFD5;">
            <p style="font-weight: bold; margin-bottom: 8px; color: #1E1B18;">Message / Question:</p>
            <div style="background-color: #FAF7F2; padding: 14px; border-radius: 8px; color: #1E1B18; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${submittedText || '(No additional text provided)'}</div>
          </div>

          ${typeof permissionGranted === 'boolean' ? `
            <p style="margin-top: 12px; font-size: 12px; color: #78716C;">
              <strong>Anonymous Discussion Permission:</strong> ${permissionGranted ? 'Granted' : 'Not granted'}
            </p>
          ` : ''}
        </div>

        <div style="margin-top: 16px; font-size: 11px; color: #78716C; text-align: center;">
          Sent to <strong>${TALK_IT_OUT_EMAIL}</strong> | Talk It Out Official Phone: ${TALK_IT_OUT_PHONE}
        </div>
      </div>
    `;

    // Attempt live delivery via SMTP if configured
    const transporter = createTransporter();
    if (transporter) {
      try {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Talk It Out Portal" <${process.env.SMTP_USER || TALK_IT_OUT_EMAIL}>`,
          to: TALK_IT_OUT_EMAIL,
          replyTo: senderEmail !== 'Not provided' ? senderEmail : undefined,
          subject: emailSubject,
          text: emailBodyText,
          html: emailBodyHtml
        });
        record.sentViaSmtp = true;
      } catch (smtpErr) {
        console.warn('[SMTP Warning] Failed to send via SMTP, logged locally:', smtpErr);
      }
    } else {
      // Clean, secure server-side logging of incoming form submission
      console.log(`[Talk It Out] Form submission processed for ${TALK_IT_OUT_EMAIL}:`, {
        type: formType,
        name: senderName,
        email: senderEmail,
        phone: senderPhone,
        timestamp
      });
    }

    submissionsStore.push(record);

    return res.status(200).json({
      success: true,
      message: "Thank you for reaching out to Talk It Out. We've received your message and will get back to you soon.",
      recordId: record.id
    });
  } catch (error) {
    console.error('[Talk It Out] Form submission error:', error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong while sending your message. Please try again or contact us directly."
    });
  }
});

// Vite middleware & Static asset serving
async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Talk It Out server running on http://0.0.0.0:${PORT}`);
    console.log(`Submissions routed to: ${TALK_IT_OUT_EMAIL}`);
  });
}

start();
