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
    <p>
      <strong>Mensaje: </strong>
      {message}
    </p>
    <p>
      <strong>Teléfono: </strong>
      {phone}
    </p>
  </div>
);
