'use client'
import SignUp from '@/components/SignUp';

export default function SignupPage() {
  const handleSignup = async (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log('Signup successful:', data);
      // handle successful signup (e.g., redirect, show a message, etc.)
    } else {
      const errorData = await res.json();
      console.log('Signup failed:', errorData);
      // handle signup failure (e.g., show error message)
    }
  };

  return (
    <SignUp onSignup={handleSignup} />
  );
}
