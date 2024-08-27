// app/api/auth/logout/route.js
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Since JWT tokens are client-side managed, no server-side action needed.
    return NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error logging out:', error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
