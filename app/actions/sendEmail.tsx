"use server"

import { Resend } from 'resend';
import { render } from '@react-email/render';
import { EmailTemplate } from '@/components/email-template';
import { ReactElement } from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  try {
    // 1. Manually render to HTML to avoid Next.js 15 render conflicts
    const emailHtml = await render(
      <EmailTemplate 
        name={name} 
        email={email} 
        subject={subject} 
        message={message} 
      />
    );

    // 2. Send using the 'html' property instead of 'react'
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'chuksezeaku@gmail.com',
      subject: `New Portfolio Message: ${subject}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error };
    }

    console.log("3b. Success! Email Sent. ID:", data?.id);
    return { success: true };

  } catch (err: any) {
    console.error("Critical Error:", err.message);
    return { success: false, error: err.message };
  }
}