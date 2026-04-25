// components/EmailTemplate.tsx
import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, subject, message
}) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #eee', borderRadius: '10px' }}>
    <h1 style={{ color: '#333' }}>New Message from {name}</h1>
    <p><strong>From:</strong> {email}</p>
    <p><strong>Subject:</strong> {subject}</p>
    <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '20px 0' }} />
    <p style={{ whiteSpace: 'pre-wrap', color: '#555' }}>{message}</p>
  </div>
);