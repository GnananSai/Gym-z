import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Initialize Twilio client
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(request) {
  try {
    const body = await request.json();
    const { phone } = body;

    // Validate phone number
    if (!phone || phone.length !== 10) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Send OTP using Twilio Verify
    const verification = await client.verify.v2.services(process.env.TWILIO_SERVICE_SID)
      .verifications.create({
        to: `+91${phone}`,
        channel: 'sms'
      });

    console.log('Twilio response:', verification.status);

    return NextResponse.json({
      success: true,
      status: verification.status
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send OTP',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}