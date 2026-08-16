import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM || "CanGo <beta@cango.app>";

export function hasEmailConfig(): boolean {
  return Boolean(RESEND_API_KEY);
}

export async function sendBetaCodeEmail(opts: {
  to: string;
  code: string;
  authUrl?: string;
}): Promise<boolean> {
  if (!RESEND_API_KEY) return false;
  try {
    const resend = new Resend(RESEND_API_KEY);
    const authUrl = opts.authUrl || "https://cango.app/auth";
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: opts.to,
      subject: "Your CanGo access code is here",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1b263b; margin-bottom: 16px;">Welcome to CanGo</h2>
          <p style="color: #333; line-height: 1.6;">Thanks for your interest! Your free access code is:</p>
          <p style="font-size: 24px; font-weight: bold; letter-spacing: 2px; color: #1b263b; background: #f4f0e8; padding: 12px 16px; border-radius: 8px; text-align: center;">
            ${opts.code}
          </p>
          <p style="color: #333; line-height: 1.6;">
            Enter it on the <a href="${authUrl}" style="color: #1b263b;">signup page</a> to create your free account. The code is free during beta — no payment needed.
          </p>
          <p style="color: #888; font-size: 12px; margin-top: 24px;">You received this email because you requested an access code for CanGo.</p>
        </div>
      `,
    });
    if (error) {
      console.error("Resend error:", error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Failed to send beta code email:", err);
    return false;
  }
}