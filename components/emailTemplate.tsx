import * as React from 'react';

interface EmailTemplateProps {
  message: string;
  phone: number;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  phone,
}) => (
  <div>
    <p>{message}</p>
    <p>{phone}</p>
  </div>
);
