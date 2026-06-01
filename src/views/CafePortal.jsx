import React, { useState } from 'react';
import { Award, Leaf, Scale, CheckCircle2 } from 'lucide-react';

const CafePortal = () => {
  const [wasteAmount, setWasteAmount] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const handleLogWaste = (e) => {
    e.preventDefault();
    if (wasteAmount && Number(wasteAmount) > 0) {
      setIsLogged(true);
      setTimeout(() => {
        setIsLogged(false);
        setWasteAmount('');
      }, 3000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-secondary">Cafe Dashboard</h1>
          <p className="text-text-muted mt-1">Manage your sustainability goals.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center font-medium text-sm">
          <StoreIcon className="w-4 h-4 mr-2 text-primary" />
          Brew Mood Alsancak
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Tier Tracker Progress Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Award className="w-32 h-32 text-primary" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Partner Tier</h2>
            </div>
            
            <p className="text-lg font-medium text-gray-700 mb-2">Standard Partner</p>
            <p className="text-sm text-text-muted mb-6">0 / 50 kg to Green Badge</p>
            
            <div className="relative w-full h-4 bg-gray-100 rounded-full overflow-hidden mb-4 shadow-inner">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-[#3f7e44] rounded-full transition-all duration-1000 ease-out"
                style={{ width: '0%' }}
              ></div>
            </div>
            
            <p className="text-xs text-text-muted italic">
              Log your daily grounds to reach the next tier and attract eco-conscious customers!
            </p>
          </div>
        </div>

        {/* Action Card: Report Waste */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Scale className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Report Waste</h2>
          </div>
          
          <form onSubmit={handleLogWaste} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount of Coffee Grounds (kg)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={wasteAmount}
                  onChange={(e) => setWasteAmount(e.target.value)}
                  className="block w-full pl-4 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-primary focus:border-primary text-xl bg-gray-50"
                  placeholder="0.0"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="text-gray-500 font-medium">kg</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-md text-lg font-bold text-white transition-all transform hover:-translate-y-0.5 ${
                isLogged ? 'bg-[#3f7e44]' : 'bg-primary hover:bg-primary-dark'
              }`}
            >
              {isLogged ? (
                <>
                  <CheckCircle2 className="mr-2 w-6 h-6" />
                  Logged Successfully!
                </>
              ) : (
                <>
                  <Leaf className="mr-2 w-5 h-5" />
                  Log Grounds
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      
      {/* Recent Activity Mock */}
      <div className="mt-8 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
         <h3 className="text-lg font-bold text-secondary mb-4">Recent Pickups</h3>
         <div className="text-center py-8 text-gray-400 flex flex-col items-center">
            <Leaf className="w-12 h-12 mb-3 opacity-20" />
            <p>No recent activity. Start logging waste today!</p>
         </div>
      </div>
    </div>
  );
};

// Quick mock icon component since we used Store in header
const StoreIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export default CafePortal;
