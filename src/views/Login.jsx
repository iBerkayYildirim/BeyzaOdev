import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Coffee } from 'lucide-react';

const Login = ({ setCurrentView }) => {
  const [role, setRole] = useState('shopper');

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'cafe') {
      setCurrentView('cafe-portal');
    } else if (role === 'shopper') {
      setCurrentView('eco-market');
    } else {
      setCurrentView('bridge');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-md relative overflow-hidden">
        
        {/* Decorative corner element */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-secondary">Welcome Back</h2>
            <p className="text-text-muted mt-2">Enter the ReCoffee portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary transition-colors bg-gray-50/50"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary transition-colors bg-gray-50/50"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">Select Your Role</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary transition-colors bg-gray-50/50 appearance-none"
                >
                  <option value="shopper">Individual (Shopper)</option>
                  <option value="cafe">Cafe Partner</option>
                  <option value="producer">Producer</option>
                </select>
                {/* Custom chevron */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-md text-lg font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:-translate-y-0.5"
            >
              Enter Portal
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            Don't have an account? <a href="#" className="font-semibold text-primary hover:text-primary-dark transition-colors">Sign up here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
