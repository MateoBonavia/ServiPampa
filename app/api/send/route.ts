import { EmailTemplate } from '@/components/emailTemplate';
import { Resend } from 'resend';
import { NextResponse, NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest, res: NextResponse) {
  const mailData = await req.json();

  const phone = mailData.phone;
  const message = mailData.message;
  const recipient = mailData.recipient;

  const mail =
    recipient === 'morrison'
      ? 'servipampamorrison@gmail.com'
      : 'servipampaescalante@gmail.com';

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [mail],
      subject: `Nuevo mensaje para ServiPampa de ${mailData.name}`,
      react: await EmailTemplate({ phone, message }),
      text: 'ServiPampa',
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
