"use client"

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import NewNavbar from '../../components/navbar';

const LoginPage = () => {
  const { signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <main>
      <NewNavbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Welcome to Video Uploader</h1>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;