import { useState } from 'react';
import { AlertCircle, UserPlus, Mail, Lock, ChevronLeft } from 'lucide-react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      if (response.ok) {
        window.location.href = '/';
      } else {
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch {
      setError('Connection error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col">
      {/* Header */}
      <div className="bg-black/50 p-4 flex items-center border-b border-cyan-400/30">
        <button 
          onClick={() => window.location.href = '/'} 
          className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
        >
          <ChevronLeft size={20} />
          <span>Back to Login</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-black/50 p-8 rounded-lg border border-cyan-400/50 shadow-lg backdrop-blur-sm">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-cyan-400 mb-2">CREATE ACCOUNT</h1>
            <div className="h-1 w-24 bg-cyan-400 mx-auto rounded-full"></div>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-900/50 border border-red-500 rounded flex items-center gap-2 text-red-400">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <UserPlus size={18} className="absolute left-3 top-10 text-cyan-400" />
              <label className="block text-cyan-400 text-sm mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-900/50 border border-cyan-400/50 rounded pl-10 p-3 text-cyan-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                placeholder="Enter username"
                required
              />
            </div>

            <div className="relative">
              <Mail size={18} className="absolute left-3 top-10 text-cyan-400" />
              <label className="block text-cyan-400 text-sm mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900/50 border border-cyan-400/50 rounded pl-10 p-3 text-cyan-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="relative">
              <Lock size={18} className="absolute left-3 top-10 text-cyan-400" />
              <label className="block text-cyan-400 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-900/50 border border-cyan-400/50 rounded pl-10 p-3 text-cyan-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-bold p-3 rounded hover:bg-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => window.location.href = '/'}
              className="text-cyan-400 hover:text-cyan-300 text-sm"
            >
              Already have an account? Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;