/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from 'nodemailer';

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();
    const { to, subject, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: 'vijayaprathap@genpixels.com', 
        pass: 'hxum wqos ulmq kopo', 
      },
    });

    const mailOptions = {
      from: 'info@gmail.com', 
      to,
      subject,
      text: message, 
    };


    await transporter.sendMail(mailOptions);


    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    // Handle errors
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
