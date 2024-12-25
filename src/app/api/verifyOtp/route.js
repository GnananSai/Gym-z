import { NextResponse } from 'next/server';
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(request) {
  try {
    const body = await request.json();
    const { phone, otp } = body;

    if (!phone || !otp) {
      return NextResponse.json(
        { error: 'Phone and OTP are required' },
        { status: 400 }
      );
    }

    const verification = await client.verify.v2.services(process.env.TWILIO_SERVICE_SID)
      .verificationChecks.create({
        to: `+91${phone}`,
        code: otp
      });

    if (verification.status === 'approved') {
      return NextResponse.json({ 
        success: true,
        message: 'OTP verified successfully' 
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Verification Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to verify OTP',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}