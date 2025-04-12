import { EmailTemplate } from '@/components/emailTemplate';
import { Resend } from 'resend';
import { NextResponse, NextRequest } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest, res: NextResponse) {
  const mailData = await req.json();

  const phone = mailData.phone;
  const message = mailData.message;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['mateobonavia@gmail.com'],
      subject: mailData.name,
      react: await EmailTemplate({ phone, message }),
      text: 'Hello world',
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
