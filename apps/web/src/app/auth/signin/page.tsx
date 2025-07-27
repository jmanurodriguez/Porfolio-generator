/* Redirect to dashboard - Authentication disabled for development */
"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SignInPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Automatically redirect to dashboard
    router.replace('/dashboard');
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting to dashboard...</p>
      </div>
    </main>
  );
}